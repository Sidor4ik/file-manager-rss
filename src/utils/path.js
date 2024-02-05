import path from 'path';

const yourPath = ()=>{
	const currentPath = path.resolve();
	console.log(`You are currently in the folder: ${currentPath}`);
}

export default yourPath; 