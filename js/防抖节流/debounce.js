// 第一次不会立即执行
function debounce (fn, delay, immediate) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    // 加上 apply 确保在 sayHi 函数里的 this 指向的是 input对象(不然就指向 window 了, 因为 sayHi 函数是在全局中调用运行，所以 this 指向了 window，)。
    if (immediate && !timer) {
      fn.apply(this, args)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

// 另一种情況：我不希望非要等到事件停止触发后才执行，我希望立刻执行函数，然后等到停止触发 n 秒后，才可以重新触发执行。
function debounce1 (fn, delay, immediate) {
  let timer = null;
  return function () {
    let _self = this;
    let args = arguments;
    clearTimeout(timer)
    if (immediate) {
      const rightNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, delay)
      if (rightNow) {
        fn.apply(_self, args)
      }
    } else {
      timer = setTimeout(() => {
        fn.apply(_self, args)
      }, delay)
    }
  }
}


const app = document.getElementById('app');
app.addEventListener('click', debounce(() => {
  console.log(2121)
}, 1000, true))