/*
 * @Date: 2023-07-06 19:14:35
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-11-17 16:31:38
 * @FilePath: /miniprogram-58zhaopin-toc/Users/a58/work/my-project/2023/code/5.最长回文子串.js
 */
/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 暴力解题法
var longestPalindrome = function (s) {
    if (s.length < 2) {
        return s;
    }
    let max = 1;
    let res = s.substring(0, 1);
    for (let i = 0; i < s.length; i++) {
        for (j = i + 1; j < s.length; j++) {
            if (j - i + 1 > max && isPalindrome(s, i, j)) {
                res = s.substring(i, j + 1);
                max = j - i + 1;
            }
        }
    }
    return res;
};

var isPalindrome = function (s, left, right) {
    while (left < right) {
        if (s.charAt(left) !== s.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

// 中心扩展法
// 所谓中心扩展法，就是从一个中心往两边扩展判断
// 参考链接：https://juejin.cn/post/6844903897425788941
function longestPalindrome3(s) {
    let left = 0;
    let right = 0;
    for (let i = 0; i < s.length; i++) {
        const len1 = search(s, i, i); // 基数
        const len2 = search(s, i, i + 1); // 偶数
        const len = Math.max(len1, len2);
        if (len > right - left + 1) {
            left = i - Math.floor((len - 1) / 2);
            right = i + Math.floor(len / 2);
        }
    }
    return s.substring(left, right + 1);
}
function search(s, left, right) {
    // left = i - 1;right = i + 1
    // 如果s[left]等于s[right]则继续往两边扩展判断
    // 当s[left]不等于s[right]时结束，这时候返回right-left就是回文串的长度
    while (
        left >= 0 &&
        right < s.length &&
        s.charAt(left) === s.charAt(right)
    ) {
        left--;
        right++;
    }
    return right - left - 1;
}
//cbacabd
const res = longestPalindrome3("babad");
console.log("res :>> ", res);
//
// @lc code=end
