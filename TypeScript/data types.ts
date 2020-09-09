// var[identifer]:[type-annotation] = value;
// var[identifier]:[type-annotation]
// var[identifier] = value
//var[identifier]

let b: boolean = false;
console.log(b);

let num: number = 10;

console.log(num);

let d: number = 0o123;
//string
let firstName: string = "gunjan";

//array
let aa: string[] = ["gunjan", "mimo"];
let ab: Array<string> = ["gunjan", "mimo"];

//tuple
let ac: [number, string];
//enum
const ad = 10;

enum fruit {
  apple = 1,
  banana,
  orange,
}
console.log(fruit);

let ag: any;
ag = "gunjan paul";

//object
let ah: object;

let myvar;
let myvar2: number = <string>myvar;
let myvar2: number = myvar as string;

//function
