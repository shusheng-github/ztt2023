/*
 * @Date: 2023-11-29 15:43:06
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-11-29 17:22:03
 * @FilePath: /2023/js/防抖节流/test.js
 */
function debounce(fn, wait = 50, immediate) {
    let timer = null;
    const that = this;
    return function (...args) {
        if (timer) clearTimeout(timer);
        if (immediate) {
            const rightNow = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, delay);
            if (rightNow) {
                fn.apply(that, args);
            }
        } else {
            timer = setTimeout(() => {
                fn.apply(that, args);
            }, wait);
        }
    };
}

// 节流
// n秒之内只执行一次事件，若n秒内已经执行，则后面的无效
function throttle(fn, wait) {
    let timer = null;
    return function (...args) {
        if (timer) return;
        timer = setTimeout(function () {
            fn.apply(this, args);
            timer = null;
        }, wait);
    };
}

const app = document.getElementById("app");
app.addEventListener(
    "click",
    debounce(
        () => {
            console.log(2121);
        },
        1000,
        true
    )
);
