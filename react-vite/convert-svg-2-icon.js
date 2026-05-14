// convert-svg-2-icon.js
import fs from 'fs';
import path from 'path';

const INPUT_SVG_PATH = './public/remote-tech-us_v2.svg';
const OUTPUT_JSX_PATH = './src/assets/remote-tech-icon.jsx';

function convertSvgToReact() {
  try {
    if (!fs.existsSync(INPUT_SVG_PATH)) {
      console.error(`❌ Input SVG file not found at: ${INPUT_SVG_PATH}`);
      return;
    }

    let svgRaw = fs.readFileSync(INPUT_SVG_PATH, 'utf8');

    const layerRegex = /<g[^>]*inkscape:groupmode="layer"[^>]*>([\s\S]*?)<\/g>/;
    const match = svgRaw.match(layerRegex);
    
    if (!match) {
      console.error("❌ Could not find the main Inkscape drawing layer (<g>) in your SVG.");
      return;
    }

    let innerContent = match[1].trim();

    // Parse raw inline CSS strings into secure React Objects style properties
    const styleRegex = /style="([^"]*)"/g;
    innerContent = innerContent.replace(styleRegex, (m, styleString) => {
      const pairs = styleString.split(';').filter(Boolean);
      const objectProperties = pairs.map(pair => {
        let [key, val] = pair.split(':');
        if (!key || !val) return '';
        
        key = key.trim();
        val = val.trim().replace(/['"]/g, '');

        const camelKey = key.replace(/-([a-z])/g, (m, letter) => letter.toUpperCase());
        
        // FIX: If a path references a missing gradient, let it fall back to currentColor instead of crashing
        if (val.startsWith('url(#')) {
          return `${camelKey}: 'currentColor'`;
        }
        
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

    innerContent = innerContent
      .replace(/inkscape:[a-z]+="[^"]*"/g, '')
      .replace(/sodipodi:[a-z]+="[^"]*"/g, '');

    innerContent = innerContent.replace(/([^> ]+)\s*>/g, (m, p1) => {
      if (p1.endsWith('/') || p1.includes('<') || p1.includes('!--')) return m;
      return `${p1} />`;
    });

    const componentTemplate = `// Generated automatically from raw Inkscape SVG geometry vectors
import React from 'react';

export default function RemoteTechIcon({ width = "1.5em", height = "1.5em", className = "" }) {
  return (
    <svg
      viewBox="-2 -2 46 46"
      width={width}
      height={height}
      className={\`inline-block align-middle \${className}\`}
    >
      {/* FIX: Removed group-level stroke/fill overrides so individual path styles can render */}
      <g transform="translate(-65.4537, -102.595)">
        \${innerContent.split('\\n').map(line => '        ' + line.trim()).join('\\n')}
      </g>
    </svg>
  );
}
`;

    fs.writeFileSync(OUTPUT_JSX_PATH, componentTemplate, 'utf8');
    console.log(`\n✅ Clean React component generated at: ${OUTPUT_JSX_PATH}\n`);

  } catch (error) {
    console.error("❌ An error occurred during the conversion process:", error);
  }
}

convertSvgToReact();

