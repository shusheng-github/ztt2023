function Animal(type, name) {
    this.type = type
    this.name = name
    this.hobbies = ['eat fish', 'play ball']
}
Animal.prototype.likes = 18;
function Cat(type, name) {
    Animal.call(this, type, name)
    this.age = '1'
    this.say = () => {
        console.log('type is ' + this.type + ' name is ' + this.name);
    }
}
let smallCat = new Cat('Cat', 'Nini')
smallCat.hobbies.push('sleep')
console.log(smallCat.hobbies); // [ 'eat fish', 'play ball', 'sleep' ]
smallCat.say() // type is Cat name is Nini
console.log('smallCat.likes :>> ', smallCat.likes);

let bigCat = new Cat('Cat', 'Nicole')
console.log(bigCat.hobbies) // [ 'eat fish', 'play ball' ]
bigCat.say() // type is Cat name is Nicole