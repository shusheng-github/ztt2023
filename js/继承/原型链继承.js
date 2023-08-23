// 原型链继承
function Parent() {
    this.name = "dog";
    this.arr = [1, 2, 3];
}
Parent.prototype.getName = function () {
    return this.name;
};
function Child() {}
Child.prototype = new Parent();

var child1 = new Child();
child1.arr.push(3);
child1.name = "hahah";

var child2 = new Child();
console.log("child1 :>> ", child1);
console.log("child2 :>> ", child2);
