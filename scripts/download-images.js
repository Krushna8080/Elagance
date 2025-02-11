import { writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const images = {
  'logo.png': 'https://images.unsplash.com/photo-1588533588400-9e6b9daad12d?w=200&h=200&fit=crop',
  'hero-1.jpg': 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1920&h=1080&fit=crop',
  'hero-2.jpg': 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=1080&fit=crop',
  'featured-1.jpg': 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&h=1000&fit=crop',
  'featured-2.jpg': 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&h=1000&fit=crop',
  'featured-3.jpg': 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&h=1000&fit=crop',
  'collection-1.jpg': 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=800&h=1000&fit=crop',
  'collection-2.jpg': 'https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=800&h=1000&fit=crop',
  'collection-3.jpg': 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1000&fit=crop',
  'lookbook-1.jpg': 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=1000&fit=crop',
  'lookbook-2.jpg': 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=1000&fit=crop',
  'lookbook-3.jpg': 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800&h=1000&fit=crop',
};

async function downloadImage(url, filename) {
  try {
    console.log(`Downloading ${filename}...`);
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    
    const buffer = await response.arrayBuffer();
    const publicDir = join(dirname(__filename), '..', 'public');
    
    try {
      await mkdir(publicDir, { recursive: true });
    } catch (err) {
      if (err.code !== 'EEXIST') throw err;
    }
    
    await writeFile(join(publicDir, filename), Buffer.from(buffer));
    console.log(`✓ Downloaded ${filename}`);
  } catch (error) {
    console.error(`✗ Error downloading ${filename}:`, error.message);
  }
}

console.log('Starting image downloads...');

try {
  await Promise.all(
    Object.entries(images).map(([filename, url]) => downloadImage(url, filename))
  );
  console.log('All downloads completed successfully!');
} catch (error) {
  console.error('Error during downloads:', error);
}
