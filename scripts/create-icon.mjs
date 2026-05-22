import { mkdir, rm } from "node:fs/promises";
import { join } from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const outDir = "build";
const source = "assets/icon-source.png";
const iconsetDir = join(outDir, "icon.iconset");

const sizes = [
  ["icon_16x16.png", 16],
  ["icon_16x16@2x.png", 32],
  ["icon_32x32.png", 32],
  ["icon_32x32@2x.png", 64],
  ["icon_128x128.png", 128],
  ["icon_128x128@2x.png", 256],
  ["icon_256x256.png", 256],
  ["icon_256x256@2x.png", 512],
  ["icon_512x512.png", 512],
  ["icon_512x512@2x.png", 1024]
];

await rm(iconsetDir, { recursive: true, force: true });
await mkdir(iconsetDir, { recursive: true });

for (const [name, size] of sizes) {
  await execFileAsync("sips", [
    "-z",
    String(size),
    String(size),
    source,
    "--out",
    join(iconsetDir, name)
  ]);
}

await execFileAsync("iconutil", ["-c", "icns", iconsetDir, "-o", join(outDir, "icon.icns")]);
console.log(`Wrote ${join(outDir, "icon.icns")} from ${source}`);
