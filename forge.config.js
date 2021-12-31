/* eslint-disable */
const os = require('os');

let icon;
// Overwrite with own img path like: res/img/[fav]icon.*

switch (os.platform()) {
  case 'darwin': // need a *.icns img
  case 'linux': // need a *.png img
  case 'win32': // need a *.ico img
  default:
    icon = 'node_modules/@grandlinex/e-kernel/res/img/favicon.png';
}

const ignore = [
  'config',
  '.idea',
  '.eslintrc',
  '.gitignore',
  '.ncurc.json',
  'webpack.electron.js',
  'webpack.react.js',
  'README.md',
  'readme.md',
];

module.exports = {
  packagerConfig: {
    icon,
    ignore,
  },
};
