/*
 * @Date: 2023-08-08 16:56:02
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-02-05 21:49:39
 * @FilePath: /2023/js/变量声明.js
 */
// var a = true;
// // foo();

// function foo() {
//     console.log(a);
//     var a = 5;
// }

// foo();
function foo() {
    console.log("a :>> ", a);
}
function bar() {
    var a = 3;
    foo();
}
var a = 2;
bar();
