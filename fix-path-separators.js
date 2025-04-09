import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function processDirectory(dir) {
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const itemPath = path.join(dir, item);
    const stats = fs.statSync(itemPath);
    
    if (stats.isDirectory()) {
      processDirectory(itemPath);
    } else if (item.endsWith('.jsx') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.ts')) {
      fixPathSeparators(itemPath);
    }
  });
}

function fixPathSeparators(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  // Find mixed path separators like "..\..\components\ui/button"
  const mixedPathPattern = /from\s+["']([^"']*\\[^"']*)["']/g;
  if (mixedPathPattern.test(content)) {
    content = content.replace(mixedPathPattern, (match, p1) => {
      // Replace all backslashes with forward slashes
      return match.replace(/\\/g, '/');
    });
    updated = true;
  }
  
  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed path separators in ${path.relative(__dirname, filePath)}`);
  }
}

// Process the entire project
processDirectory(path.join(__dirname, 'src'));
console.log('Finished checking files for mixed path separators'); 