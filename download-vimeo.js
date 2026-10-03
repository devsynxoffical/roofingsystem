const { download } = require('vimeo-downloader');
const fs = require('fs');
const path = require('path');

const VIDEO_IDS = [
  "1203105488",
  "1203105494", 
  "1203105510",
  "1203105523",
  "1203105527",
  "1203105532",
  "1203105572"
];

const OUTPUT_DIR = path.join(__dirname, 'public/videos');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function downloadVideo(id) {
  try {
    console.log(`Downloading ${id}...`);
    const info = await download(`https://vimeo.com/${id}`, {
      quality: '1080p',
      output: OUTPUT_DIR,
      filename: `roofing-${id}.mp4`
    });
    console.log(`✓ Saved: ${info.path}`);
  } catch (err) {
    console.error(`✗ Failed ${id}:`, err.message);
  }
}

async function main() {
  console.log(`Downloading ${VIDEO_IDS.length} videos to ${OUTPUT_DIR}...`);
  for (const id of VIDEO_IDS) {
    await downloadVideo(id);
    // Small delay to be nice to Vimeo
    await new Promise(r => setTimeout(r, 1000));
  }
  console.log('Done!');
}

main();
