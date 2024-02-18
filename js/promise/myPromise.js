const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';
class MyPromise {
  constructor(excutor) {
    this.status = 'PENDING';
    this.value = undefined;
    this.reason = undefined;
    this.onFulFilledCallbacks = [];
    this.onRejectedCallbacks = [];
    const resolve = (value) => {
      if (this.status === 'PENDING') {
        this.status = FULFILLED;
        this.value = value;
        this.onFulFilledCallbacks.forEach(fn => fn())
      }
    }
    const reject = (reason) => {
      if (this.status === 'PENDING') {
        this.status = REJECTED;
        this.reason = reason
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }
    try {
      excutor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }
  then = (onFulFilled, onRejected) => {
    if (this.status === 'RESOLVED') {
      onFulFilled(this.value)
    }
    if (this.status === 'REJECTED') {
      onRejected(this.reason)
    }
    if (this.status === 'PENDING') {
      // 订阅
      this.onFulFilledCallbacks.push(() => onFulFilled(this.value))
      this.onRejectedCallbacks.push(() => onRejected(this.value))
    }
  }
}

module.exports = MyPromise;