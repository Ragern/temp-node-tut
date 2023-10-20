// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./names')
const sayHi = require('./utils')
const data = require('./alternate-synthax')
require('./mind-grenade')
// require --> CommonJS module

sayHi('Shinchan');
sayHi(names.bheem);
sayHi(names.raju);