const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const regex = /(?:src|data-photo)=["'](assets\/(?:images|audio)\/[^"']+)["']/g;
let match;
const missingImages = [];
let imageCount = 0;

while ((match = regex.exec(html)) !== null) {
  const assetRel = match[1];
  if (assetRel.endsWith('.mp3')) {
    const hasAudio = fs.existsSync(path.join(__dirname, '..', assetRel));
    console.log(`Audio file status (${assetRel}): ${hasAudio ? 'Found' : 'Optional (Web Audio acoustic synth active)'}`);
    continue;
  }
  imageCount++;
  const assetPath = path.join(__dirname, '..', assetRel);
  if (!fs.existsSync(assetPath)) {
    missingImages.push(assetRel);
  }
}

if (missingImages.length === 0) {
  console.log(`[PASS] All ${imageCount} image assets in index.html exist and verified!`);
} else {
  console.error(`[FAIL] Missing image assets:`, missingImages);
  process.exit(1);
}
