const child_process = require('child_process');

child_process.execSync('npm run build:react', {
	stdio: 'inherit',
});
child_process.execSync('npm run build:deskgap', {
	stdio: 'inherit',
});
console.log('👍');
