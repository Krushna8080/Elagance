import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const images = {
  'logo.png': 'https://images.unsplash.com/photo-1588533588400-9e6b9daad12d?w=200&h=200&fit=crop',
  'og-image.jpg': 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=630&fit=crop',
  'store-front.jpg': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
  'store-interior.jpg': 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&h=600&fit=crop',
  'collection-1.jpg': 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&h=600&fit=crop',
  'collection-2.jpg': 'https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=800&h=600&fit=crop',
  'collection-3.jpg': 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop',
  'collection-4.jpg': 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop',
  'about-image.jpg': 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=600&fit=crop',
};

async function downloadImage(url, filename) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch ${filename}`);
    const buffer = await response.arrayBuffer();
    const publicDir = join(__dirname, 'public');
    
    try {
      await mkdir(publicDir, { recursive: true });
    } catch (err) {
      if (err.code !== 'EEXIST') throw err;
    }
    
    await writeFile(join(publicDir, filename), Buffer.from(buffer));
    console.log(`✓ Downloaded: ${filename}`);
  } catch (error) {
    console.error(`✗ Error downloading ${filename}:`, error.message);
  }
}

console.log('Starting to download images...');

const downloads = Object.entries(images).map(([filename, url]) => 
  downloadImage(url, filename)
);

Promise.all(downloads).then(() => {
  console.log('All downloads completed!');
}).catch(error => {
  console.error('Error during downloads:', error);
}); 