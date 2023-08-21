function myInstanceOf(left, right) {
    let leftValue = left.__proto__;
    const rightValue = right.prototype;
    while (true) {
        if (leftValue === null) {
            return false;
        }
        if (leftValue === rightValue) {
            return true;
        }
        leftValue = leftValue.__proto__;
    }
}

function Animal() {}
function dog() {}
const cat = new Animal();

const result = myInstanceOf(dog, Animal);
console.log("result :>> ", result);
