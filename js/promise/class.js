/*
 * @Date: 2024-03-03 11:32:34
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-03-03 12:11:13
 * @FilePath: /2023/js/promise/class.js
 */
class LimitPromise {
    constructor(max) {
        this.max = max || 3;
        // 正在执行的数量
        this.count = 0;
        // 等待任务队列
        this.taskQueue = [];
        // 实例 单例模式
        this.instance = null;
    }
    run(caller) {
        // 输入：外部要添加的ajax请求
        // 输出：返回队列处理的promise
        return new Promise((resolve, reject) => {
            // 创建处理任务
            const task = this.createTask(caller, resolve, reject);
            if (this.count >= this.max) {
                this.taskQueue.push(task);
            } else {
                task();
            }
        });
    }
    createTask(caller, resolve, reject) {
        return () => {
            caller()
                .then((res) => {
                    console.log("res :>> ", res);
                    resolve(res);
                })
                .catch((error) => {
                    reject(error);
                })
                .finally(() => {
                    this.count--;
                    if (this.taskQueue.length > 0) {
                        const task = this.taskQueue.shift();
                        task();
                    }
                });
            this.count++;
        };
    }
    static getInstance(max) {
        if (!this.instance) {
            this.instance = new LimitPromise(max);
        }
        return this.instance;
    }
}
const asyncPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve("测试测试");
        }, 1 * 1000);
    });
};
const limitPromise = LimitPromise.getInstance(3);
for (let i = 1; i <= 5; i++) {
    limitPromise.run(asyncPromise).then((res) => {
        console.log(i, "result :>> ", res);
    });
}
