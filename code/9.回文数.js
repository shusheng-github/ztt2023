/*
 * @LastEditTime: 2022-07-19 10:24:07
 */
/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  if(x < 0 ) return false;
  const newNum = x.toString()
  const length = newNum.length
  for (let i = 0; i <= Math.floor(length / 2); i++) {
    if (newNum[i] !== newNum[length - 1 - i]) {
      return false
    }
  }
  return true
}
// @lc code=end
