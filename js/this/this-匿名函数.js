/*
 * @Date: 2023-10-31 14:57:29
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-10-31 15:05:53
 * @FilePath: /2023/js/this/this-匿名函数.js
 */
// const obj = {
//     name: "spike",
//     friends: ["deer", "cat"],
//     loop: function () {
//         this.friends.forEach(
//             // 这个this指向obj
//             function (friend) {
//                 console.log(`${this.name} knows ${friend}`);
//                 console.log(this === window); // 在浏览器环境下，全局对象为window
//             }
//         );
//     }
// };

// obj.loop();
// ()左边是loop,属于obj,所以loop函数中的this指向obj
// 输出
//   undefined knows dear
//   true
//   undefined knows cat
// true;
// 在forEach中的this并不是期待的那样指向obj，而是指向全局对象了
// 匿名函数没有直接调用者，不属于任何对象，他不是一个对象的方法,在浏览器环境中他的this指向window

function foo() {
    console.log(this.type);
}
let obj = {
    type: "obj"
};

let type = "window"; // 提问: 此处使用let定义, 下面一行打印什么
foo.call(); // window
foo.call(obj); // obj
foo.apply(obj); // obj
foo.bind(obj)(); // obj
