function Animal(type, name) {
    this.type = type;
    this.name = name;
    this.hobbies = ["eat fish", "play ball"];
}
Animal.prototype.say = function () {
    console.log("type is " + this.type + " name is " + this.name);
};
function Cat(type, name) {
    Animal.call(this, type, name); // 构造函数继承
    this.age = "1";
}
Cat.prototype = new Animal(); // 原型链继承
Cat.prototype.constructor = Cat;

let smallCat = new Cat("smallCat", "Nini");
smallCat.hobbies.push("sleep");
console.log(smallCat); // [ 'eat fish', 'play ball', 'sleep' ]
// smallCat.say(); // type is smallCat name is Nini

let bigCat = new Cat("bigCat", "Nicole");
console.log(bigCat); // [ 'eat fish', 'play ball' ]
// bigCat.say(); // type is bigCat name is Nicole
