function time() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("jajajajaj"), 1000);
    });
}
async function getTime() {
    try {
        // const result = await time();
        new Promise((resolve, reject) => {
            reject("jajajajaj");
        });
    } catch (e) {
        console.log("catch", e); // jajajajaj
    }
}
getTime()
    .then((res) => {
        console.log("res==>", res);
    })
    .catch((err) => {
        console.log("err :>> ", err);
    });

// try {
//     new Promise((resolve, reject) => {
//         console.log("开始同步任务");
//         reject("出错了");
//     });
// } catch (error) {
//     console.log("try catch捕获同步错误", error);
// }
// console.log("结束同步任务");

// try {
//     new Promise((resolve, reject) => {
//         console.log("开始同步任务");
//         reject(Error("出错了"));
//         // resolve(212121);
//     })
//         .then((res) => {
//             console.log("res :>> ", res);
//         })
//         .catch((e) => {
//             console.log("Promise catch捕获异步错误", e);
//         })
//         .then(() => {
//             console.log("继续同步任务");
//         });
// } catch (error) {
//     console.log("try catch捕获同步错误", error);
// }
// console.log("结束同步任务");
