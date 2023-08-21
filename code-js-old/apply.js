Function.prototype.apply3 = function (context, arr) {
    // context = context ? Object(context) : window;
    // context.fn = this;
    // let result;
    // if (!arr) {
    //     result = context.fn();
    // }
    // result = context.fn(...arr);
    // delete context.fn;
    // return result;
};

Function.prototype.call3 = function (context) {
    context = context ? Object(context) : window;
    context.fn = this;
    // const args = [...arguments].slice(1);
    // const args = Array.prototype.slice.call(arguments, 1);
    // console.log("args :>> ", args);
    // const result = context.fn(...args);
    const args = [];
    for (var i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
    }
    const result = eval("context.fn(" + args + ")");

    delete context;
    return result;
};

const value = 2121;
const obj = {
    value: "obj"
};

const aa = function (arr1, arr2) {
    console.log(this.value);
    console.log("arr1 :>> ", arr1);
    console.log("arr2 :>> ", arr2);
};

// aa.apply3(obj, [1, 2]);
aa.call3(obj, 1, 2);
