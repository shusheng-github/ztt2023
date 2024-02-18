/*
 * @Date: 2024-01-30 14:16:29
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-01-30 17:23:32
 * @FilePath: /vite/Users/a58/work/my-project/2023/code/79.单词搜索.js
 */
/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const rowLength = board.length;
    const columnLength = board[0].length;
    const length = word.length;
    var direction = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];
    var marked = new Array(rowLength)
        .fill(false)
        .map(() => new Array(columnLength).fill(false));

    function backtracking(i, j, word, start) {
        if (board[i][j] != word.charAt(start)) {
            return false;
        } else if (start == length - 1) {
            return true;
        }
        //如果此处已经匹配，则往此处进行方向选择
        //将该处的状态标记为已访问
        marked[i][j] = true;
        let result = false;
        for (let k = 0; k < 4; k++) {
            let newX = i + direction[k][0];
            let newY = j + direction[k][1];
            if (inArea(newX, newY) && !marked[newX][newY]) {
                const res = backtracking(newX, newY, word, start + 1);
                if (res) {
                    result = true;
                    // break跳出循环，如果是多层的break是跳出内层循环
                    break;
                }
            }
        }
        marked[i][j] = false;
        return result;
    }
    function inArea(x, y) {
        return x >= 0 && x < rowLength && y >= 0 && y < columnLength;
    }
    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < columnLength; j++) {
            const flag = backtracking(i, j, word, 0);
            if (flag) {
                return true;
            }
        }
    }
    return false;
};

var exist1 = function (board, word) {
    const h = board.length,
        w = board[0].length;
    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ];
    const visited = new Array(h);
    for (let i = 0; i < visited.length; ++i) {
        visited[i] = new Array(w).fill(false);
    }
    const check = (i, j, s, k) => {
        if (board[i][j] != s.charAt(k)) {
            return false;
        } else if (k == s.length - 1) {
            return true;
        }
        visited[i][j] = true;
        let result = false;
        for (const [dx, dy] of directions) {
            let newi = i + dx,
                newj = j + dy;
            if (newi >= 0 && newi < h && newj >= 0 && newj < w) {
                if (!visited[newi][newj]) {
                    const flag = check(newi, newj, s, k + 1);
                    if (flag) {
                        result = true;
                        break;
                    }
                }
            }
        }
        visited[i][j] = false;
        return result;
    };

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            const flag = check(i, j, word, 0);
            if (flag) {
                return true;
            }
        }
    }
    return false;
};
var board = [
    ["a", "b", "c", "e"],
    ["s", "f", "c", "s"],
    ["a", "d", "e", "e"]
];
var word = "abcb";
var result = exist(board, word);
console.log("result :>> ", result);
// @lc code=end
