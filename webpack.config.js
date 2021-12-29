/* eslint-disable */
const electronConfigs = require('./webpack.electron.js');
const reactConfigs = require('./webpack.react.js');

const env = process.env.BUILD;
if (env === 'development') {
  console.log('Webpack - DEV MODE');
  electronConfigs.mode = 'development';
  reactConfigs.mode = 'development';
} else {
  console.log('Webpack - PRODUCTION MODE');
}

module.exports = [electronConfigs, reactConfigs];
