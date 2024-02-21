/*
 * @Date: 2023-08-08 16:56:02
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-02-21 16:40:23
 * @FilePath: /2023/js/apply+bind+call/bind.js
 */
Function.prototype.myBind = function (context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
        // 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性
        // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
        return self.apply(
            this instanceof fBound ? y : context,
            args.concat(bindArgs)
        );
    };
    // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
    fBound.prototype = this.prototype;
    return fBound;
};

var value = 2;
var foo = {
    value: 1
};
function bar(name) {
    this.habit = "shopping";
    console.log("value", this.value);
    console.log("name", name);
}
bar.prototype.friend = "kevin";

var bindFoo = bar.myBind(foo, "Jack");
bindFoo.prototype.friend = "测试修改";
var obj = new bindFoo(20);
// obj.friend = "测试修改";
console.log("obj :>> ", obj);

// var aa = new bar();
// console.log("aa :>> ", aa.friend);

// 参考文档：https://zhuanlan.zhihu.com/p/552050382
