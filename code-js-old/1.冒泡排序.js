function bubble(arr) {
    const length = arr.length;
    for (var i = 0; i < length; i++) {
        let flag = false;
        for (var j = i + 1; j < length; j++) {
            if (arr[i] > arr[j]) {
                flag = true;
                var value = arr[j];
                arr[j] = arr[i];
                arr[i] = value;
            }
        }
        if (!flag) return arr;
    }
    return arr;
}

function betterBubble(arr) {
    const length = arr.length;
    for (var i = 0; i < length; i++) {
        let flag = false;
        for (var j = 0; j < length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                flag = true[(arr[j], arr[j + i])] = [arr[j + i], arr[j]];
            }
        }
        if (!flag) return arr;
    }
    return arr;
}
var arr = [5, 4, 3, 2, 1];
console.log("bubble() :>> ", bubble(arr));
