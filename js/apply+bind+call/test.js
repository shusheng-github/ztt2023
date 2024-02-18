/*
 * @Date: 2023-11-29 17:41:52
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-11-29 19:24:18
 * @FilePath: /2023/js/apply+bind+call/test.js
 */
// function apply(context, arr) {
//     context = context ? Object(context) : window;
//     context.fn = this;
//     const args = object.prototype.slice.call(arguments, 1);
//     let res;
//     if (arr) {
//         res = context.fn(...arr);
//     } else {
//         res = context.fn();
//     }
//     delete context.fn;
//     return res;
// }

function call(context) {
    context = context ? Object(context) : window;
    context.fn = this;
    const args = Array.prototype.slice.call(arguments, 1);
    const res = context.fn(...args);
    delete context.fn;
    return res;
}

function bind(context) {
    const args = Array.prototype.slice.call(arguments, 1);
    var fn = function () {
        const arg = Array.prototype.slice.call(arguments);
        const res = that.apply(
            this instanceof fn ? this : context,
            args.concat(arg)
        );
        return res;
    };
    fn.prototype = this.prototype;
    return fn;
}
