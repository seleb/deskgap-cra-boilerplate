const fs = require('fs-extra');
const path = require('path');
const pkg = require('../package.json');

const outputDir = './bin';

fs.emptyDirSync(outputDir);

fs.copySync('./node_modules/deskgap/dist/DeskGap', outputDir);
fs.moveSync(path.join(outputDir, 'DeskGap.exe'), path.join(outputDir, `${pkg.name}.exe`));
fs.emptyDirSync(path.join(outputDir, 'resources/app'));
fs.copySync('./build', path.join(outputDir, 'resources/app'));
fs.copySync('./deskgap/main.js', path.join(outputDir, 'resources/app/main.js'));
fs.copySync('./package.json', path.join(outputDir, 'resources/app/package.json'));
