/*
 * @Date: 2024-01-31 16:29:14
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-02-20 19:22:05
 * @FilePath: /2023/js/深拷贝/index2.js
 */
const mapTag = "[object Map]";
const setTag = "[object Set]";
const arrayTag = "[object Array]";
const objectTag = "[object Object]";

const boolTag = "[object Boolean]";
const dateTag = "[object Date]";
const errorTag = "[object Error]";
const numberTag = "[object Number]";
const regexpTag = "[object RegExp]";
const stringTag = "[object String]";
const symbolTag = "[object Symbol]";
const functionTag = "[object Function]";
// 可继续递归tag
const deepTag = [mapTag, setTag, arrayTag, objectTag];
// 不可继续递归tag
// const deepOtherTag = [
//     boolTag,
//     dateTag,
//     errorTag,
//     numberTag,
//     regexpTag,
//     stringTag,
//     symbolTag,
//     functionTag
// ];
function isObject(target) {
    return target !== null && typeof target === "object";
}
// 初始化对象等原型
function getInit(target) {
    const Ctor = target.constructor;
    return new Ctor();
}
function getType(target) {
    return Object.prototype.toString.call(target);
}

function cloneFunction(func) {
    const bodyReg = /(?<={)(.|\n)+(?=})/m;
    const paramsReg = /(?<=\().+(?=\)\s+{)/;
    const funcString = func.toString();
    if (func.prototype) {
        const body = bodyReg.exec(funcString);
        const params = paramsReg.exec(funcString);
        console.log("body", body);
        console.log("params", params);
        if (body) {
            if (params) {
                const paramsArr = params[0].split(",");
                return new Function(...paramsArr, body[0]);
            }
        } else {
            return null;
        }
    } else {
        return eval(funcString);
    }
}

// 可继续递归tag
function deepClone(target, map = new WeakMap()) {
    if (!isObject(target)) return target;

    // 初始化
    let type = getType(target);
    let result;

    // 处理可持续递归的项
    if (deepTag.includes(type)) {
        result = getInit(target);
    }

    // 防止循环引用
    if (map.has(target)) {
        return map.get(target);
    }
    console.log("target :>> ", target);
    map.set(target, result);

    // 克隆set
    if (type === mapTag) {
        target.forEach((value, key) => {
            result.set(key, deepClone(value, map));
        });
        return result;
    }

    // 克隆map
    if (type === setTag) {
        target.forEach((value, key) => {
            result.add(key, deepClone(value, map));
        });
        return result;
    }

    for (let key in target) {
        // for in 会遍历到原型对象上的属性和方法。
        // hasOwnProperty() 方法返回一个布尔值，表示对象自有属性（而不是继承来的属性）中是否具有指定的属性。
        if (target.hasOwnProperty(key)) {
            if (isObject(target[key])) {
                result[key] = deepClone(target[key], map);
            } else {
                result[key] = target[key];
            }
        }
    }
    return result;
}
var a = {
    name: "muyiy",
    book: {
        title: "You Don't Know JS",
        price: "45"
    },
    a1: undefined,
    a2: null,
    a3: 123,
    reg: /\d+/,
    arr: [1, 2, 3],
    map: new Map([["name", "1"]]),
    fn: (params) => {
        console.log(params);
    },
    d: {
        e: 1,
        f: { g: 3 }
    }
};
// a.createCircle = a;
var b = deepClone(a);
a.d.e = 3;
console.log("b :>> ", b);
