// src/utils/data-loader.js

/**
 * Universally imports and builds structure for any specific data folder context.
 * @param {string} folderName - The folder name inside src/data (e.g., 'docs-content', 'products', 'services')
 * @returns {Array} Formatted, sorted collection of items and metadata
 */
export function loadFolderData(folderName) {
  // 1. Grab everything in the data folder cleanly as raw values
  // We use full lookups to give Vite predictable base scan matching boundaries
  const allFiles = import.meta.glob('../data/**/*', { query: '?raw', eager: true });
  
  const contentMap = {};

  Object.keys(allFiles).forEach((filePath) => {
    // Split: ["..", "data", "docs-content", "01-getting-started", "intro", "setup.sh"]
    const parts = filePath.split('/');
    
    // Find where our target folder is positioned inside the split path array
    const folderIndex = parts.indexOf(folderName);
    if (folderIndex === -1) return; // Skip files that don't belong to the active directory context

    // Extract dynamic structural context parts
    const categoryFolder = parts[folderIndex + 1]; // e.g., "01-getting-started" or "featured_products"
    const pageFolder = parts[folderIndex + 2];     // e.g., "intro" or "product-sku-1"
    const fileName = parts[folderIndex + 3];       // e.g., "setup.sh" or "details.md"

    if (!categoryFolder) return;

    // Build unique references and display names cleanly
    const categoryId = categoryFolder.replace(/^\d+-/, '');
    const categoryTitle = categoryId.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

    // Safely unwrap the raw file string payload from Vite's module wrapper
    const moduleValue = allFiles[filePath];
    const fileContent = moduleValue && typeof moduleValue === 'object' 
      ? (moduleValue.default !== undefined ? moduleValue.default : String(moduleValue))
      : String(moduleValue || "");

    // --- STRATEGY A: TWO-LEVEL NESTED DIRECTORIES (like docs-content/category/page/files) ---
    if (pageFolder && fileName) {
      if (!contentMap[categoryId]) {
        contentMap[categoryId] = { id: categoryId, title: categoryTitle, pagesMap: {} };
      }

      const currentPage = contentMap[categoryId].pagesMap[pageFolder] || {
        id: pageFolder,
        title: pageFolder.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
        files: []
      };

      parseFileIntoObject(fileName, fileContent, currentPage);
      contentMap[categoryId].pagesMap[pageFolder] = currentPage;
    } 
    
    // --- STRATEGY B: FLAT SINGLE-LEVEL DIRECTORIES (like products/product-id/files) ---
    else if (pageFolder && !fileName) {
      // Treat categoryId as the primary item ID, and pageFolder as the filename target
      if (!contentMap[categoryId]) {
        contentMap[categoryId] = { id: categoryId, files: [] };
      }
      parseFileIntoObject(pageFolder, fileContent, contentMap[categoryId]);
    }
  });

  // 2. Final data conversion loop out to arrays
  return Object.values(contentMap).map(item => {
    if (item.pagesMap) {
      item.pages = Object.values(item.pagesMap);
      delete item.pagesMap;
    }
    return item;
  });
}

/**
 * Route raw contents to appropriate object properties depending on file extensions
 */
function parseFileIntoObject(fileName, content, targetObject) {
  if (fileName === 'content.json' || fileName === 'meta.json') {
    try {
      Object.assign(targetObject, JSON.parse(content));
    } catch (e) {
      console.error(`Malformed JSON configuration: ${fileName}`, e);
    }
  } else if (fileName === 'layout.html' || fileName.endsWith('.html')) {
    targetObject.htmlContent = content;
  } else if (fileName === 'workflow.md' || fileName.endsWith('.md')) {
    targetObject.markdownContent = content;
  } else {
    // Package code snippets or setup scripts natively
    const ext = fileName.split('.').pop().toLowerCase();
    if (!targetObject.files) targetObject.files = [];
    targetObject.files.push({
      name: fileName,
      language: getSyntaxLanguage(ext, fileName),
      code: content
    });
  }
}

function getSyntaxLanguage(ext, name) {
  if (name.toLowerCase() === 'dockerfile') return 'dockerfile';
  if (['sh', 'bash'].includes(ext)) return 'bash';
  if (['yml', 'yaml'].includes(ext)) return 'yaml';
  return ext;
}
