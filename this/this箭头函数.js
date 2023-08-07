var obj = {
  a: 1
};

obj.test = function () {
  var t1 = () => {
    console.log(this) // obj
    var t2 = () => {
      console.log(this) // obj
    }
    t2()
  }
  t1()
}

obj.test()

obj.test2 = function () {
  var t1 = function () {
    console.log(this) // window
    var t2 = () => {
      console.log(this) // window
    }
    t2()
  }
  t1()
}

obj.test2()
