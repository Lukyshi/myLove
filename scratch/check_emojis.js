const fs = require('fs');
const path = require('path');

const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}]/u;

const files = ['index.html', 'css/style.css', 'js/script.js', 'js/config.js'];

let totalEmojis = 0;
files.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/);
  let fileCount = 0;
  lines.forEach((line, index) => {
    if (emojiRegex.test(line)) {
      console.log(`Emoji in ${file}:${index + 1}: ${line.trim()}`);
      fileCount++;
      totalEmojis++;
    }
  });
  if (fileCount === 0) {
    console.log(`[PASS] ${file}: 0 emojis`);
  }
});

console.log(`\nTotal emojis found: ${totalEmojis}`);
