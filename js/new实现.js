/*
 * @Date: 2023-08-08 16:56:02
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-03-28 16:36:09
 * @FilePath: /2023/js/new实现.js
 */
// 创建一个新的对象。
// 将新的对象原型对象指向构造函数的prototype，从而继承原型上的方法。
// 将this指向这个新的对象，执行构造函数中的代码，以获取私有属性。
// 如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象。

function myNew(Fn, ...args) {
    var obj = {};
    obj.__proto__ = Fn.prototype;
    console.log("obj", obj);
    const res = Fn.apply(obj, args);
    return res instanceof Object ? res : obj;
}

function Father(a, b) {
    this.a = a;
    this.b = b;
}

function myNew(fn, ...args) {
    let obj = {};
    obj.__proto__ = fn.prototype;
    const result = fn.apply(obj, args);
    return result instanceof Object ? result : obj;
}
