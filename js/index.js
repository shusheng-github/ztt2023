/*
 * @Date: 2024-02-21 19:12:38
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-02-21 19:35:59
 * @FilePath: /2023/js/index.js
 */
function search(str) {
    const obj = {};
    for (let i in str) {
        if (!obj[str[i]]) {
            obj[str[i]] = 1;
        } else {
            const count = obj[str[i]];
            obj[str[i]] = count + 1;
        }
    }
    console.log("obj :>> ", obj);
    let max = 0;
    let maxStr = "";
    for (let key in obj) {
        if (obj[key] > max) {
            max = obj[key];
            maxStr = key;
        }
    }
    console.log("max :>> ", max);
    console.log("maxStr :>> ", maxStr);
    return {
        max,
        maxStr
    };
}
const str = "sdsadwsdas";
search(str);
// 寻找字符串中重复最多的字符以及次数
