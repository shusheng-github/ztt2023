async function async1 () {
  console.log('async1 start');
  await async2();
  // 微任务 2
  console.log('async1 end');
}
async function async2 () {
  //async2做出如下更改：
  new Promise(function (resolve) {
    console.log('promise1');
    resolve();
  }).then(function () {
    // 微任务 1
    console.log('promise2');
  });
}

console.log('script start');

setTimeout(function () {
  console.log('setTimeout');
  new Promise(function (resolve) {
    resolve();
  }).then(function () {
    console.log('promise88'); 
  });
  setTimeout(function () {
    console.log('setTimeout2宏任务');
  }, 0); // 宏1
}, 0); // 宏1
async1();

new Promise(function (resolve) {
  console.log('promise3');
  resolve();
}).then(function () {
  console.log('promise4'); // 微任务3
});

console.log('script end');