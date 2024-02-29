/*
 * @Date: 2023-08-08 16:56:02
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-02-27 15:52:31
 * @FilePath: /2023/vue/vue2数据劫持/src/index.js
 */
import Vue from "vue";
let vm = new Vue({
    el: "#app",
    data() {
        return {
            title: "我的这是数据",
            total: 2,
            students: [
                { name: "1", age: 20 },
                {
                    name: "2",
                    age: 30
                }
            ],
            teacher: ["张三", "李四"],
            info: {
                a: {
                    b: 1
                }
            }
        };
    }
});
console.log("vm", vm);
