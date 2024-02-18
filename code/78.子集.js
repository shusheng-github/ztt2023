/*
 * @Date: 2024-01-24 19:00:30
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-01-26 16:43:48
 * @FilePath: /vite/Users/a58/work/my-project/2023/code/78.子集.js
 */

function fn(nums) {
    const length = nums.length;
    const res = [];
    const path = [];
    backtracking(0);
    function backtracking(startIndex) {
        res.push(Array.from(path));
        for (let i = startIndex; i < length; i++) {
            path.push(nums[i]);
            backtracking(i + 1);
            path.pop();
        }
    }
    return res;
}

var result = fn([1, 2, 3]);
// [],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]
console.log("result :>> ", result);

// [1,2,3]
// 第一:i=0，path=[1] 执行backtracking，
// i=1,path=[1,2],执行backtracking，
// i=2,path=[1,2,3],执行backtracking，不符合，
// i=3,不符合，返回i=2,path=[1,2],循环执行完
// 返回i=1,path=[1],
// i=2,path=[1,3],backtracking(3),不符合path=[1]，
// i=0,path=[],
// 1=1,path=[2]
