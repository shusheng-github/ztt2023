/*
 * @Date: 2024-02-25 21:32:01
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-02-29 16:16:41
 * @FilePath: /2023/code/test.js
 */
// "()[]{}"
//  "([)]"
// "([{ }])"
// temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
// result =  [1, 1, 4, 2, 1, 1, 0, 0]
// 尝试去维持一个递减栈。
// 思路：
// 维护一个栈，里面存储的是下标，如果当前的元素大于栈顶元素对应的值，那计算下标差，放到对应的结果数组，同时，栈顶元素出栈，因为栈顶元素已经找到了最近的大于它的温度。
function fn(num) {
    const length = num.length;
    const res = new Array(length).fill(0);
    const stack = [];
    for (let i = 0; i < length; i++) {
        while (stack.length && num[i] > num[stack[stack.length - 1]]) {
            const top = stack.pop();
            res[top] = i - top;
        }
        stack.push(i);
    }
}
const result = fn([73, 74, 75, 71, 69, 72, 76, 73]);
console.log("result :>> ", result);
