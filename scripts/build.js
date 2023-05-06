const child_process = require('child_process');
const path = require('path');
const pkg = require('../package.json');

child_process.execSync('npm run build:react', {
	stdio: 'inherit',
});
child_process.execSync('npm run build:deskgap', {
	stdio: 'inherit',
});
console.log('👍');
if (process.argv.slice(2)[0] === 'open') {
	child_process.execSync(path.resolve(__dirname, `../bin/${pkg.name}.exe`), {
		stdio: 'inherit',
	});
}
