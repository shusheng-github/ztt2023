/*
 * @Date: 2023-11-29 17:29:40
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-02-20 15:42:09
 * @FilePath: /2023/js/防抖节流/throttle.js
 */
// 1 时间戳方式
// const throttle = function (fn, wait = 50) {
//   let previous = 0;
//   return function (...args) {
//     let now = Date.now();
//     if (now - previous > wait) {
//       previous = now;
//       fn.apply(this, args)
//     }
//   }
// }
// DEMO
// 执行 throttle 函数返回新函数
// const betterFn = throttle(() => console.log('fn 函数执行了'), 1000)
// 每 10 毫秒执行一次 betterFn 函数，但是只有时间差大于 1000 时才会执行 fn
// setInterval(betterFn, 10)

// 2 定时器方式
const throttle = function (fn, wait = 50) {
    let timer = null;
    return function (...args) {
        if (timer) return;
        timer = setTimeout(() => {
            fn.apply(this, args);
            timer = null;
        }, wait);
    };
};

window.addEventListener(
    "resize",
    throttle(() => console.log("fn 函数执行了"), 1000)
);
