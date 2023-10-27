/*
 * @Date: 2023-08-08 16:56:02
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-10-27 17:05:53
 * @FilePath: /2023/js/apply+bind+call/apply.js
 */
// ● 将函数设置为对象的属性
// ● 执行函数
// ● 删除函数
// ● 返回函数执行结果
function applyMy(context, arr) {
    context = context ? Object(context) : window;
    context.fn = this;
    let result;
    if (!arr) {
        result = context.fn();
    } else {
        result = context.fn(...arr);
    }
    delete context.fn;
    return result;
}
