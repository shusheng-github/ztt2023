const lib = {
    name: 'Sam'
};
module.exports = lib;
setTimeout(() => {
    lib.name = 'Bob';
}, 500);