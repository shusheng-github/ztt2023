// function test(){
//   var a = b = 1;
// }
// test();
// console.log('a', a)
// console.log('b', b)
function test(a){
  console.log('a', a)
  var a = 1;
  console.log('a', a)
  function a(){}
  console.log('a', a)
  var b = function(){};
  console.log('b', b)
  function d(){}
}
test(2)


// function test2(a){
//   console.log('a', a)
//   var a = 1;
//   console.log('a', a)
// }
// test2(2)
// AO = {
//     a: undefined,
//        2,
//        function(){},
//        1,
//     b: undefined,
//        function(){}
//     d: function(){}
// }

