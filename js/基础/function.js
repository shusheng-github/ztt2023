// function fn (a = 1, b) {
//   console.log('a', a)
//   console.log('b', b)
// }
// fn(undefined, 2)

// function fn (a, b) {
//   var a = arguments[0] || 1;
//   var b = arguments[1] || 2;
//   console.log('a', a)
//   console.log('b', b)
// }
// fn(undefined, 2)
// function test () {
//   var a = b = 1;
// }
// test()
// console.log('b', b) // 1
// console.log('a', a) // ReferenceError: a is not defined

// foo();
// var foo = function a () {
//   console.log(11)
// }()
// console.log('foo', foo)

// (function fn(){

// }())
var a = 10;
if (function b () { }) {
  a += typeof (b)
}
console.log('a', a)