import { unlink } from 'fs/promises';
import yourPath from '../../utils/path.js'
import ERROR from "../../utils/error.js";

export default async function deleteFile(fileToDelete) {
  if (fileToDelete) {
    try {
      await unlink(fileToDelete);
    } catch (error) {
		console.log(ERROR.FS_OPERATION_FAILED);
    }
  } else {
    console.log('Invalid input');
  }
  yourPath()
}



