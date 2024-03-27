/*
 * @Date: 2024-02-25 21:32:01
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-03-14 12:58:48
 * @FilePath: /2023/code/test.js
 */

function insertSort(nums) {
    const length = nums.length;
    if (length <= 1) return nums;
    const mid = Math.floor(length / 2);
    const leftArr = insertSort(nums.slice(0, mid));
    console.log('leftArr :>> ', leftArr);
    const rightArr = insertSort(nums.slice(mid, length));
    console.log('rightArr :>> ', rightArr);
    nums = merge(leftArr, rightArr);
    return nums;
    function merge(arr1, arr2) {
        let i = 0;
        let j = 0;
        const result = [];
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                result.push(arr1[i]);
                i++;
            } else {
                result.push(arr2[j]);
                j++;
            }
        }
        if (i < arr1.length) {
            return result.concat(arr1.slice(i));
        } else {
            return result.concat(arr2.slice(j));
        }
    }
}

function mergeSort(arr) {
    const len = arr.length
    // 处理边界情况
    if(len <= 1) {
        return arr
    }   
    // 计算分割点
    const mid = Math.floor(len / 2)    
    // 递归分割左子数组，然后合并为有序数组
    const leftArr = mergeSort(arr.slice(0, mid)) 
    console.log('leftArr :>> ', leftArr);
    // 递归分割右子数组，然后合并为有序数组
    const rightArr = mergeSort(arr.slice(mid,len))  
    console.log('rightArr :>> ', rightArr);
    // 合并左右两个有序数组
    arr = mergeArr(leftArr, rightArr)  
    // 返回合并后的结果
    return arr
}
  
function mergeArr(arr1, arr2) {  
    // 初始化两个指针，分别指向 arr1 和 arr2
    let i = 0, j = 0   
    // 初始化结果数组
    const res = []    
    // 缓存arr1的长度
    const len1 = arr1.length  
    // 缓存arr2的长度
    const len2 = arr2.length  
    // 合并两个子数组
    while(i < len1 && j < len2) {
        if(arr1[i] < arr2[j]) {
            res.push(arr1[i])
            i++
        } else {
            res.push(arr2[j])
            j++
        }
    }
    // 若其中一个子数组首先被合并完全，则直接拼接另一个子数组的剩余部分
    if(i<len1) {
        return res.concat(arr1.slice(i))
    } else {
        return res.concat(arr2.slice(j))
    }
}

const res = insertSort([7, 5, 2, 8]);
console.log("res :>> ", res);
