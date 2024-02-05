import { createHash } from 'crypto';
import { createReadStream, promises as fsPromises } from 'fs';
import path from 'path';
import yourPath from '../../utils/path.js';
import ERROR from "../../utils/error.js";

export default async function calculateHash(filePath) {
  try {
    const resolvedPath = path.resolve(filePath);

    await fsPromises.access(resolvedPath);

    const hash = createHash('sha256');
    const readStream = createReadStream(resolvedPath, { encoding: 'utf-8' });

    readStream.on('data', (data) => {
      hash.update(data);
    });

    readStream.on('end', () => {
      console.log(hash.digest('hex'));
      yourPath();
    });
  } catch (error) {
    console.log(ERROR.FS_OPERATION_FAILED);
  }
}

await calculateHash()

