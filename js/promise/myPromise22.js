/*
 * @Date: 2024-02-19 10:26:55
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-02-20 14:37:10
 * @FilePath: /2023/js/promise/myPromise22.js
 */
const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";
function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new Error("死循环"));
    }
    if ((typeof x === "object" && x !== null) || typeof x === "function") {
        try {
            const then = x.then;
            if (typeof then === "function") {
                let called = false;
                // 说明返回的还是promise
                try {
                    then.call(
                        x,
                        (y) => {
                            if (called) return;
                            called = true;
                            resolvePromise(promise2, y, resolve, reject);
                        },
                        (r) => {
                            if (called) return;
                            called = true;
                            reject(r);
                        }
                    );
                } catch (e) {
                    if (called) return;
                    called = true;
                    reject(e);
                }
            } else {
                resolve(x);
            }
        } catch (e) {
            resolve(x);
        }
    } else {
        if (called) return;
        called = true;
        resolve(x);
    }
}

class MyPromise {
    constructor(executor) {
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
            executor(resolve, reject);
        } catch (e) {
            reject(e);
        }
    }
    then(onFulFilled, onRejected) {
        onFulFilled =
            typeof onFulFilled === "function"
                ? onFulFilled
                : (value) => {
                      value;
                  };
        onRejected =
            typeof onRejected === "function"
                ? onRejected
                : (reason) => {
                      throw new Error(reason);
                  };
        const promise2 = new MyPromise((resolve, reject) => {
            if (this.status === FULFILLED) {
                setTimeout(() => {
                    try {
                        const x = onFulFilled(this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                }, 0);
            }
            if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        const x = onRejected(this.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                }, 0);
            }
            if (this.status === PENDING) {
                this.onFulFilledCallbacks.push(() => {
                    try {
                        const x = onFulFilled(this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
                this.onRejectedCallbacks.push(() => {
                    try {
                        const x = onRejected(this.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            }
        });
        return promise2;
    }
    catch(errorCallback) {
        return this.then(null, errorCallback);
    }
}

const promise = new MyPromise((resolve, reject) => {
    reject(22);
});

promise
    .then((res) => {
        console.log("res :>> ", res);
    })
    .catch((error) => {
        console.log("error :>> ", error);
    });
