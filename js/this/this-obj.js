/*
 * @Date: 2023-08-08 16:56:02
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-02-22 19:23:20
 * @FilePath: /2023/js/this/this-obj.js
 */
// var obj = {
//   a:1,
//   test: function(){
//     function t(){
//       console.log(this) // window,因为t 是孤立的函数
//     }
//     t()
//   }
// };
// obj.test()
function myNew(Fn, ...args) {
    const obj = {};
    obj._proto_ = Fn.prototype;
    const res = Fn.apply(obj, args);
    return res instanceof Object ? res : obj;
}
