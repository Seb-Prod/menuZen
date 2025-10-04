import fs from "fs";

export function checkDirectoryExists(dirPath) {
  try {
    return fs.existsSync(dirPath);
  } catch (error) {
    return false;
  }
}