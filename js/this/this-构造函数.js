/*
 * @Date: 2023-08-08 16:56:02
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-10-31 15:56:13
 * @FilePath: /2023/js/this/this-构造函数.js
 */
function Test() {
    this.a = 1;
    this.b = 2;
    console.log("this", this);
    return {
        c: 3
    };
}

const test = new Test();
// test()
console.log("test", test);
