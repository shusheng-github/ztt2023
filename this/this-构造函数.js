function Test () {
  this.a = 1;
  this.b = 2;
  console.log('this', this)
  return {
    c:  3
  }
}

const test = new Test()
// test()
console.log('test', test)