import { createReadStream } from 'fs';
import yourPath from '../../utils/path.js';
import ERROR from '../../utils/error.js';

export default function read(filePath) {
  if (filePath) {
    const stream = createReadStream(filePath);

    stream.on('error', (error) => {
      console.error(ERROR.FS_OPERATION_FAILED);
      yourPath();
    });

    stream.on('end', () => {
      yourPath();
    });

    stream.pipe(process.stdout);
  } else {
    console.log('Invalid input');
    yourPath();
  }
}