import { copyFileSync, mkdirSync, statSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const src = join(__dirname, 'entry.png');
const outDir = '/output';
const dest = join(outDir, 'entry.png');

let srcStat;
try {
  srcStat = statSync(src);
} catch {
  console.error('Source file not found:', src);
  process.exit(1);
}

if (srcStat.size === 0) {
  console.error('Source file is empty:', src);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dest);

// Verify output
statSync(dest);
