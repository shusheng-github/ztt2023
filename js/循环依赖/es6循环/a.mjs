// console.log('a is running');
// import {b} from './b.mjs'
// console.log('b = %j', b);
// setTimeout(() => console.log('b = %j after 500 ms', b), 500);
// export var a = false;
// console.log('a is finished');


// import {bar} from './b';
// console.log('a.mjs');
// console.log(bar);
// export let foo = 'foo';
console.log('aa')
import { bar } from "./b.mjs";
console.log("a.mjs");
console.log(bar);
export function foo() {
    return "foo";
}