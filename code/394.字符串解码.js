/*
 * @Date: 2023-12-18 19:07:06
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-12-20 14:20:51
 * @FilePath: /m-edu-course-detail-new/Users/a58/work/my-project/2023/code/394.字符串解码.js
 */
/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    const num_stack = [];
    const res_stack = [];
    let num = 0;
    let res = "";
    for (let i of s) {
        if (i === "[") {
            res_stack.push(res);
            num_stack.push(num);
            num = "";
            res = "";
        } else if (i === "]") {
            let temp = "";
            const last = res_stack.pop();
            const current = num_stack.pop();
            for (let i = 0; i < current; i++) {
                temp += res;
            }
            res = last + temp;
        } else if (!isNaN(i)) {
            num = num * 10 + i;
        } else {
            // 字符串
            res += i;
        }
    }
    return res;
};
const s = "3[a]2[bc]";
const result = decodeString(s);
console.log("result :>> ", result);
// 1. 3：num=3
// 2. [: res_stack=[]; num_stack=[3]; num=0; res='';
// 3. a: res=a;
// 4. ]: last=''; res=3*res=aaa; res=''+aaa=aaa;
// 5. 2: num=2;
// 6. [: res_stack=[aaa]; num_stack=[2] num=0; res=''
// @lc code=end
