/*
 * @Date: 2023-10-24 14:26:44
 * @LastEditors: Shusheng
 * @LastEditTime: 2024-02-18 21:39:00
 * @FilePath: /2023/code/test.js
 */
// 最长递增子序列
// dp[i] 的值代表 nums 以 nums[i] 结尾的最长子序列长度。
function fn (nums) {
  var length = nums.length;
  var dp = new Array(length).fill(1);
  let max = 1;
  for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    max = Math.max(max, dp[i])
  }
  console.log('dp', dp)
  return max
}
var res = fn([4, 10, 2])
console.log('res', res)
