// Builds a multi-resolution favicon.ico (PNG-compressed entries) from the
// bunny favicon.svg. Run: node scripts/build-favicon-ico.mjs
import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";

const svg = await readFile("public/favicon.svg");
const sizes = [16, 32, 48];
const pngs = await Promise.all(
  sizes.map((s) => sharp(svg, { density: 384 }).resize(s, s).png().toBuffer()),
);

const count = sizes.length;
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(count, 4);

const entries = Buffer.alloc(16 * count);
let offset = 6 + 16 * count;
pngs.forEach((png, i) => {
  const s = sizes[i];
  const e = i * 16;
  entries.writeUInt8(s >= 256 ? 0 : s, e + 0); // width
  entries.writeUInt8(s >= 256 ? 0 : s, e + 1); // height
  entries.writeUInt8(0, e + 2); // palette
  entries.writeUInt8(0, e + 3); // reserved
  entries.writeUInt16LE(1, e + 4); // color planes
  entries.writeUInt16LE(32, e + 6); // bits per pixel
  entries.writeUInt32LE(png.length, e + 8);
  entries.writeUInt32LE(offset, e + 12);
  offset += png.length;
});

const ico = Buffer.concat([header, entries, ...pngs]);
await writeFile("public/favicon.ico", ico);
console.log(`wrote public/favicon.ico — ${ico.length} bytes, sizes ${sizes.join("/")}`);
