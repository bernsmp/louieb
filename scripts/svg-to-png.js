/**
 * svg-to-png.js — rasterize an SVG infographic to a hi-res PNG and upload it
 * to the Supabase `media/articles/` bucket. Prints the public URL.
 *
 * Why: markdown-article infographics are authored as SVG, but shipped as
 * hosted PNGs so (a) Louie can right-click-copy them into LinkedIn and
 * (b) the CMS WYSIWYG can't mangle inline SVG on save.
 *
 * Usage:
 *   node scripts/svg-to-png.js <input.svg> <name> [scale]
 *
 *   input.svg  path to the SVG file (should declare a viewBox)
 *   name       base filename, e.g. "shadow_pipeline_steps" (sanitized)
 *   scale      pixel multiplier, default 2 (retina-crisp)
 *
 * Embed the printed URL in the article as:
 *   <img src="<url>" alt="..." style="width:100%;display:block;border-radius:10px;" />
 */
require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { createClient } = require('@supabase/supabase-js');

const BUCKET = 'media';
const FOLDER = 'articles';

async function main() {
  const [, , svgPath, rawName, rawScale] = process.argv;
  if (!svgPath || !rawName) {
    console.error('Usage: node scripts/svg-to-png.js <input.svg> <name> [scale]');
    process.exit(1);
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) {
    console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY (check .env.local).');
    process.exit(1);
  }

  const scale = Number(rawScale) || 2;
  const svg = fs.readFileSync(path.resolve(svgPath));

  // Rasterize at `scale`x by raising librsvg's render density (72dpi = 1x).
  const png = await sharp(svg, { density: 72 * scale }).png({ compressionLevel: 9 }).toBuffer();
  const meta = await sharp(png).metadata();

  const safe = String(rawName).trim().replace(/[^a-zA-Z0-9_-]+/g, '_').replace(/^_+|_+$/g, '');
  const key = `${FOLDER}/${Date.now()}_${safe}.png`;

  const supabase = createClient(supabaseUrl, serviceKey);
  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(key, png, { contentType: 'image/png', upsert: true });
  if (error) {
    console.error('Upload failed:', error.message);
    process.exit(1);
  }

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(key);
  console.log(`OK  ${meta.width}x${meta.height}px (${(png.length / 1024).toFixed(0)} KB)`);
  console.log(data.publicUrl);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
