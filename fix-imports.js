import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all .tsx files in the components/ui directory
const componentsDir = path.join(__dirname, 'components', 'ui');
const files = fs.readdirSync(componentsDir).filter(file => file.endsWith('.tsx'));

// Process each file
let updatedCount = 0;
files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  // Check for various import patterns and fix them
  
  // Pattern 1: import { cn } from "@/lib/utils"
  if (content.includes('import { cn } from "@/lib/utils"')) {
    content = content.replace(
      'import { cn } from "@/lib/utils"',
      'import { cn } from "../../lib/utils"'
    );
    updated = true;
  }
  
  // Pattern 2: import { cn } from '@/lib/utils'
  if (content.includes("import { cn } from '@/lib/utils'")) {
    content = content.replace(
      "import { cn } from '@/lib/utils'",
      "import { cn } from '../../lib/utils'"
    );
    updated = true;
  }
  
  // Pattern 3: generic import from @/lib/utils with any variable name
  const genericPattern = /import\s+\{\s*([^}]+)\s*\}\s+from\s+["']@\/lib\/utils["']/g;
  if (genericPattern.test(content)) {
    content = content.replace(
      genericPattern,
      'import { $1 } from "../../lib/utils"'
    );
    updated = true;
  }
  
  // Pattern 4: any other @/ paths in imports
  const aliasPattern = /from\s+["']@\/([^"']+)["']/g;
  if (aliasPattern.test(content)) {
    content = content.replace(
      aliasPattern, 
      (match, p1) => `from "../../${p1}"`
    );
    updated = true;
  }
  
  // Write the updated content back to the file if changes were made
  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
    console.log(`Updated imports in ${file}`);
  }
});

// Check src files for imports
const srcComponentsDir = path.join(__dirname, 'src', 'components');
if (fs.existsSync(srcComponentsDir)) {
  processDirectory(srcComponentsDir);
}

const srcPagesDir = path.join(__dirname, 'src', 'pages');
if (fs.existsSync(srcPagesDir)) {
  processDirectory(srcPagesDir);
}

// Function to process a directory recursively
function processDirectory(dir) {
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const itemPath = path.join(dir, item);
    const stats = fs.statSync(itemPath);
    
    if (stats.isDirectory()) {
      processDirectory(itemPath);
    } else if (item.endsWith('.jsx') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.ts')) {
      updateFile(itemPath);
    }
  });
}

// Function to update imports in a file
function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  // Match imports from "/components/ui/*"
  const componentsUIPattern = /from\s+["'](?:\.\.\/)*components\/ui\/([^"']+)["']/g;
  if (componentsUIPattern.test(content)) {
    content = content.replace(
      componentsUIPattern,
      (match, p1) => {
        // Determine the correct relative path based on file location
        const relativeToComponents = path.relative(path.dirname(filePath), path.join(__dirname, 'components', 'ui'));
        return `from "${relativeToComponents}/${p1}"`;
      }
    );
    updated = true;
  }
  
  // Match @/ paths in src files
  const aliasPattern = /from\s+["']@\/([^"']+)["']/g;
  if (aliasPattern.test(content)) {
    // Calculate relative path based on the file's location
    const relative = path.relative(path.dirname(filePath), __dirname);
    content = content.replace(
      aliasPattern, 
      (match, p1) => `from "${relative}/${p1}"`
    );
    updated = true;
  }
  
  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
    console.log(`Updated imports in ${path.relative(__dirname, filePath)}`);
  }
}

console.log(`\nUpdated ${updatedCount} files successfully.`); 