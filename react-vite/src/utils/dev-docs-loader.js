// src/utils/docsLoader.js

// 1. Tell Vite to scan and import all raw content text strings across folders
const rawFiles = import.meta.glob('../data/dev-docs/**/*', { query: '?raw', eager: true });

export function getDevDocs() {
  const categoriesMap = {};

  Object.keys(rawFiles).forEach((filePath) => {
    const parts = filePath.split('/');
    const categoryFolder = parts[3]; // e.g., "01-getting-started"
    const pageFolder = parts[4];     // e.g., "intro"
    const fileName = parts[5];       // e.g., "setup.sh"

    if (!categoryFolder || !pageFolder || !fileName) return;

    // Clean up category IDs and human-readable names
    const categoryId = categoryFolder.replace(/^\d+-/, '');
    const categoryTitle = categoryFolder
      .replace(/^\d+-/, '')
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());

    if (!categoriesMap[categoryId]) {
      categoriesMap[categoryId] = {
        id: categoryId,
        title: categoryTitle,
        pagesMap: {}
      };
    }

    const currentPage = categoriesMap[categoryId].pagesMap[pageFolder] || {
      id: pageFolder,
      title: pageFolder.replace(/-/g, ' '),
      files: []
    };

    // --- ✅ FIXED RAW MODULE EXTRACTION ---
    const moduleValue = rawFiles[filePath];
    let fileContent = "";

    if (moduleValue && typeof moduleValue === 'object') {
      // Pull 'default' if it exists, otherwise check if the object itself can be cast to string
      fileContent = moduleValue.default !== undefined ? moduleValue.default : String(moduleValue);
    } else {
      fileContent = String(moduleValue || "");
    }
    // --------------------------------------

    // 2. Map files to their specific view buckets depending on extension
    if (fileName === 'content.json') {
      try {
        const meta = JSON.parse(fileContent);
        Object.assign(currentPage, meta); 
      } catch (e) {
        console.error(`Malformed JSON configuration file in: ${filePath}`, e);
      }
    } else if (fileName === 'layout.html' || fileName.endsWith('.html')) {
      currentPage.htmlContent = fileContent;
    } else if (fileName === 'workflow.md' || fileName.endsWith('.md')) {
      currentPage.markdownContent = fileContent;
    } else {
      const ext = fileName.split('.').pop().toLowerCase();
      currentPage.files.push({
        name: fileName,
        language: getLanguageFromExtension(ext, fileName),
        code: fileContent
      });
    }

    categoriesMap[categoryId].pagesMap[pageFolder] = currentPage;
  });

  return Object.values(categoriesMap).map(cat => ({
    id: cat.id,
    title: cat.title,
    pages: Object.values(cat.pagesMap)
  }));
}

function getLanguageFromExtension(ext, name) {
  if (name.toLowerCase() === 'dockerfile') return 'dockerfile';
  if (ext === 'sh') return 'bash';
  if (ext === 'yml' || ext === 'yaml') return 'yaml';
  return ext;
}
