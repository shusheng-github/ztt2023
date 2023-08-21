// 接受一个数组
// 返回promise对象
function promiseAll(arr) {
    return new Promise(function (resolve, reject) {
        if (Object.prototype.toString.call(arr) !== "[object Array]") {
            return reject(new Error("请传入数组"));
        }
        let result = [];
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            Promise.resolve(arr[i])
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

let promise1 = new Promise((resolve, reject) => {
    resolve("p1");
});
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p2");
    }, 1000);
});
let promise3 = new Promise((resolve, reject) => {
    resolve("p3");
});

const all = promiseAll([promise1, promise2, promise3]);
all.then((res) => {
    console.log("res :>> ", res);
});
