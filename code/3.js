var threeSum = function (nums) {
  const arr = nums.sort((a, b) => { return a - b });
  const length = arr.length;
  const res = [];
  for (var i = 0; i < arr.length -2 ; i++) {
    if(arr[i] > 0) break;
    let left = i + 1;
    let right = length - 1;
    if (i > 0 && arr[i] === arr[i - 1]) continue; // 去重
    while (left < right) {
      if (arr[i] + arr[left] + arr[right] < 0) {
        left++;
      } else if (arr[i] + arr[left] + arr[right] > 0) {
        right--;
      } else {
        res.push([arr[i], arr[left], arr[right]])
        left++;
        right--;
        while (left < right && arr[left] === arr[left - 1]) {
          left++;
        }
        while (left < right && arr[right] === arr[right + 1]) {
          right--;
        }
      }
    }
  }
  return res;
};

const result = threeSum([-1, 0, 1, 2, -1, -4])
console.log('result', result)