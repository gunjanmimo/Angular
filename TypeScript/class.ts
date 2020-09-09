class myClass {
    j: number;
    constructor(k: number) {
        this.j = k;
    }
}
let mClass = new myClass(34);
console.log(mClass.j);

//class child
class ChildClass extends myClass {
    l: number;
    constructor(m: number, k: number) {
        super(k);
        this.j = m;
    }
    value() {
        console.log("this is a ne child class");
    }
}
// interface

interface myInt {
    s: number;
    t: string;
    myFunc();
}
class A implements myInt {
    s: number;
    t: string;
    constructor(s: number, t: string) {
        this.s = s
        this.t = t
    }
    myFunc() {
        console.log("implementing interface s:" + this.s + "t: " + this.t)
    }
}
let o = new A(1, "string")
console.log(o.myFunc())