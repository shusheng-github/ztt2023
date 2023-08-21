a = 1;
function test(a) {
    function e() {}
    arguments[0] = 2;
    function a() {}
    console.log("e :>> ", e); // function
    if (a) {
        var b = 3;
    }
    var c;
    console.log("a :>> ", a); // 2
    a = 4;
    var a;
    console.log("b :>> ", b); // 3
    f = 5;
    console.log("c :>> ", c); // undefined
    console.log("a :>> ", a); // 4
}
var a;
test(1);
// a: 1
//     function
//     2
//     4
// b: 3
// c: undefined
// GO: {
//     a: 1,
//     f: 5
// }

// AO:{
//     a: undefined,
//         2,
//          4;
//     c: undefined,
//     b: undefined,
//         3
//     e: function(){}
// }
