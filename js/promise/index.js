const MyPromise = require('./myPromise');
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(123)
  }, 2000)
  // reject(23)
  // throw new Error('2121')
});
promise.then(res => {
  console.log('res1=>', res)
}, error => {
  console.log('error=>', error)
})

promise.then(res => {
  console.log('res2=>', res)
}, error => {
  console.log('error=>', error)
})