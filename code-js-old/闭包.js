var data = [];

(function () {
    for (var i = 0; i < 3; i++) {
        console.log(i);
    }
})();

// for (var i = 0; i < 3; i++) {
//     data[i] = (function (i) {
//         return function () {
//             console.log(i);
//         };
//     })(i);
// }

// for (var i = 0; i < 3; i++) {
//     data[i] = function () {
//         console.log(i);
//     };
// }

// data[0]();
// data[1]();
// data[2]();

// function f1() {
//     var n = 999;
//     nAdd = function () {
//         console.log((n += 1));
//     };
//     function f2() {
//         console.log(n);
//     }
//     return f2;
// }
// var result = f1();
// result(); //999
// nAdd(); //1000
// result(); //1001

// for (var i = 1; i <= 5; i++) {
//     (function (i) {
//         setTimeout(function timer() {
//             console.log(i);
//         }, i * 1000);
//     })(i);
// }

// var data = [];
// for (var i = 0; i < 6; i++) {
//     data[i] = (function (i) {
//         return function () {
//             console.log(i);
//         };
//     })(i);
// }

// data[0]();
// data[1]();
