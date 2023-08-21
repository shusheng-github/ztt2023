const {name} = require('./lib.js'); 
// 等价于const lib = require('./lib'); const {name} = lib;
setTimeout(() => {
    console.log(name); // 'Sam'
}, 1000);