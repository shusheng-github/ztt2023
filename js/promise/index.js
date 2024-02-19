const MyPromise = require('./myPromise');

let promise1 = new MyPromise((resolve, reject) => {
  resolve('promise1')
})

// let promise2 = promise1.then(res => {
//   // throw new Error('2121')
//   // return promise2
//   // return new MyPromise((resolve, reject) => {
//   //   resolve(new MyPromise((resolve, reject) => {
//   //     resolve(21)
//   //   }))
//   // })
// })
promise1.then(res => { throw Error('w') }, (r) => { console.log('r', r) })
  .aa((error => { console.log('ss', error) }))