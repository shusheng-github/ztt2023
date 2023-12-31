/*
 * @Date: 2023-08-28 10:50:35
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-10-25 11:20:43
 * @FilePath: /2023/code/3.无重复字符的最长子串.js
 */
/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// 思路：滑动窗口
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let left = 0;
    const map = new Map();
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        if (map.has(s.charAt(i))) {
            // 移动到重复元素的下一个元素
            // 为啥要求最大值？比如abbcag这个例子，遇到第二个a的时候，也是进了判断条件
            // 但是a已经是上一轮的窗口，所以要取最大的left, 或者用下面的方式，直接不进循环
            left = Math.max(left, map.get(s.charAt(i)) + 1);
        }
        // 或者
        // if (map.has(s.charAt(i)) && map.get(s.charAt(i)) >= left) {
        //     left = map.get(s.charAt(i)) + 1;
        // }
        map.set(s.charAt(i), i);
        // 当前元素到做窗口的距离
        max = Math.max(max, i - left + 1);
    }
    console.log("max :>> ", max);
    return max;
};

const result = lengthOfLongestSubstring("abbcag");
console.log("result :>> ", result);
// d 0,  v 1,
// left: v 1
// v 1, d 2, f3
//
// @lc code=end
