/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const length = nums.length;
  var dpMax = new Array(length);
  var dpMin = new Array(length);
  dpMax[0] = nums[0];
  dpMin[0] = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dpMax[i] = Math.max(Math.max(dpMax[i - 1] * nums[i], nums[i]), dpMin[i - 1] * nums[i])
    dpMin[i] = Math.min(Math.min(dpMin[i - 1] * nums[i], nums[i]), dpMax[i - 1] * nums[i]);
  }
  console.log('dpMax', dpMax)
  for (let i = 0; i < length; i++) {
    max = Math.max(dpMax[i], max)
  }
  return max;
};
var res = maxProduct([2, 3, -2, 4])
console.log('res', res)
