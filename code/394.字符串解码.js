/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const res_stack = [];
  const num_stack = [];
  let num = 0;
  let res = '';
  for (let i of s) {
    if (i === '[') {
      num_stack.push(num);
      res_stack.push(res);
      num = 0;
      res = ''
    } else if (i === ']') {
      let temp = ''
      const currentNum = num_stack.pop();
      for (let i = 0; i < currentNum; i++) {
        temp += res;
      }
      res = res_stack.pop() + temp
    } else if (!isNaN(i)) {
      num = num * 10 + Number(i); // 算出倍数
      console.log('num', num)
    } else {
      res += i
    }
  }
  console.log('res', res)
  return res;
};
decodeString('100[leetcode]')
