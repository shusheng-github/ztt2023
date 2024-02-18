/*
 * @Date: 2024-01-24 17:39:57
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-01-30 17:24:41
 * @FilePath: /code/test.js
 */
function fn() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (j === 2) {
                return;
            }
            console.log("i+j :>> ", i, j);
        }
    }
}
fn();
