import { promises as fsPromises, createReadStream, createWriteStream } from 'fs';
import { join, basename, resolve } from 'path';
import yourPath from '../../utils/path.js'
import ERROR from "../../utils/error.js";

const { stat } = fsPromises;

export default async function copy(sourceFile, targetDirectory) {
  if (sourceFile && targetDirectory) {
    try {
      const sourcePath = resolve(sourceFile);
      const targetPath = resolve(targetDirectory);

      try {
        const targetStats = await stat(targetPath);
        if (!targetStats.isDirectory()) {
          throw new Error('"Operation failed"');
        }
      } catch (error) {
        throw new Error(`"Operation failed"`);
      }

      const fileName = basename(sourcePath);
      const targetFilePath = join(targetPath, fileName);

      const readStream = createReadStream(sourcePath);
      const writeStream = createWriteStream(targetFilePath);

      // Используем pipe для передачи данных между потоками
      readStream.pipe(writeStream);

      // Обработка события 'finish', когда передача данных завершена
      await new Promise((resolveFinish, rejectFinish) => {
        writeStream.on('finish', resolveFinish);
        writeStream.on('error', rejectFinish);
      });

		yourPath()
    } catch (error) {
		console.log(ERROR.FS_OPERATION_FAILED);
    }
  } else {
	console.log('Invalid input');
  }
}