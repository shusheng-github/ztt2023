/*
 * @Date: 2024-02-19 10:26:55
 * @LastEditors: Shusheng
 * @LastEditTime: 2024-02-20 00:14:18
 * @FilePath: /2023/js/promise/myPromise.js
 */
const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";
const resolvePromise = (promise2, x, resolve, reject) => {
  // 这是为了防止死循环
  if (promise2 === x) {
    return reject(new Error('TypeError: Chaining cycle detected for promise #<Promise>'))
  }
  let called = false;
  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    // x 是对象
    try {
      // x里面有then方法的话，代表是promise
      let then = x.then;
      // 只有是函数才有可能是then里面传的函数
      if (typeof then === 'function') {
        then.call(x, (y) => {
          if (called) return
          called = true
          resolvePromise(promise2, y, resolve, reject)
        }, (r) => {
          if (called) return
          called = true
          reject(r)
        })
      } else {
        resolve(x)
      }
    } catch (e) {
      // x是正常返回的值
      if (called) return
      called = true
      reject(e)
    }
  } else {
    // x是正常返回的值
    if (called) return
    called = true
    resolve(x)
  }
  // console.log('promise2', promise2)
  // console.log('x', x)
}
class MyPromise {
  constructor(excutor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulFilledCallbacks = [];
    this.onRejectedCallbacks = [];
    const resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        this.onFulFilledCallbacks.forEach((fn) => fn());
      }
    };
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };
    try {
      excutor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  then (onFulFilled, onRejected) {
    onFulFilled = typeof onFulFilled === 'function' ? onFulFilled : (value) => value
    onRejected = typeof onRejected === 'function' ? onRejected : (r) => { throw new Error(r) }
    // 里面返回新的promise
    let promise2 = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            // x可能是promise ，也可能是普通的值
            let x = onFulFilled(this.value);
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      }
      if (this.status === PENDING) {
        // 有可能是异步的，在then的时候还在PENDING的状态，利用发布订阅，当异步执行完成的时候再执行回调
        // 订阅
        this.onFulFilledCallbacks.push(() => {
          try {
            let x = onFulFilled(this.value);
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
        this.onRejectedCallbacks.push(() => {
          try {
            let x = onRejected(this.value);
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        });
      }
    })

    return promise2;
  }
  aa(errorCallback) {
    return this.then(null, errorCallback)
  }
}

module.exports = MyPromise;
