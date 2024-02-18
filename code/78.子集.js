/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let length = nums.length;
  let res = [];
  let path = [];
  backtracking(0)
  function backtracking (startIndex) {
    if (startIndex > length) {
      return
    }
    res.push(Array.from(path))
    for (let i = startIndex; i < length; i++) {
      path.push(nums[i]);
      backtracking(i + 1)
      path.pop()
    }
  }
  return res
};
const result = subsets([1, 2, 3])
console.log('result', result)