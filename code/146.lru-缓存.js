/*
 * @Date: 2023-12-04 10:46:48
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-12-04 15:07:55
 * @FilePath: /miniprogram-58zhaopin-toc/Users/a58/work/my-project/2023/code/146.lru-缓存.js
 */
/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.cache.has(key)) {
        const node = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, node);
        return node;
    }
    return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    // 添加数据， 如果存在则移动位置；若数据已经满了，删除第一个元素后再添加
    if (this.cache.has(key)) {
        this.cache.delete(key);
        // 删除第一个元素
    } else if (this.cache.size >= this.capacity) {
        // Map.prototype.keys()：返回键名的遍历器。
        this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
};
// Iterator 的遍历过程是这样的:
// 第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
// 第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
// 不断调用指针对象的next方法，直到它指向数据结构的结束位置。
// 每一次调用next方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含value和done两个属性的对象。其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

var obj = new LRUCache(3);
var param_1 = obj.get(1);
obj.put("a", "a");
obj.put("b", "b");
obj.put("c", "c");
obj.put("d", "d");
