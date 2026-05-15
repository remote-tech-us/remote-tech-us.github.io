// src/utils/data-loader.js

import fs from 'fs';
import path from 'path';

/**
 * Safely parses JSON configuration files and provides detailed 
 * console errors if structural malformations are discovered.
 */
function parseFileIntoObject(filePath) {
  try {
    // Check if the file path is completely invalid or doesn't exist
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8').trim();

    // Skip parsing and log a warning if the file is completely blank
    if (!fileContent) {
      console.warn(`⚠️ [Data Loader Warning]: Skipped empty file at "${filePath}"`);
      return null;
    }

    return JSON.parse(fileContent);
  } catch (error) {
    // Intercept parsing exceptions, log a clean readout, and skip execution without crashing
    console.error(`❌ [Data Loader Error]: Malformed content or syntax issue in "${filePath}"`);
    console.error(`🔧 Reason: ${error.message}`);
    return null;
  }
}

/**
 * Core loop function used to safely map individual items 
 * inside your documentation directories.
 */
export function loadFolderData(folderName) {
  const baseDir = path.join(process.cwd(), 'src', 'data', folderName);
  
  if (!fs.existsSync(baseDir)) {
    console.error(`❌ [Data Loader Error]: Target root directory "${baseDir}" does not exist.`);
    return [];
  }

  const categories = fs.readdirSync(baseDir);

  return categories.map((categoryDir) => {
    const categoryPath = path.join(baseDir, categoryDir);
    if (!fs.statSync(categoryPath).isDirectory()) return null;

    const pages = fs.readdirSync(categoryPath).map((pageDir) => {
      const pagePath = path.join(categoryPath, pageDir);
      if (!fs.statSync(pagePath).isDirectory()) return null;

      // Safe evaluation of the metadata block
      const contentJsonPath = path.join(pagePath, 'content.json');
      const meta = parseFileIntoObject(contentJsonPath);

      // If the JSON didn't parse correctly or was empty, provide a sensible fallback array item
      if (!meta) {
        return {
          id: pageDir,
          title: pageDir.replace(/-/g, ' '),
          content: "⚠️ Documentation content could not be parsed.",
          supportedViews: ["console"],
          files: []
        };
      }

      // Collect optional supplementary template sheets dynamically
      const files = [];
      const potentialFiles = fs.readdirSync(pagePath);

      potentialFiles.forEach((file) => {
        if (file === 'content.json') return;
        
        const filePath = path.join(pagePath, file);
        const codeContent = fs.readFileSync(filePath, 'utf-8');

        // Capture separate view blocks depending on standard file extensions
        if (file === 'layout.html') {
          meta.htmlContent = codeContent;
          meta.supportedViews = meta.supportedViews || [];
          if (!meta.supportedViews.includes('html')) meta.supportedViews.push('html');
        } else if (file === 'workflow.md') {
          meta.markdownContent = codeContent;
          meta.supportedViews = meta.supportedViews || [];
          if (!meta.supportedViews.includes('markdown')) meta.supportedViews.push('markdown');
        } else {
          // General setup files (.sh, .yml, .js, etc.) go to the multi-file console tab bar
          files.push({
            name: file,
            code: codeContent,
            language: path.extname(file).substring(1) || 'bash'
          });
        }
      });

      return {
        id: pageDir,
        ...meta,
        files
      };
    }).filter(Boolean);

    return {
      id: categoryDir,
      title: categoryDir.replace(/^\d+-/, '').replace(/-/g, ' '),
      pages
    };
  }).filter(Boolean);
}
