const wrap = function (promise) {
  let _reject;
  const obj = Promise.race([promise, new Promise((resolve, reject) => {
    _reject = reject
  })]);
  obj.obort = function () {
    _reject('obort')
  }
  return obj;
}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(33)
  }, 3000)
})
promise1.then((res) => {
  console.log('res', res)
})
const a = wrap(promise1)
a.obort()
// console.log('a', a)