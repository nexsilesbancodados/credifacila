import { readdir, stat } from "node:fs/promises";
import { join, extname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ASSETS_DIR = join(__dirname, "..", "src", "assets");

const QUALITY = 72;
const VARIANTS = [
  { suffix: "", width: null },
  { suffix: "-md", width: 1200 },
  { suffix: "-sm", width: 640 },
];

const isSource = (file) => /\.(jpe?g|png|webp)$/i.test(file);
const isVariant = (file) => /-(sm|md)\.webp$/i.test(file);

async function convert(file) {
  const fullPath = join(ASSETS_DIR, file);
  const ext = extname(file).toLowerCase();
  const name = basename(file, ext);
  const isLogo = /logo/i.test(name);
  const sourceIsWebp = ext === ".webp";

  const inputBuffer = await sharp(fullPath).toBuffer();
  const meta = await sharp(inputBuffer).metadata();
  const originalSize = (await stat(fullPath)).size;

  // Para fontes já em .webp, não sobrescrever o original (suffix "");
  // só geramos as variantes -md e -sm.
  let variants = isLogo ? [VARIANTS[0]] : VARIANTS;
  if (sourceIsWebp) variants = variants.filter((v) => v.suffix !== "");

  const sizes = [];
  for (const v of variants) {
    const outPath = join(ASSETS_DIR, `${name}${v.suffix}.webp`);
    let pipeline = sharp(inputBuffer);
    if (v.width && meta.width && meta.width > v.width) {
      pipeline = pipeline.resize({ width: v.width, withoutEnlargement: true });
    }
    await pipeline.webp({ quality: QUALITY, effort: 5 }).toFile(outPath);
    sizes.push({ suffix: v.suffix || "full", size: (await stat(outPath)).size });
  }

  const sizeStr = sizes.map((s) => `${s.suffix}=${(s.size / 1024).toFixed(0)}KB`).join(" ");
  console.log(`${file.padEnd(34)} ${(originalSize / 1024).toFixed(0).padStart(5)}KB → ${sizeStr}`);
}

async function main() {
  const allFiles = await readdir(ASSETS_DIR);
  const sourceFiles = allFiles.filter((f) => isSource(f) && !isVariant(f));
  if (sourceFiles.length === 0) {
    console.log("Nenhuma imagem fonte encontrada em src/assets");
    return;
  }
  console.log(`Convertendo ${sourceFiles.length} imagens em até ${VARIANTS.length} variantes…\n`);
  for (const f of sourceFiles) {
    try {
      await convert(f);
    } catch (e) {
      console.error(`FALHOU ${f}:`, e.message);
    }
  }
}

main();
