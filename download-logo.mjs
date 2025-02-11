import { writeFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Using a more minimalist fashion-oriented logo image
const logoUrl = 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=200&h=200&fit=crop&q=80';

async function downloadLogo() {
  try {
    console.log('Downloading logo...');
    const response = await fetch(logoUrl);
    if (!response.ok) throw new Error('Failed to fetch logo');
    const buffer = await response.arrayBuffer();
    const logoPath = join(__dirname, 'public', 'logo.png');
    await writeFile(logoPath, Buffer.from(buffer));
    console.log('✓ Logo downloaded successfully!');
  } catch (error) {
    console.error('✗ Error downloading logo:', error.message);
  }
}

downloadLogo(); 