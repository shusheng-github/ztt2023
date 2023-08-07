var obj = {
  a:1,
  test: function(){
    function t(){
      console.log(this) // window,因为t 是孤立的函数
    }
    t()
  }
};
obj.test()