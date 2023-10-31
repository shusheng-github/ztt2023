/*
 * @Date: 2023-10-31 14:53:20
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-10-31 14:53:36
 * @FilePath: /2023/js/this/this-回调函数.js
 */
function foo(bar) {
    bar();
}

let obj = {
    bar() {
        console.log(this); // window
    }
};

foo(obj.bar);
