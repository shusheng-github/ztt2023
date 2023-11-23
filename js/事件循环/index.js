/*
 * @Date: 2023-08-08 16:56:02
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-11-21 17:03:30
 * @FilePath: /2023/js/事件循环/index.js
 */
async function async1() {
    console.log("async1 start");
    await async2();
    // 微任务 2
    console.log("async1 end");
}
async function async2() {
    new Promise(function (resolve) {
        console.log("promise1");
        resolve();
    }).then(function () {
        // 微任务 1
        console.log("promise2");
        new Promise(function (resolve) {
            console.log("promise3");
            resolve();
        }).then(function () {
            console.log("promise4");
        });
    });
}

console.log("script start");

// setTimeout(function () {
//   console.log('setTimeout');
//   new Promise(function (resolve) {
//     resolve();
//   }).then(function () {
//     console.log('promise88'); // 第二轮微任务1
//   });
//   setTimeout(function () {
//     console.log('setTimeout2宏任务');
//   }, 0); // 第二轮宏任务1
// }, 0);
async1();

// new Promise(function (resolve) {
//     console.log("promise3");
//     resolve();
// }).then(function () {
//     console.log("promise4"); // 微任务3
// });

// console.log("script end");

// script start   async1 start  promise1   promise3  script end  promise2  async1 end   promise4
// setTimeout
// promise88
// setTimeout2宏任务
