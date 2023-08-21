// 接受一个数组，返回每个promise的返回结果组成的数组
function myPromiseAll(arr) {
    return new Promise(function (resolve, reject) {
        if (Object.prototype.toString.call(arr) !== "[object Array]") {
            return reject(new Error(21212));
        }
        let count = 0;
        let result = [];
        const total = arr.length;
        for (let i = 0; i < total; i++) {
            Promise.resolve(arr[i])
                .then((res) => {
                    count++;
                    result[i] = res;
                    if (count === total) {
                        return resolve(result);
                    }
                })
                .catch((err) => {
                    return reject(err);
                });
        }
    });
}

let promise1 = new Promise((resolve, reject) => {
    resolve("p1");
});
let promise2 = new Promise((resolve, reject) => {
    resolve("p2");
});
let promise3 = new Promise((resolve, reject) => {
    resolve("p3");
});
myPromiseAll([1, 2, 3])
    .then((res) => {
        console.log("res :>> ", res);
    })
    .catch((err) => {
        console.log("err :>> ", err);
    });
