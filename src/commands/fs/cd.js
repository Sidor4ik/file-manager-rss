import { join } from 'path';
import yourPath from '../../utils/path.js'
import ERROR from "../../utils/error.js";

export default function cd(targetDirectory) {
  if (targetDirectory) {
    try {
      process.chdir(targetDirectory);
    } catch (error) {
      console.error("Operation failed");
    }
  } else {
	console.log(ERROR.FS_OPERATION_FAILED);
  }
  yourPath()
}
