// convert-svg-2-icon.js
import fs from 'fs';
import path from 'path';
import { promptFileSelection } from './select-files.js';

const INPUT_SRC_PATH = './public';
const OUTPUT_JSX_PATH = './src/assets';

/**
 * Converts a kebab-case/snake_case filename into a clean PascalCase component name
 */
function toPascalCase(str) {
    return str
        .replace(/[-_]+/g, ' ')
        .replace(/[^\w\s]/g, '')
        .replace(/\s+(.)(\w*)/g, ($1, $2, $3) => $2.toUpperCase() + $3.toLowerCase())
        .replace(/^[a-z]/, $1 => $1.toUpperCase());
}

async function main() {
    try {
        const defaultPath = './public';
        const targetExtension = 'svg';

        const selectedFiles = await promptFileSelection(defaultPath, targetExtension);

        console.log(`\nReady to convert ${selectedFiles.length} file(s):`);
        selectedFiles.forEach(filePath => {
            console.log(`<- Processing: ${filePath}`);
            convertSvgToReact(filePath);
        });

    } catch (error) {
        console.error('\nExecution stopped:', error.message);
    }
}

function convertSvgToReact(svgFile) {
  try {
    if (!fs.existsSync(svgFile)) {
      console.error(`❌ Input SVG file not found at: ${svgFile}`);
      return;
    }

    let svgRaw = fs.readFileSync(svgFile, 'utf8');

    // Attempt to grab Inkscape layer configuration first
    const layerRegex = /<g[^>]*inkscape:groupmode="layer"[^>]*>([\s\S]*?)<\/g>/;
    const match = svgRaw.match(layerRegex);

    let innerContent = '';
    let isSimpleSvg = false;
    let originalViewBox = '';

    // Extract core width and height definitions to maintain design ratios
    const widthMatch = svgRaw.match(/<svg[^>]*\bwidth=["']([^"']+)["']/);
    const heightMatch = svgRaw.match(/<svg[^>]*\bheight=["']([^"']+)["']/);
    const viewBoxMatch = svgRaw.match(/<svg[^>]*\bviewBox=["']([^"']+)["']/);

    const origWidth = widthMatch ? widthMatch[1] : "24";
    const origHeight = heightMatch ? heightMatch[1] : "24";
    
    // Calculate fallback viewBox dynamically if not defined explicitly
    originalViewBox = viewBoxMatch ? viewBoxMatch[1] : `0 0 ${origWidth} ${origHeight}`;

    if (match) {
      innerContent = match[1].trim();
    } else {
      // Fallback: Strip the outer wrapper tag and capture all inner tags
      isSimpleSvg = true;
      const rootSvgRegex = /<svg[^>]*>([\s\S]*?)<\/svg>/i;
      const simpleMatch = svgRaw.match(rootSvgRegex);
      
      if (!simpleMatch) {
         console.error(`❌ Invalid or unparseable markup found inside: ${path.basename(svgFile)}`);
         return;
      }
      innerContent = simpleMatch[1].trim();
    }

    // Convert standard kebab-case presentation attributes to camelCase React properties
    innerContent = innerContent
      .replace(/fill-rule=/g, 'fillRule=')
      .replace(/stroke-width=/g, 'strokeWidth=')
      .replace(/stroke-linecap=/g, 'strokeLinecap=')
      .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
      .replace(/stroke-dasharray=/g, 'strokeDasharray=')
      .replace(/fill-opacity=/g, 'fillOpacity=')
      .replace(/stroke-opacity=/g, 'strokeOpacity=')
      .replace(/clip-rule=/g, 'clipRule=');

    // Parse inline style declarations safely into standard React style objects
    const styleRegex = /style="([^"]*)"/g;
    innerContent = innerContent.replace(styleRegex, (m, styleString) => {
      const pairs = styleString.split(';').filter(Boolean);
      const objectProperties = pairs.map(pair => {
        let [key, val] = pair.split(':');
        if (!key || !val) return '';
        key = key.trim();
        val = val.trim().replace(/['"]/g, '');
        const camelKey = key.replace(/-([a-z])/g, (m, letter) => letter.toUpperCase());
        if (val.startsWith('url(#')) return `${camelKey}: 'currentColor'`;
        return `${camelKey}: '${val}'`;
      }).filter(Boolean);
      return `style={{ ${objectProperties.join(', ')} }}`;
    });

    // Cleanup foreign editor metadata strings
    innerContent = innerContent
      .replace(/inkscape:[a-z]+="[^"]*"/g, '')
      .replace(/sodipodi:[a-z]+="[^"]*"/g, '');

    // Format final line indentation
    const formattedContent = innerContent.split('\n').map(line => '    ' + line.trim()).join('\n');

    const baseName = path.basename(svgFile, '.svg');
    const componentName = toPascalCase(baseName);
    
    // Inject components natively dependent on whether matrix layer conversions are required
    let jsxBody = "";
    if (isSimpleSvg) {
        jsxBody = `  return (\n    <svg\n      viewBox="${originalViewBox}"\n      width={width}\n      height={height}\n      className={\`inline-block align-middle \${className}\`}\n    >\n${formattedContent}\n    </svg>\n  );`;
    } else {
        jsxBody = `  return (\n    <svg\n      viewBox="-2 -2 46 46"\n      width={width}\n      height={height}\n      className={\`inline-block align-middle \${className}\`}\n    >\n      {/* Retain Inkscape's exact original structural placement matrix transform */}\n      <g transform="translate(-65.4537, -102.595)">\n    ${formattedContent}\n      </g>\n    </svg>\n  );`;
    }

    const componentTemplate =
`// Generated automatically from geometry vectors
import React from 'react';

export default function ${componentName}({ width = "1.5em", height = "1.5em", className = "" }) {
${jsxBody}
}
`;

    const outFileName = `${componentName}.jsx`;
    const finalOutputPath = path.join(OUTPUT_JSX_PATH, outFileName);

    // Create target directory if missing
    if (!fs.existsSync(OUTPUT_JSX_PATH)) {
        fs.mkdirSync(OUTPUT_JSX_PATH, { recursive: true });
    }

    fs.writeFileSync(finalOutputPath, componentTemplate, 'utf8');
    console.log(`✅ Clean React component generated at: ${finalOutputPath}\n`);

  } catch (error) {
    console.error("❌ An error occurred during the conversion process:", error);
  }
}

main();

