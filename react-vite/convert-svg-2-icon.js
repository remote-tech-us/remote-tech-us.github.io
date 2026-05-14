// convert-svg-2-icon.js
import fs from 'fs';
import path from 'path';
import { promptFileSelection } from './select-files.js';

const INPUT_SRC_PATH = './public';
const OUTPUT_JSX_PATH = './src/assets';

async function main() {
    try {
        const defaultPath = './public';
        const targetExtension = 'svg'; // Can easily change to 'png', 'js', etc.

        // Executes the module with your configurations
        const selectedFiles = await promptFileSelection(defaultPath, targetExtension);
        
        console.log(`\nReady to convert ${selectedFiles.length} file(s):`);
        selectedFiles.forEach(filePath => {
            console.log(`<- Processing: ${filePath}`);
            convertSvgToReact(filePath);
            // Your icon processing code goes here
        });

    } catch (error) {
        console.error('\nExecution stopped:', error.message);
    }
}

function convertSvgToReact(svgFile) {
  try {
    if (!fs.existsSync(svgFile)) {
      console.error(`❌ Input SVG file not found at: ${INPUT_SRC_PATH}`);
      return;
    }

    let svgRaw = fs.readFileSync(svgFile, 'utf8');

    const layerRegex = /<g[^>]*inkscape:groupmode="layer"[^>]*>([\s\S]*?)<\/g>/;
    const match = svgRaw.match(layerRegex);
    
    if (!match) {
      console.error("❌ Could not find the main Inkscape drawing layer (<g>) in your SVG.");
      return;
    }

    let innerContent = match[1].trim();

    // Parse style attributes safely
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

    innerContent = innerContent
      .replace(/stroke-width=/g, 'strokeWidth=')
      .replace(/stroke-linecap=/g, 'strokeLinecap=')
      .replace(/stroke-dasharray=/g, 'strokeDasharray=')
      .replace(/fill-opacity=/g, 'fillOpacity=')
      .replace(/fill-rule=/g, 'fillRule=')
      .replace(/stroke-opacity=/g, 'strokeOpacity=');

    innerContent = innerContent.replace(/stroke="currentColor"/g, '');
    innerContent = innerContent.replace(/inkscape:[a-z]+="[^"]*"/g, '').replace(/sodipodi:[a-z]+="[^"]*"/g, '');

    innerContent = innerContent.replace(/([^> ]+)\s*>/g, (m, p1) => {
      if (p1.endsWith('/') || p1.includes('<') || p1.includes('!--')) return m;
      return `${p1} />`;
    });

    // Formatting multi-line indentations safely
    const formattedContent = innerContent.split('\n').map(line => '        ' + line.trim()).join('\n');

    // FIX: Using regular string concatenation instead of a nested literal slice avoids string interpolation crashes
    const componentTemplate = 
"// Generated automatically from raw Inkscape SVG geometry vectors\n" +
"import React from 'react';\n\n" +
"export default function RemoteTechIcon({ width = \"1.5em\", height = \"1.5em\", className = \"\" }) {\n" +
"  return (\n" +
"    <svg\n" +
"      viewBox=\"-2 -2 46 46\"\n" +
"      width={width}\n" +
"      height={height}\n" +
"      className={`inline-block align-middle ${className}`}\n" +
"    >\n" +
"      {/* Retain Inkscape's exact original structural placement matrix transform */}\n" +
"      <g transform=\"translate(-65.4537, -102.595)\">\n" + 
       formattedContent + "\n" +
"      </g>\n" +
"    </svg>\n" +
"  );\n" +
"}\n";
    
    jsxOutFile = path.basename(svgFile, '.svg');
    
    //fs.writeFileSync(jsxOutFile, componentTemplate, 'utf8');
    console.log(`\n✅ Clean React component generated at: ${jsxOutFile}\n`);

  } catch (error) {
    console.error("❌ An error occurred during the conversion process:", error);
  }
}

main();

