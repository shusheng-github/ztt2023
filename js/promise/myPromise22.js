// 定义三个状态常量
const PENDING = "pending"; //等待
const FULFILLED = "fulfilled"; //成功
const REJECTED = "rejected"; //失败

class MyPromise {
    constructor(executor) {
        // 储存状态的值，初始状态值是pending
        this.status = PENDING;

        // 成功之后的值
        this.value = null;
        // 失败之后的原因
        this.reason = null;

        // 存储成功的回调函数
        // onFulfilledCallback = null;
        this.onFulfilledCallback = [];
        // 存储失败的回调函数
        // onRejectedCallback = null;
        this.onRejectedCallback = [];
        // resolve和reject为什么要用箭头函数？
        // 如果直接调用的话，普通函数this指向的是window或者undefined
        // 用箭头函数就可以让this指向当前实例对象
        // 更改成功后的状态
        const resolve = (value) => {
            // 只有状态值为pending的时候才更改状态值
            if (this.status === PENDING) {
                // 状态修改成功
                this.status = FULFILLED;
                // 保存成功之后的值
                this.value = value;
                // 确保存在成功的回调函数再执行
                // 循环调用，将里边所有成功的回调拿出来执行
                this.onFulfilledCallback.forEach((fn) => fn());
            }
        };
        // 更改失败后的状态
        const reject = (reason) => {
            if (this.status === PENDING) {
                // 状态修改成功
                this.status = REJECTED;
                // 保存失败之后的原因
                this.reason = reason;
                // 确保存在失败的回调函数再执行
                // 循环调用，将里边所有失败的回调拿出来执行
                this.onRejectedCallback.forEach((fn) => fn());
            }
        };
        try {
            // executor是一个执行器，进入会立即执行
            // 传入resolve和reject方法
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    static resolve(parameter) {
        if (parameter instanceof MyPromise) {
            return parameter;
        }
        // 转换成普通方式
        return new MyPromise((resolve, reject) => {
            resolve(parameter);
        });
    }

    static reject(reason) {
        return new MyPromise((resolve, reject) => {
            reject(reason);
        });
    }

    then(onFulfilled, onRejected) {
        onFulfilled =
            typeof onFulfilled === "function" ? onFulfilled : (value) => value;
        onRejected =
            typeof onRejected === "function"
                ? onRejected
                : (reason) => {
                      throw reason;
                  };
        // 为了链式调用需要直接创建一个MyPromise，并在后面return出去
        const promise2 = new MyPromise((resolve, reject) => {
            const fulfilledMicrotask = () => {
                // Window 或 Worker 接口的 queueMicrotask() 方法，将微任务加入队列以在控制返回浏览器的事件循环之前的安全时间执行。
                // 使用queueMicrotask创建微任务等待promise2的初始化完成
                queueMicrotask(() => {
                    try {
                        // 调用成功回调，并把值返回
                        const x = onFulfilled(this.value);
                        // 传入resolvePromise进行集中处理
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (error) {
                        reject(error);
                    }
                });
            };
            const rejectedMicrotask = () => {
                queueMicrotask(() => {
                    try {
                        // 调用失败回调，并把值返回
                        const x = onRejected(this.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (error) {
                        reject(error);
                    }
                });
            };
            // 判断状态
            if (this.status === FULFILLED) {
                fulfilledMicrotask();
            } else if (this.status === REJECTED) {
                rejectedMicrotask();
            } else if (this.status === PENDING) {
                // 当状态为pending的时候，不知道后面状态的变化，所以将成功和失败的函数都储存起来
                // 等到执行成功或失败的函数的时候再传递
                this.onFulfilledCallback.push(fulfilledMicrotask);
                this.onRejectedCallback.push(rejectedMicrotask);
            }
        });
        return promise2;
    }
    // catch捕获错误
    catch(onRejected) {
        return this.then(undefined, onRejected);
    }
}

function resolvePromise(promise, x, resolve, reject) {
    // x和promise相等，说明return的是自己，抛出错误并返回
    if (x === promise) {
        return reject(
            new TypeError("Chaining cycle detected for promise #<Promise>")
        );
    }
    if (typeof x === "object" || typeof x === "function") {
        // x为null，直接返回
        if (x === null) {
            return resolve(x);
        }

        let then;
        try {
            // 将x的then赋值给then
            then = x.then;
        } catch (error) {
            // 如果取 x.then 的值时抛出错误 error ，则以 error 为据因拒绝 promise
            return reject(error);
        }
        // 如果then是函数
        if (typeof then === "function") {
            let called = false;
            try {
                // this指向x
                then.call(
                    x,
                    (y) => {
                        // 如果resovePromise的值以y为参数被调用，则运行 [[Resolve]](promise, y)
                        // 如果resovePromise和rejectPromise均被调用
                        // 或者被同一参数调用了多次，则优先采用首次调用并忽略剩下的调用
                        // 实现这条需要前边加一个变量called
                        if (called) return;
                        called = true;
                        resolvePromise(promise, y, resolve, reject);
                    },
                    (r) => {
                        // 如果rejectPromise以据因 r 为参数被调用，则以据因 r 拒绝 promise
                        if (called) return;
                        called = true;
                        reject(r);
                    }
                );
            } catch (error) {
                //  如果调用 then 方法抛出了异常 error：
                // 如果 resolvePromise 或 rejectPromise 已经被调用，直接返回
                if (called) return;
                // 否则以 error 为据因拒绝 promise
                reject(error);
            }
        } else {
            // 如果 then 不是函数，以 x 为参数执行 promise
            resolve(x);
        }
    } else {
        // 如果 x 不为对象或者函数，以 x 为参数执行 promise
        resolve(x);
    }
    // // 判断x是不是MyPromise的实例对象
    // if (x instanceof MyPromise) {
    // 	// 执行x，调用then方法，目的是将其状态变为fulfilled或者rejected
    // 	// x.then(value => resolve(value), reason => reject(reason))
    // 	// 简化之后
    // 	x.then(resolve, reject);
    // } else {
    // 	// 普通值
    // 	resolve(x);
    // }
}

const promise = new MyPromise((resolve, reject) => {
    resolve(2121);
});
promise.then((res) => {
    console.log("res :>> ", res);
});
