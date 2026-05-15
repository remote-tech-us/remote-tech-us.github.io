// src/utils/docsLoader.js

// 1. Tell Vite to instantly scan and import all raw content text strings across folders
const rawFiles = import.meta.glob('../data/docs-content/**/*', { query: '?raw', eager: true });

export function getDevDocs() {
  const categoriesMap = {};

  Object.keys(rawFiles).forEach((filePath) => {
    // Break apart the path details: ["..", "data", "docs-content", "01-getting-started", "intro", "setup.sh"]
    const parts = filePath.split('/');
    const categoryFolder = parts[3]; // e.g., "01-getting-started"
    const pageFolder = parts[4];     // e.g., "intro"
    const fileName = parts[5];       // e.g., "setup.sh"

    if (!categoryFolder || !pageFolder || !fileName) return;

    // Clean up category IDs and human-readable names
    const categoryId = categoryFolder.replace(/^\d+-/, ''); // "getting-started"
    const categoryTitle = categoryFolder
      .replace(/^\d+-/, '')
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase()); // "Getting Started"

    if (!categoriesMap[categoryId]) {
      categoriesMap[categoryId] = {
        id: camelToKebab(categoryId),
        title: categoryTitle,
        pagesMap: {}
      };
    }

    const currentPage = categoriesMap[categoryId].pagesMap[pageFolder] || {
      id: pageFolder,
      title: pageFolder.replace(/-/g, ' '),
      files: []
    };

    const fileContent = rawFiles[filePath].default || rawFiles[filePath];

    // 2. Map files to their specific view buckets depending on extension
    if (fileName === 'content.json') {
      const meta = JSON.parse(fileContent);
      Object.assign(currentPage, meta); // Injects title, summary info, views toggles
    } else if (fileName === 'layout.html' || fileName.endsWith('.html')) {
      currentPage.htmlContent = fileContent;
    } else if (fileName === 'workflow.md' || fileName.endsWith('.md')) {
      currentPage.markdownContent = fileContent;
    } else {
      // Treat everything else (sh, yml, yaml, dockerfile) as a console code file asset
      const ext = fileName.split('.').pop().toLowerCase();
      currentPage.files.push({
        name: fileName,
        language: getLanguageFromExtension(ext, fileName),
        code: fileContent
      });
    }

    categoriesMap[categoryId].pagesMap[pageFolder] = currentPage;
  });

  // 3. Format back into a standard arrays format for rendering loops
  return Object.values(categoriesMap).map(cat => ({
    id: cat.id,
    title: cat.title,
    pages: Object.values(cat.pagesMap)
  }));
}

function camelToKebab(str) { return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(); }

function getLanguageFromExtension(ext, name) {
  if (name.toLowerCase() === 'dockerfile') return 'dockerfile';
  if (ext === 'sh') return 'bash';
  if (ext === 'yml' || ext === 'yaml') return 'yaml';
  return ext;
}
