// scr/utils/data-loader.js

/**
 * Vite Client-Side Folder Data Loader
 * Uses import.meta.glob to read files at compile-time safely for the browser.
 */
export function loadFolderData() {
  // 1. Eagerly grab all markdown, json, and asset code profiles in the directory
  const files = import.meta.glob('/src/data/dev-docs/**/*.{json,md,html,sh,js,yml,yaml}', {
    query: '?raw',
    eager: true,
  });

  const categoriesMap = {};

  // 2. Parse out file paths and match them structural-wise
  Object.entries(files).forEach(([filePath, module]) => {
    const rawContent = module.default || '';
    
    // Split paths: /src/data/dev-docs/01-getting-started/intro/content.json
    const parts = filePath.split('/');
    const categoryDir = parts[4]; // "01-getting-started"
    const pageDir = parts[5];     // "intro"
    const fileName = parts[6];    // "content.json"

    if (!categoryDir || !pageDir || !fileName) return;

    // Initialize map structures
    if (!categoriesMap[categoryDir]) {
      categoriesMap[categoryDir] = {
        id: categoryDir,
        title: categoryDir.replace(/^\d+-/, '').replace(/-/g, ' '),
        pagesMap: {}
      };
    }

    if (!categoriesMap[categoryDir].pagesMap[pageDir]) {
      categoriesMap[categoryDir].pagesMap[pageDir] = {
        id: pageDir,
        title: pageDir.replace(/-/g, ' '),
        content: '',
        supportedViews: ['console'],
        files: []
      };
    }

    const currentPage = categoriesMap[categoryDir].pagesMap[pageDir];

    // 3. Populate matching page blocks based on raw structural text extensions
    if (fileName === 'content.json') {
      try {
        if (rawContent.trim()) {
          const meta = JSON.parse(rawContent);
          Object.assign(currentPage, meta);
        } else {
          console.warn(`⚠️ [Vite Loader]: Empty meta file at "${filePath}"`);
        }
      } catch (err) {
        console.error(`❌ [Vite Loader]: JSON Syntax error in "${filePath}":`, err.message);
      }
    } else if (fileName === 'layout.html') {
      currentPage.htmlContent = rawContent;
      if (!currentPage.supportedViews.includes('html')) currentPage.supportedViews.push('html');
    } else if (fileName === 'workflow.md') {
      currentPage.markdownContent = rawContent;
      if (!currentPage.supportedViews.includes('markdown')) currentPage.supportedViews.push('markdown');
    } else {
      // Shove standard terminal scripts directly to the interactive console array tabs
      currentPage.files.push({
        name: fileName,
        code: rawContent,
        language: fileName.split('.').pop() || 'bash'
      });
    }
  });

  // 4. Flatten mapping objects out to clean arrays for sidebar loops
  return Object.values(categoriesMap).map(category => ({
    id: category.id,
    title: category.title,
    pages: Object.values(category.pagesMap)
  }));
}
