import os from 'os';

// Проверка наличия аргумента --EOL
const hasEOLArgument = process.argv.includes('--EOL');

if (hasEOLArgument) {
  const eol = os.EOL;
  console.log(`End-Of-Line (EOL) for the current operating system: "${eol}"`);
} else {
  // Вывод информации об операционной системе
  console.log(`NONE`);
}