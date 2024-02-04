import yourPath from './utils/path.js'
import readline from 'readline';

//start func
const startProject = async  () => {
const args = process.argv.slice(2);
const usernameArgIndex = args.findIndex(arg => arg.startsWith('--username='));
const username = usernameArgIndex !== -1 ? args[usernameArgIndex].split('=')[1] : 'Guest';

console.log(`Welcome to the File Manager, ${username}!`);



// exit func
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
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
