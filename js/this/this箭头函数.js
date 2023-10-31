/*
 * @Date: 2023-08-08 16:56:02
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-10-31 16:01:38
 * @FilePath: /2023/js/this/this箭头函数.js
 */
// function foo() {
//     return () => {
//         console.log(this.a);
//     };
// }
// var obj = {
//     a: 11
// };
// var obj1 = {
//     a: 12
// };

// var obj2 = {
//     a: 13
// };

// foo.call(obj1)(); // 12

// var bar = foo.call(obj);
// bar.call(obj2); //11

// var obj = {
//     a: 1
// };

// obj.test = function () {
//     var t1 = () => {
//         console.log(this); // obj
//         var t2 = () => {
//             console.log(this); // obj
//         };
//         t2();
//     };
//     t1();
// };

// obj.test();

// obj.test2 = function () {
//     var t1 = function () {
//         console.log(this); // window
//         var t2 = () => {
//             console.log(this); // window
//         };
//         t2();
//     };
//     t1();
// };

// obj.test2();

const obj = {
    num: 10,
    hello: function () {
        console.log(this); // obj
        setTimeout(() => {
            console.log(this); // obj
        });
    }
};
obj.hello();
