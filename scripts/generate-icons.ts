import sharp from "sharp";
import { optimize } from "svgo";
import * as file from "./utils/file";

// script to generate all necessary metadata icons from favicon.svg
// pnpm tsx scripts/generate-icons.ts

const ORIGINAL_SVG_PATH = "favicon.svg";

const OPTIMIZED_SVG_PATH = "src/app/icon.svg";

type RegularIcon = { maskable: false; size: number; path: string };
type MaskableIcon = { maskable: true; size: number; path: string; paddingFraction: number; paddingBackground: string };
type Icon = RegularIcon | MaskableIcon;

const PNG_ICONS: Icon[] = [
  {
    maskable: false,
    size: 192,
    path: "public/icons/icon-192.png",
  },
  {
    maskable: false,
    size: 512,
    path: "public/icons/icon-512.png",
  },
  {
    maskable: true,
    size: 512,
    path: "public/icons/icon-512-maskable.png",
    paddingBackground: "#FFFFFF",
    paddingFraction: 0.1,
  },
  {
    maskable: true,
    size: 180,
    path: "src/app/apple-icon.png",
    paddingBackground: "#FFFFFF",
    paddingFraction: 0.1,
  },
];

async function main() {
  const { isFile } = await file.stat(ORIGINAL_SVG_PATH);
  if (!isFile) {
    console.error(`file: "${ORIGINAL_SVG_PATH}" does not exist`);
    return;
  }

  for (const icon of PNG_ICONS) {
    await optimizeAndSavePng(ORIGINAL_SVG_PATH, icon);
    console.log(`saved: ${icon.path}`);
  }

  //also optimize the actual svg
  const svgString = await file.readText(ORIGINAL_SVG_PATH);
  const result = optimize(svgString, { multipass: true });
  await file.writeText(OPTIMIZED_SVG_PATH, result.data);
  console.log(`saved: ${OPTIMIZED_SVG_PATH}`);

  console.log(
    'Note: Use gimp for the "src/app/favicon.ico" file. Export 32x32 size using 32 bpp, 8-bit alpha, no palette settings.'
  );
}

async function optimizeAndSavePng(path: string, icon: Icon) {
  if (!icon.maskable) {
    await sharp(path).resize(icon.size).png().toFile(icon.path);
  } else {
    const pad = Math.ceil(icon.size * icon.paddingFraction);
    await sharp(path)
      .resize(icon.size - pad * 2)
      .flatten({ background: icon.paddingBackground })
      .extend({
        background: icon.paddingBackground,
        top: pad,
        right: pad,
        bottom: pad,
        left: pad,
      })
      .png()
      .toFile(icon.path);
  }
}

void main();
