// 简单的深拷贝
function deepClone (source) {
  let target = {};
  for (let key in source) {
    if (Object.prototype.hasOwnProperty(source, key)) {
      if (typeof source[key] === 'object') {
        target[key] = deepClone(source[key]);
      } else {
        target[key] = source[key]
      }
    }
  }
  return target;
}
//一个简单的深拷贝就完成了，但是这个实现还存在很多问题。
// 1、没有对传入参数进行校验，传入 null 时应该返回 null 而不是 {}
// 2、对于对象的判断逻辑不严谨，因为 typeof null === 'object'
// 3、没有考虑数组的兼容

// 兼容数组
function isObject (source) {
  return typeof source === 'object' && source !== null
}
function deepClone2 (source) {
  if (!isObject(source)) return source;
  let target = Array.isArray(source) ? [] : {};
  for (let key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        target[key] = deepClone2(source[key]);
      } else {
        target[key] = source[key]
      }
    }
  }
  return target;
}

// 解决循环引用
function deepClone3 (source, hash = new WeakMap()) {
  if (!isObject(source)) return source;
  if (hash.has(source)) return hash.get(source)
  let target = Array.isArray(source) ? [] : {};
  hash.set(source, target)
  for (let key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        target[key] = deepClone3(source[key], hash);
      } else {
        target[key] = source[key]
      }
    }
  }
  return target;
}

// 测试用例
var a = {
  name: "muyiy",
  book: {
    title: "You Don't Know JS",
    price: "45"
  },
  a1: undefined,
  a2: null,
  a3: 123
}
a.createCircle = a;
var b = deepClone3(a);
a.name = "高级前端进阶";
// a.book.price = "55";
// console.log('a', a)
console.log('b', b)