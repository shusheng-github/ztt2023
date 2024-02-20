/*
 * @Date: 2024-02-20 10:26:21
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-02-20 14:54:16
 * @FilePath: /2023/js/promise/index.js
 */
const MyPromise = require("./myPromise");

const promise = new MyPromise((resolve, reject) => {
    reject(22);
});

promise
    .then((res) => {
        console.log("res :>> ", res);
    })
    .catch((e) => {
        console.log("error :>> ", e);
    });
