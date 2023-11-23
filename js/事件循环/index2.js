/*
 * @Date: 2023-11-22 11:28:33
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-11-22 11:43:37
 * @FilePath: /2023/js/事件循环/index2.js
 */
async function async1() {
    console.log("async1 start");
    await async2();
    //微任务2
    console.log("async1 end");
    new Promise(function (resolve) {
        resolve();
    }).then(function () {
        // 微任务
        console.log("promise8");
    });
}
async function async2() {
    new Promise(function (resolve) {
        console.log("promise1");
        resolve();
    }).then(function () {
        // 微任务1
        console.log("promise2");
        new Promise(function (resolve) {
            console.log("promise6");
            resolve();
        }).then(function () {
            // 微任务
            console.log("promise7");
        });
    });
}

console.log("script start");

setTimeout(function () {
    console.log("setTimeout"); // 宏任务1
}, 0);
async1();

new Promise(function (resolve) {
    console.log("promise3");
    resolve();
}).then(function () {
    console.log("promise4"); // 微任务3
});

console.log("script end");
