import { rename } from 'fs/promises';
import { join } from 'path';

export default async function renameFile(oldPath, newName) {
  if (oldPath && newName) {
    try {
      const newPath = join(process.cwd(), newName);
      await rename(oldPath, newPath);
      console.log(`File ${oldPath} renamed to ${newPath}`);
    } catch (error) {
      console.error(`Error renaming file: ${error.message}`);
    }
  } else {
    console.log('Usage: rename <oldPath> <newName>');
  }
}