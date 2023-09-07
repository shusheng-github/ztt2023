/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => {
        return a[0] - b[0];
    });
    let ans = [];
    var max;
    for (let left = 0; left < intervals.length; ) {
        let right = left + 1;
        max = intervals[left][1];
        while (
            intervals[right] &&
            right < intervals.length &&
            intervals[right][0] <= intervals[left][1]
        ) {
            max = Math.max(max, intervals[right][1]);
            right++;
        }
        ans.push([intervals[left][0], max]);
        left = right;
    }
};
merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
]);
// @lc code=end
