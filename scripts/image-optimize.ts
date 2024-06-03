import sharp from "sharp";

const ORIGINAL_PATH = "src/app/opengraph-image.png";
const OPTIMIZED_PATH = "src/app/opengraph-image-opt.png";

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
