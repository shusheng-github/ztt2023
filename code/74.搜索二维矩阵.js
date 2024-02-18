/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix.length) return false;
  let x = matrix.length - 1;
  let y = 0;
  const rows = matrix[0].length - 1
  while (x >= 0 && y < matrix[0].length) {
    if (matrix[x][y] === target) {
      return true;
    } else if (matrix[x][y] > target) {
      x--;
    } else {
      y++;
    }
  }
  return false
};

var matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
var target = 2;
const result = searchMatrix(matrix, target);
console.log('result', result)
