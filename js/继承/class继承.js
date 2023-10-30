/*
 * @Date: 2023-10-30 16:54:36
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-10-30 17:01:04
 * @FilePath: /2023/js/继承/class继承.js
 */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return "(" + this.x + ", " + this.y + ")";
    }
}
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y); // 调用父类的constructor(x, y)
        this.color = color;
    }
}

let cp = new ColorPoint(1, 2, 3);
var result = cp.toString();
console.log("cp :>> ", cp);
console.log("result :>> ", result);
