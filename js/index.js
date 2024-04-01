/*
 * @Date: 2024-02-21 19:12:38
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-03-28 15:51:43
 * @FilePath: /2023/js/index.js
 */
// function search(str) {}
// const str = "sdsadwsdas";
// search(str);
// 寻找字符串中重复最多的字符以及次数
function promiseAll(arr) {
    return new Promise((resolve, reject) => {
        if (Object.prototype.toString.call(arr) !== "[object Array]") {
            return reject(new Error("数组"));
        }
        let count = 0;
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            Promise.resolve(i)
                .then((res) => {
                    count++;
                    result[i] = res;
                    if (count === arr.length) {
                        return resolve(result);
                    }
                })
                .catch((err) => {
                    return reject(err);
                });
        }
    });
}
Promise.prototype.finallymy = function (callback) {
    let p = this.constructor;
    return this.then(
        (value) => {
            p.resolve(callback()).then(() => value);
        },
        (reason) => {
            p.resolve(callback()).then(() => {
                throw reason;
            });
        }
    );
};
