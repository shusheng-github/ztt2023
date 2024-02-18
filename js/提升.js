/*
 * @Date: 2024-02-05 20:33:24
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-02-05 20:40:19
 * @FilePath: /2023/js/提升.js
 */
// foo();
// var foo;
// function foo() {
//     console.log("1 :>> ", 1);
// }
// foo = function () {
//     console.log("2 :>> ", 2);
// };
console.log("foo :>> ", foo);
foo();

var a = true;
if (a) {
    function foo() {
        console.log("1 :>> ", 1);
    }
} else {
    function foo() {
        console.log("2 :>> ", 2);
    }
}
