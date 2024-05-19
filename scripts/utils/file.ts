import fs from "node:fs/promises";

export async function stat(path: string) {
  try {
    const r = await fs.lstat(path);
    return { exists: true, isDirectory: r.isDirectory(), isFile: r.isFile() };
  } catch {
    return { exists: false, isDirectory: false, isFile: false };
  }
}

export async function readText(path: string) {
  return await fs.readFile(path, { encoding: "utf8" });
}

export async function writeText(path: string, data: string) {
  return await fs.writeFile(path, data);
}
