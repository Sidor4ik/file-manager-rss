import { join } from 'path';
import yourPath from '../../utils/path.js'

export default function up() {
  try {
    const parentDirectory = join(process.cwd(), '..');
    process.chdir(parentDirectory);
  } catch (error) {
    console.error(`Error navigating up: ${error.message}`);
  }
  yourPath()
}