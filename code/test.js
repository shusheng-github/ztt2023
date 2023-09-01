function addSerial (arr) {
  const length = arr.length;
  const map = new Map();
  const map2 = new Map();
  const res = new Array(length);
  for (let value of arr) {
    if (map.has(value)) {
      map.set(value, map.get(value) + 1)
    } else {
      map.set(value, 1)
    }
  }
  for (var i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (map.get(item) === 1) {
      res[i] = item
    } else {
      map2.set(item, map2.has(item) ? map2.get(item) + 1 : 1)
      res[i] = `${item}${map2.get(item)}`
    }
  }
  console.log("res :>> ", res);
}

addSerial(["a", "b", "c", "a", "a", "b"]);
// (['a','b', 'c','a', 'a', 'b']) => ['a1', 'b1','c','a2', 'a3', 'b2']
