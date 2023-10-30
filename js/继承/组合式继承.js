/*
 * @Date: 2023-08-23 15:43:17
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-10-30 16:54:20
 * @FilePath: /2023/js/继承/组合式继承.js
 */
function Parent(type) {
    this.type = type;
    this.age = 21;
    this.arr = [1, 2, 3];
}
Parent.prototype.name = "parent";
function Child(type) {
    Parent.call(this, type);
    this.bb = "c";
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;

var child1 = new Child("cat");
var child2 = new Child("dog");
child1.arr.push(4);
console.log("child1 :>> ", child1);
console.log("child2 :>> ", child2);
