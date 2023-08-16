import { ARR_METHODS } from "./config";
import observeArr from "./observeArr";

var originArrMethods = Array.prototype;
var arrMethods = Object.create(originArrMethods);

ARR_METHODS.map(m => {
  // 重写方法
  arrMethods[m] = function () {
    var args = Array.prototype.slice.call(arguments);
    // 执行原来的方法
    var rt = originArrMethods[m].apply(this, args)
    console.log('args', args)
    // 执行数组的方法后新增的需要观察的元素
    var newArr;
    switch (m) {
      case 'push':
      case 'unshift':
        newArr = args;
        break;
      case 'splice':
        // 拿到splice方法新增的元素
        newArr = args.slice(2);
        break;
      default:
        break;
    }
    // 如果newArr存在则执行observeArr
    newArr && observeArr(newArr);
    return rt;
  }
})

export {
  arrMethods
}