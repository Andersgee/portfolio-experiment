import sharp from "sharp";

const ORIGINAL_PATH = "public/686747_173253.webp";
const OPTIMIZED_PATH = "public/ogbg.png";

async function main() {
  const info = await sharp(ORIGINAL_PATH)
    .resize({
      width: 1920,
      height: 1080,
      fit: "cover",
      position: "top",
    })
    .png({
      quality: 100,
    })
    .toFile(OPTIMIZED_PATH);
  console.log(info);
}

void main();
