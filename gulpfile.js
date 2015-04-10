// all gulp tasks are located in the ./build/tasks directory
// gulp configuration is in files in ./build directory

process.PLUGIN = {};
process.PLUGIN.paths = require('./plugin')
require('require-dir')('build/tasks');
