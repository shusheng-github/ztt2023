; (function (doc) {
  var oBtn = doc.getElementById('btn');
  function Plus (a, b) {
    this.a = a;
    this.b = b;
    this.init()
  }
  Plus.prototype.init = function () {
    this.bindEvent()
  }

  Plus.prototype.bindEvent = function () {
    // console.log('this', this)// 这里 this 指向 Plus
    // 第一种方法
    // oBtn.addEventListener('click', this.handleClick.bind(this), false)
     // 第二种方法
    var _self = this;
    oBtn.addEventListener('click', function () {
      _self.handleClick();
    }, false)
  }

  Plus.prototype.handleClick = function () {
    // console.log('this', this) / 这里 this 指向 oBtn,因为事件处理函数的this 指向绑定它的元素
    console.log(this.a + this.b)
  }

  window.Plus = Plus;

})(document)

new Plus(3, 4)
