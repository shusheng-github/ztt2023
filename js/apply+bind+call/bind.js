Function.prototype.myBind = function (context) {
    var self = this;
    // 实现第3点，因为第1个参数是指定的this,所以只截取第1个之后的参数
    // arr.slice(begin); 即 [begin, end]
    var args = Array.prototype.slice.call(arguments, 1);

    var fBound = function () {
        console.log("this :>> ", this);
        // 实现第4点，这时的arguments是指bind返回的函数传入的参数
        // 即 return function 的参数
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(
            this instanceof fBound ? this : context,
            args.concat(bindArgs)
        );
    };
    // fBound.prototype = this.prototype;
    return fBound;
};

var value = 2;
var foo = {
    value: 1
};
function bar(name, age) {
    this.habit = "shopping";
    console.log("value", this.value);
    console.log(name);
    console.log(age);
}
bar.prototype.friend = "kevin";

var bindFoo = bar.myBind(foo, "Jack");
var obj = new bindFoo(20);
console.log("obj :>> ", obj);
// undefined
// Jack
// 20
