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
      fixLibUtilsImport(itemPath);
    }
  });
}

function fixLibUtilsImport(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  // Find @/lib/utils imports
  const libUtilsPattern = /from\s+["']@\/lib\/utils["']/g;
  if (libUtilsPattern.test(content)) {
    // Calculate the correct relative path
    const relativePath = path.relative(path.dirname(filePath), path.join(__dirname, 'lib/utils'));
    // Ensure the path uses forward slashes
    const normalizedPath = relativePath.replace(/\\/g, '/');
    
    content = content.replace(libUtilsPattern, `from "${normalizedPath}"`);
    updated = true;
  }
  
  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed @/lib/utils import in ${path.relative(__dirname, filePath)}`);
  }
}

// Process the entire project
processDirectory(path.join(__dirname, 'components'));
processDirectory(path.join(__dirname, 'src'));
console.log('Finished checking files for @/lib/utils imports'); 