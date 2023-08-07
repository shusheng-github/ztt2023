
// 1
// class Test {
//   constructor() {
//     // 类的非静态方法（constructor里面定义的方法）会在实例化的过程中添加到 this 中去
//     this.test = function () {
//       console.log('none-static', this)
//     }
//   }

//   // 类的静态方法，在定义的时候放到类的prototype中，也就是Test.prototype
//   test () {
//     console.log('static', this)
//   }
// }

// const test1 = new Test()
// test1.test(); // 会打印none-static，因为对象自己的test会覆盖prototype上的test

// 2
class Parent {
  constructor() {
    // 目的是为了让函数内部的this 指向固定
    this.eat = this.eat.bind(this)
  }
  get fruit () {
    return 'orange'
  }

  eat () {
    console.log('fa', this.fruit)
  }
}

class Son {
  get fruit () {
    return 'pear'
  }
}

var parent = new Parent();
var son = new Son();

parent.eat()

son.eat = parent.eat;
console.log('son', son)
son.eat()