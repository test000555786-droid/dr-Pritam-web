const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const sourceDir = process.argv[2];
const destDir = process.argv[3];

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.png'));

async function processFiles() {
  for (const file of files) {
    const parts = file.split('_');
    let baseName = file.replace('.png', '');
    if (parts.length > 1) {
        const lastPart = parts[parts.length - 1].split('.')[0];
        if (/^\d+$/.test(lastPart)) {
            baseName = parts.slice(0, -1).join('_');
        }
    }
    const inputPath = path.join(sourceDir, file);
    const outputPath = path.join(destDir, `${baseName}.webp`);
    try {
      await sharp(inputPath).webp({ quality: 85 }).toFile(outputPath);
      console.log(`Saved ${outputPath}`);
    } catch (e) {
      console.error(`Failed to process ${file}: ${e}`);
    }
  }
}

processFiles();
