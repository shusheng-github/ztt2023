// 创建一个新的对象。
// 将新的对象原型对象指向构造函数的prototype，从而继承原型上的方法。
// 将this指向这个新的对象，执行构造函数中的代码，以获取私有属性。
// 如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象。

function myNew (Fn, ...args) {
  var obj = {};
  obj.__proto__ = Fn.prototype;
  console.log('obj', obj)
  const res = Fn.apply(obj, args)
  return res instanceof Object ? res : obj
}

function Father (a, b) {
  this.a = a
  this.b = b;
}

const test = myNew(Father, 1, 2)
console.log('test', test)