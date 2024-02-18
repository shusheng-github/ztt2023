/*
 * @Date: 2024-01-26 17:35:28
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-01-29 17:09:48
 * @FilePath: /vite/Users/a58/work/my-project/2023/code/39.组合总和.js
 */
/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const length = candidates.length;
    const path = [];
    const res = [];
    let sum = 0;
    backtracking(0);
    function backtracking(startIndex) {
        if (sum === target) {
            res.push(Array.from(path));
            return;
        }
        for (
            let i = startIndex;
            i < length && sum + candidates[i] <= target;
            i++
        ) {
            path.push(candidates[i]);
            sum += candidates[i];
            backtracking(i);
            path.pop();
            sum -= candidates[i];
        }
    }
    return res;
};
var combinationSum1 = function (candidates, target) {
    const ans = [];
    const dfs = (target, combine, idx) => {
        if (idx === candidates.length) {
            return;
        }
        if (target === 0) {
            ans.push(combine);
            return;
        }
        // 直接跳过
        dfs(target, combine, idx + 1);
        // 选择当前数
        if (target - candidates[idx] >= 0) {
            dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
        }
    };

    dfs(target, [], 0);
    return ans;
};
var combinationSum2 = function (nums, target) {
    var length = nums.length;
    var res = [];
    var path = [];
    var total = 0;
    backtracking(0);
    function backtracking(startIndex) {
        if (total === target) {
            res.push(Array.from(path));
        }
        if (total > target) return;
        for (let i = startIndex; i < length; i++) {
            path.push(nums[i]);
            total += nums[i];
            backtracking(i);
            path.pop();
            total -= nums[i];
        }
    }
    console.log("res :>> ", res);
    return res;
};
combinationSum2([2, 3, 6, 7], 7);
// 1.i=0;path=[2];backtracking()
// 2.i=0;path=[2,2];backtracking()
// 3.i=0;path=[2,2,2];backtracking() 后面的都进不去循环
// 回到2，i=1;path=[2,2,3],sum=7;backtracking(1);
// 回到1，i=1;

// @lc code=end
// 输入：candidates = [2,3,6,7], target = 7
// 输出：[[2,2,3],[7]]

// 输入: candidates = [2,3,5], target = 8
// 输出: [[2,2,2,2],[2,3,3],[3,5]]

// 输入: candidates = [2], target = 1
// 输出: []
