/*
 * @Date: 2023-08-08 16:56:02
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-10-27 17:06:26
 * @FilePath: /2023/js/apply+bind+call/call.js
 */
// 判断传入上下文对象是否存在，如果不存在，则设置为 window 。
// 处理传入的参数，截取第一个参数后的所有参数。
// 将函数作为上下文对象的一个属性。
// 使用上下文对象来调用这个方法，并保存返回结果。
// 删除刚才新增的属性。
// 返回结果。
function applyMy(context) {
    context = context ? Object(context) : window;
    context.fn = this;
    const args = [...arguments].slice(1);
    const result = context.fn(...args);
    delete context.fn;
    return result;
}
