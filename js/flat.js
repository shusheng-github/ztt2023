Array.prototype.MyFlat = function () {
  let result = []
  for (let index = 0; index < this.length; index++) {
    if (Object.prototype.toString.call(this[index]) === '[object Array]') {
      result = result.concat(this[index].MyFlat())
    } else {
      result.push(this[index])
    }
  }
  return result
}

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.MyFlat());