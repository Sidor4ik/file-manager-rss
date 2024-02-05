import yourPath from './utils/path.js'
import readline from 'readline';
import { readdir } from 'fs/promises';
import { join } from 'path';
import readlinePromises from 'readline/promises';
import {  rename, unlink, copyFile } from 'fs/promises';
import cd from './commands/fs/cd.js';
import up from './commands/fs/up.js';
import copy from './commands/fs/copy.js';
import renameFile from './commands/fs/rename.js';
import read from './commands/fs/read.js';
import deleteFile from './commands/fs/delete.js';



//start func
const startProject = async  () => {
const args = process.argv.slice(2);
const usernameArgIndex = args.findIndex(arg => arg.startsWith('--username='));
const username = usernameArgIndex !== -1 ? args[usernameArgIndex].split('=')[1] : 'Guest';

console.log(`Welcome to the File Manager, ${username}!`);


 



//-------------------------------------------------------------------
const rl = readlinePromises.createInterface({
	input: process.stdin,
	output: process.stdout,
 });
 
 async function handleLine(words) {
	const command = words[0];
 
	switch (command) {
	  case 'cd':
		 cd(words[1]);
		 break;
 
	  case 'up':
		 up();
		 break;
 
	  case 'copy':
		 copy(words[1], words[2]);
		 break;
 
		 case 'mv':
			await copy(words[1], words[2]);
			await deleteFile(words[1]);
			break;

	  case 'rename':
		 renameFile(words[1], words[2]);
		 break;
 
	  case 'read':
		 read(words[1]);
		 break;

		 case 'os --EOL':
			eol(words[1]);
			break;
 
	  case 'delete':
		 deleteFile(words[1]);
		 break;
 
	  case '.exit':
		 rl.close();
		 break;
 
	  default:
		 console.log('Invalid input');
	}
 }
 
 rl.on("line", (line) => {
	handleLine(line.split(' '));
 });



 process.on('SIGINT', () => {
	process.stdout.write('\nПриложение завершено с помощью Ctrl+C\n');
	rl.close();
	process.exit();
 });
// Обработка ввода из консоли
rl.on('line', (input) => {
	if (input === '.exit') {
	  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
	  process.exit();
	}
 });

 await  yourPath()
}

startProject()
