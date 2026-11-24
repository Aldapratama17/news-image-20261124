import { copyFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const src = join(__dirname, 'entry.png');
const outDir = '/output';
const dest = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dest);
