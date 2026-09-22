import fs from 'fs';
import path from 'path';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Prompts the user for the directory path and processes files.
 */
rl.question('Enter the path to your SVG directory: ', (dirPath) => {
    const absolutePath = path.resolve(dirPath);

    if (!fs.existsSync(absolutePath)) {
        console.error('Error: Directory does not exist.');
        return rl.close();
    }

    // Filter for .svg files
    const files = fs.readdirSync(absolutePath).filter(file => file.endsWith('.svg'));

    if (files.length === 0) {
        console.log('No SVG files found in that directory.');
        return rl.close();
    }

    console.log('\nFound SVG files:');
    files.forEach((file, index) => {
        console.log(`${index + 1}: ${file}`);
    });

    rl.question('\nSelect files (e.g., 1,2,3-5,6): ', (selection) => {
        const selectedIndices = parseSelection(selection, files.length);
        
        if (selectedIndices.length === 0) {
            console.log('Invalid selection or no files selected.');
        } else {
            console.log('\nYou selected:');
            selectedIndices.forEach(idx => {
                console.log(`- ${files[idx - 1]}`);
            });
        }
        rl.close();
    });
});

/**
 * Expands a selection string like "1,2,3-5,6" into an array.
 */
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

