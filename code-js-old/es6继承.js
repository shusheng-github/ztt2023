class Foo {
    #p = 1;
    #m() {
        console.log("hello");
    }
    getP() {
        return this.#p;
    }
}

class Bar extends Foo {
    constructor() {
        super();
        // console.log(this.#p); // 报错
        // this.#m(); // 报错
        console.log(this.getP()); // 1
    }
}

new Bar();
