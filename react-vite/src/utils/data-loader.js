/**
 * Vite Client-Side Folder Data Loader (All-inclusive Raw Content Mapping)
 */
export function loadFolderData() {
  const files = import.meta.glob('/src/data/dev-docs/**/*.{json,md,html,sh,js,yml,yaml}', {
    query: '?raw',
    eager: true,
  });

  const categoriesMap = {};

  Object.entries(files).forEach(([filePath, module]) => {
    const rawContent = module.default || '';
    const parts = filePath.split('/');
    const fileName = parts[parts.length - 1]; 
    const pageDir = parts[parts.length - 2];     
    const categoryDir = parts[parts.length - 3]; 

    if (!categoryDir || !pageDir || !fileName) return;

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
        supportedViews: ['console'], // Console is always a baseline option
        files: []
      };
    }

    const currentPage = categoriesMap[categoryDir].pagesMap[pageDir];

    // 1. Process Metadata
    if (fileName === 'content.json') {
      try {
        if (rawContent.trim()) {
          const meta = JSON.parse(rawContent);
          // Keep explicit supportedViews overrides if defined in json, otherwise append
          Object.assign(currentPage, meta);
        }
      } catch (err) {
        console.error(`❌ JSON Syntax error in "${filePath}":`, err.message);
      }
      return; // Skip adding content.json to selectable code files
    }

    // 2. Extract File Information
    const ext = fileName.split('.').pop() || 'text';
    
    // Determine file type category mapping
    let fileType = 'text';
    if (ext === 'html') fileType = 'html';
    if (ext === 'md') fileType = 'markdown';

    // Track which global view types are supported on this page dynamically
    if (fileType === 'html' && !currentPage.supportedViews.includes('html')) {
      currentPage.supportedViews.push('html');
    }
    if (fileType === 'markdown' && !currentPage.supportedViews.includes('markdown')) {
      currentPage.supportedViews.push('markdown');
    }

    // Push EVERY asset into the universal files array
    currentPage.files.push({
      name: fileName,
      code: rawContent,
      language: ext === 'yml' || ext === 'yaml' ? 'yaml' : ext,
      type: fileType // Store the type so the UI can filter it later
    });
  });

  return Object.values(categoriesMap).map(category => ({
    id: category.id,
    title: category.title,
    pages: Object.values(category.pagesMap)
  }));
}
