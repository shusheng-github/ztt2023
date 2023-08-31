function addSerial(arr) {
    const length = arr.length;
    const map = new Map();
    const res = new Array(length);
    for (var i=0; i < arr.length; i++) {
        const item = arr[i];
        if (!map.get(item)) {
            map.set(item, 1);
            res[i] = `${item}1`;
        } else {
            const count = map.get(item) + 1;
            map.set(item, count);
            res[i] = `${item}${count}`;
        }
    }
    console.log("map :>> ", map);
    console.log('res :>> ', res);
}

addSerial(["a", "b", "c", "a", "a", "b"]);
// (['a','b', 'c','a', 'a', 'b']) => ['a1', 'b1','c','a2', 'a3', 'b2']
