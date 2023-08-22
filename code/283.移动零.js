/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums == null) return
  let j = 0;
  const length = nums.length;
  // 第一次遍历把所有非0的记录下来
  for (let i = 0; i < length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    }
  }
  // 第二次从最后非0的往后都补充为0
  for (let i = j; i < length; i++) {
    nums[i] = 0;
  }
  return nums;
};

// 0 当做这个中间点，把不等于 0的放到中间点的左边，等于 0 的放到其右边
// 我们使用两个指针 i 和 j，只要 nums[i]!=0，我们就交换 nums[i] 和 nums[j]
var moveZeroe2 = function (nums) {
  if (nums == null) return
  //两个指针i和j
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    //当前元素!=0，就把其交换到左边，等于0的交换到右边
    if (nums[i] !== 0) {
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j++
    }
  }
};

const result = moveZeroes([0, 1, 0, 3, 12])
console.log('result', result)