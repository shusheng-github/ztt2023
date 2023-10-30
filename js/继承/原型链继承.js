/*
 * @Date: 2023-08-22 19:10:38
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-10-30 16:31:28
 * @FilePath: /2023/js/继承/原型链继承.js
 */
// 原型链继承
function Parent() {
    this.name = "12";
    this.arr = [1, 2, 3];
}
Parent.prototype.age = 18;
function Child() {}
Child.prototype = new Parent();
var child1 = new Child();
var child2 = new Child();

child1.arr.push(4);
child1.age = 22;
child1.name = "child1";
console.log("child1 :>> ", child1);
console.log("child2 :>> ", child2);
