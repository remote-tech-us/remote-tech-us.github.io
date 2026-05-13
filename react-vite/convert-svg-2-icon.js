// convert-svg.js
import fs from 'fs';
import path from 'path';

// CONFIGURATION: Set your input and output paths
const INPUT_SVG_PATH = './public/remote-tech-us_v2.svg';
const OUTPUT_JSX_PATH = './src/components/remote-tech-icon.jsx';

function convertSvgToReact() {
  try {
    if (!fs.existsSync(INPUT_SVG_PATH)) {
      console.error(`❌ Input SVG file not found at: ${INPUT_SVG_PATH}`);
      return;
    }

    let svgRaw = fs.readFileSync(INPUT_SVG_PATH, 'utf8');

    // 1. Extract only the inner contents of <g inkscape:label="Layer 1" ...>
    const layerRegex = /<g[^>]*inkscape:groupmode="layer"[^>]*>([\s\S]*?)<\/g>/;
    const match = svgRaw.match(layerRegex);
    
    if (!match) {
      console.error("❌ Could not find the main Inkscape drawing layer (<g>) in your SVG.");
      return;
    }

    let innerContent = match[1].trim();

    // 2. Convert standard HTML attributes to React camelCase attributes
    innerContent = innerContent
      .replace(/stroke-width=/g, 'strokeWidth=')
      .replace(/stroke-miterlimit=/g, 'strokeMiterlimit=')
      .replace(/stroke-opacity=/g, 'strokeOpacity=')
      .replace(/fill-opacity=/g, 'fillOpacity=');

    // 3. Strip out inkscape/sodipodi specific node selectors from individual paths
    innerContent = innerContent
      .replace(/inkscape:[a-z]+="[^"]*"/g, '')
      .replace(/sodipodi:[a-z]+="[^"]*"/g, '');

    // 4. Force links to map to currentColor instead of the missing linearGradients
    innerContent = innerContent.replace(/stroke:url\([^)]+\)/g, 'stroke="currentColor"');

    // 5. Build the complete, clean React component string
    const componentTemplate = `// Generated automatically from raw Inkscape SVG geometry vectors
import React from 'react';

export default function MyCustomIcon({ width = "1.2em", height = "1.2em", className = "" }) {
  return (
    <svg
      viewBox="0 0 41.798294 41.744888"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      className={\`inline-block align-middle \${className}\`}
    >
      {/* Retain Inkscape's exact original structural placement matrix transform */}
      <g transform="translate(-65.4537, -102.595)">
        ${innerContent.split('\n').map(line => '        ' + line.trim()).join('\n')}
      </g>
    </svg>
  );
}
`;

    // 6. Write the finalized clean file out to the components directory
    const outputDir = path.dirname(OUTPUT_JSX_PATH);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_JSX_PATH, componentTemplate, 'utf8');
    console.log(`\nGAINDED CLEAN COMPILE WORK 🚀`);
    console.log(`✅ React Component successfully generated at: ${OUTPUT_JSX_PATH}\n`);

  } catch (error) {
    console.error("❌ An error occurred during the conversion process:", error);
  }
}

convertSvgToReact();

