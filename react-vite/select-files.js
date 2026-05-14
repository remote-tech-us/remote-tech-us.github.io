import fs from 'fs';
import path from 'path';
import readline from 'readline';

/**
 * Prompts the user to select files of a specific extension from a directory.
 * @param {string} defaultDir - The fallback directory if none is provided.
 * @param {string} [extension='svg'] - The file extension to filter by (case-insensitive).
 * @returns {Promise<string[]>} Array of absolute file paths to the selected files.
 */
export async function promptFileSelection(defaultDir, extension = 'svg') {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Format extension to ensure clean matching (e.g., "svg" -> ".svg")
    const cleanExt = extension.startsWith('.') ? extension.toLowerCase() : `.${extension.toLowerCase()}`;

    return new Promise((resolve, reject) => {
        rl.question(`Enter directory path [Default: ${defaultDir}]: `, (inputDir) => {
            const chosenDir = inputDir.trim() || defaultDir;
            const absolutePath = path.resolve(chosenDir);

            if (!fs.existsSync(absolutePath)) {
                rl.close();
                return reject(new Error(`Directory does not exist: ${absolutePath}`));
            }

            // Filter directory for files matching the targeted extension
            const files = fs.readdirSync(absolutePath).filter(file => 
                file.toLowerCase().endsWith(cleanExt)
            );

            if (files.length === 0) {
                rl.close();
                return reject(new Error(`No *${cleanExt} files found in: ${absolutePath}`));
            }

            console.log(`\nFound ${files.length} *${cleanExt} file(s):`);
            files.forEach((file, index) => {
                console.log(`${index + 1}: ${file}`);
            });

            rl.question('\nSelect files (e.g., 1,2,3-5,6) or press Enter for ALL: ', (selection) => {
                rl.close();
                
                let selectedFiles = [];
                const trimmedSelection = selection.trim();
                
                if (!trimmedSelection) {
                    selectedFiles = files;
                } else {
                    const selectedIndices = parseSelection(trimmedSelection, files.length);
                    selectedFiles = selectedIndices.map(idx => files[idx - 1]);
                }

                // Map files to absolute system paths
                const absoluteFilePaths = selectedFiles.map(file => path.join(absolutePath, file));
                resolve(absoluteFilePaths);
            });
        });
    });
}

function parseSelection(input, max) {
    const results = new Set();
    const parts = input.split(',');

    parts.forEach(part => {
        const trimPart = part.trim();
        if (trimPart.includes('-')) {
            const [start, end] = trimPart.split('-').map(Number);
            for (let i = start; i <= end; i++) {
                if (i >= 1 && i <= max) results.add(i);
            }
        } else {
            const num = Number(trimPart);
            if (num >= 1 && num <= max) results.add(num);
        }
    });

    return Array.from(results).sort((a, b) => a - b);
}

