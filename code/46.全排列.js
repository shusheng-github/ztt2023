/*
 * @Date: 2024-01-24 11:12:49
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-01-24 17:51:22
 * @FilePath: /code/46.全排列.js
 */
var permute = function (nums) {
    const length = nums.length;
    let res = [];
    let path = [];
    backtracking(nums, length, []);
    return res;

    function backtracking(nums, length, used) {
        if (path.length === length) {
            res.push(Array.from(path));
            return;
        }
        for (let i = 0; i < length; i++) {
            if (used[i]) continue;
            path.push(nums[i]);
            used[i] = 1;
            backtracking(nums, length, used);
            path.pop();
            used[i] = false;
        }
    }
};
var result = permute([1, 2, 3]);
//1,i=0 path=[1] used=[1,0,0] 执行函数backtracking([1,2,3],3,[1,0,0])
//i=0 此时used[0]=1，下面不执行
//2,i=1 path=[1,2] used=[1,1,0] 执行函数backtracking([1,2,3],3,[1,1,0])
//i=0和i=1都return
//3,i=2 path=[1,2,3] used[1,1,1] 执行函数backtracking([1,2,3],3,[1,1,1])
// path.length === length return
// 回到上面第3步骤，执行函数backtracking后面的代码path=[1,2],used=[1,1,0],i=2是遍历的终点
// 回到第2步骤，此时i=1 那么path=[1] used=[1,0,0]，接着执行循环i=2
//4,i=2,path=[1,3],used=[1,0,1],执行backtracking([1,2,3],3,[1,0,1])
//i=0,不执行
//5,i=1,path=[1,3,2],used=[1,1,1],执行backtracking([1,2,3],3,[1,1,1])
//path.length === length return
//回到5，i=2,不执行，然后回到步骤4，path=[1],used=[1,0,0],
//回到1，path=[],used=[0,0,0]
//执行i=2,重新走一遍先取2的逻辑
