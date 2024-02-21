// 完整版本
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

function isObject(target) {
    return (
        target !== null &&
        (typeof target === "object" || typeof target === "function")
    );
}

function getType(target) {
    return Object.prototype.toString.call(target);
}

// 初始化对象等原型
function getInit(target) {
    const Ctor = target.constructor;
    return new Ctor();
}

// 函数拷贝
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
const deepTag = [mapTag, setTag, arrayTag, objectTag];
// 不可继续递归tag
const deepOtherTag = [
    boolTag,
    dateTag,
    errorTag,
    numberTag,
    regexpTag,
    stringTag,
    symbolTag,
    functionTag
];

function deepClone(target, map = new WeakMap()) {
    if (!isObject(target)) return target;
    // 初始化
    const type = getType(target);
    let result;

    // 处理可持续递归的项
    if (deepTag.includes(type)) {
        console.log("type :>> ", type);
        result = getInit(target);
    }
    // 防止循环引用
    if (map.has(target)) {
        return map.get(target);
    }
    map.set(target, result);

    // 克隆set
    if (type === setTag) {
        target.forEach((value) => {
            result.add(deepClone(value, map));
        });
        return result;
    }

    // 克隆map
    if (type === mapTag) {
        target.forEach((value, key) => {
            result.set(key, deepClone(value, map));
        });
        return result;
    }
    if (deepOtherTag.includes(type)) {
        switch (type) {
            case boolTag:
            case numberTag:
            case stringTag:
            case errorTag:
            case dateTag:
                const Ctor = target.constructor;
                return new Ctor(target);
            case regexpTag:
                const reFlags = /\w*$/;
                const result = new target.constructor(
                    target.source,
                    reFlags.exec(target)
                );
                result.lastIndex = target.lastIndex;
                return result;
            case symbolTag:
                return Object(Symbol.prototype.valueOf.call(target));
            case functionTag:
                return cloneFunction(target);
            default:
                return null;
        }
    }
    // 处理数组和对象
    for (let key in target) {
        if (target.hasOwnProperty(key)) {
            console.log("key :>> ", key, target[key]);
            result[key] = deepClone(target[key], map);
        }
    }
    return result;
}

let obj = {
    a: 1,
    b: {
        a: 1,
        b: 2
    },
    reg: /\d+/,
    arr: [1, 2, 3],
    map: new Map([["name", "1"]]),
    func: function (params, test) {
        console.log("1111 :>> ", 1111);
    }
};
// obj.obj = obj;
const cloneObj = deepClone(obj);
// const cloneObj = obj;
// cloneObj.b.a = 3;
// cloneObj.arr[0] = 10;
// console.log("obj :>> ", obj);
console.log("cloneObj :>> ", cloneObj);
