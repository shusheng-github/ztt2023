/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let map = {
    2: "abc", // 2
    3: "def", // 3
    4: "ghi", // 4
    5: "jkl", // 5
    6: "mno", // 6
    7: "pqrs", // 7
    8: "tuv", // 8
    9: "wxyz", // 9
  };
  let res = [];
  let path = [];
  let index = 0;
  const length = digits.length;
  if (length === 0) return res
  if (length === 1) return map[digits].split("");
  backtracking(index)
  function backtracking (index) {
    if (index === digits.length) {
      res.push(path.join(""))
      return;
    }
    const letter = map[Array.from(digits)[index]];
    for (let i = 0; i < letter.length; i++) {
      path.push(letter[i]);
      backtracking(index + 1);
      path.pop();
    }
  }
  console.log('res', res)
  return res;
};
letterCombinations('')