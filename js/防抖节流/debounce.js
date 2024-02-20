/*
 * @Date: 2023-08-08 16:56:02
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-02-20 15:56:31
 * @FilePath: /2023/js/防抖节流/debounce.js
 */
function debounce(fn, wait = 50) {
    // 通过闭包缓存一个定时器 id
    let timer = null;
    // 将 debounce 处理结果当作函数返回
    // 触发事件回调时执行这个返回函数
    return function (...args) {
        // 如果已经设定过定时器就清空上一次的定时器
        if (timer) clearTimeout(timer);

        // 开始设定一个新的定时器，定时器结束后执行传入的函数 fn
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, wait);
    };
}

// 另一种情況：我不希望非要等到事件停止触发后才执行，我希望立刻执行函数，然后等到停止触发 n 秒后，才可以重新触发执行。
function debounce1(fn, delay, immediate) {
    let timer = null;
    console.log("immediate :>> ", immediate);
    return function () {
        let _self = this;
        let args = arguments;
        clearTimeout(timer);
        if (immediate) {
            const rightNow = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, delay);
            if (rightNow) {
                // 加上 apply 确保在 sayHi 函数里的 this 指向的是 input对象(不然就指向 window 了, 因为 sayHi 函数是在全局中调用运行，所以 this 指向了 window，)。
                fn.apply(_self, args);
            }
        } else {
            timer = setTimeout(() => {
                fn.apply(_self, args);
            }, delay);
        }
    };
}

const app = document.getElementById("app");
app.addEventListener(
    "click",
    debounce1(
        () => {
            console.log(2121);
        },
        1000,
        true
    )
);
