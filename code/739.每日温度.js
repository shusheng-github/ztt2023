/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    const length = T.length;
    let stack = [];
    let res = new Array(length).fill(0);
    for (let i = 0; i < length; i++) {
        while (stack.length > 0 && T[i] > T[stack[stack.length - 1]]) {
            const top = stack.pop();
            res[top] = i - top;
        }
        stack.push(i);
    }
    console.log("stack :>> ", stack);
    console.log("res :>> ", res);
    return res;
};

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
// 第1轮0  stack=[0]
// 第2轮1  74>73 stack=[] res[0]=1  stack=[1]
// 第3轮2  75>74 stack=[] res[1]=1  stack=[2]
// 第4轮3  71>75 stack=[2,3]
// 第5轮4  69>75 stack=[2,3,4]
// 第6轮5  72>69 stack=[2,3] top=4 res[4]=1
//               stack=[2] top=3 res[3]=2
// @lc code=end
