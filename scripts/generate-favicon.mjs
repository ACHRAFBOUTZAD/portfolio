import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import toIco from "to-ico";

const root = process.cwd();
const source = path.join(root, "public", "achraf-logo-1.png");
const sizes = [16, 32, 48, 64];

const pngBuffers = await Promise.all(
  sizes.map((size) =>
    sharp(source)
      .resize(size, size, { fit: "contain", background: "#000c15" })
      .png()
      .toBuffer(),
  ),
);

const ico = await toIco(pngBuffers);

await writeFile(path.join(root, "src", "app", "favicon.ico"), ico);
await writeFile(path.join(root, "public", "favicon.ico"), ico);

console.log(`Generated favicon.ico (${ico.length} bytes) from ${source}`);
