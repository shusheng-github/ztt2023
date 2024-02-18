/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  var result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i]
  }
  if (result % 2 === 1) return false;
  var target = result / 2;
  // var dp = new Array(nums.length).fill(0).map(() => new Array(target + 1, false));
  const dp = new Array(nums.length).fill(0).map(() => new Array(target + 1).fill(false));
  dp[0][0] = false;
  // 先填表格第 0 行，第 1 个数只能让容积为它自己的背包恰好装满
  if (nums[0] <= target) {
    dp[0][nums[0]] = true;
  }
  console.log('dp', dp)
  for (var i = 1; i < nums.length; i++) {
    for (let j = 0; j <= target; j++) {
      dp[i][j] = dp[i - 1][j];

      if (nums[i] == j) {
        dp[i][j] = true;
        continue;
      }
      if (nums[i] < j) {
        // 有可能在【0,i-1】内已经有一部分元素和为j
        // 有可能在【0,i-1】内的一部分元素和为j - nums[i]，
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
      }
    }
  }
  console.log('dp', dp)
  return dp[nums.length - 1][target];
};
var nums = [1, 2, 5]
var result = canPartition(nums)
console.log('result', result)
