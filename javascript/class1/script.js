// alert("Hello world");

// variables (containers for storing values)
// there are 3 ways to declare variable:
// 1) var
// 2) let
// 3) const

// var name = "godbless";

// console.log(name);

// console.log("godbless");
// console.log("godbless");
// console.log("godbless");
// console.log("godbless");
// console.log("godbless");
// console.log("godbless");
// console.log("godbless");
// console.log("godbless");
// console.log("godbless");
// console.log("godbless");

// var name = "godlbess";

// name = "freeman";

// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);

// for (let i = 1; i <= 100; i++) {
//   console.log(i, name);
// }

// var (old way of declaring variable)
// 1) it can be initialized
// 2) it can be reassigned
// 3) it can be redeclared

// var myName; // initializing without a value

// myName = "freeman"; //reassignment

// console.log(myName);

// var myName = "godbless"; // initializing with a value

// var myName = "freeman"; // redeclaring

// console.log(myName);

// let and const (introduced in es6)
// let
// 1) it can be initialized
// 2) it can be reassigned
// 3) it cannot be redeclared

// let myName; //initializing without a value

// myName = "godbless";

// console.log(myName);

// let myName = "godlbess"; //initializing with a value

// console.log(myName);

// let myName = "godbless";

// myName = "freeman"; //reassignent

// console.log(myName);

// let myName = "godbless";

// let myName = "freeman";

// const
// 1) it cannot be initialized without a value;
// 2) it cannot be reassigned
// 3) it cannot be redeclared

// const myName; //cannot intialize without a value

// const myName = "godbless"; //can be initialzed with a value

// console.log(myName);

// const myName = "godbless";

// myName = "freeman"; //cannot be reassigned

// const myName = "godbless";

// const myName = "freeman"; //cannot be redeclared

// let and const

// js data types
// they are grouped into two(2)
// 1) primitive data type
// 2) reference data type

// 1) primitive data types: these are data types
// that are assigned directly to memory (e.g string, numbers, boolean, null and undefined)

// 2) reference data types: these are data types that
// holds other data types, they are seen or used as a resource (e.g are array and objects)

// string
// a string is a sequence of characters thats enclosed in single or double quote

// string examples
// let myNumStr = "23";
// let myStr = "Godbless";
// let greet = " How are you?";

// string concatenation: it means to join strings together using + symbol
let myName = "Godbless";
let myAge = 75;

// console.log(
//   "Hello, my name is " + myName + " and I am " + myAge + " years old."
// );

// console.log('she screamed "ahhhhh" when she saw the snake');

// template literal (backticks)

// console.log(`freeman's daugther screamed "whooooaaaa" when she saw the snake`);
// console.log(`Hello, my name is  ${myName}  and I am  ${myAge} years old.`);

let greet = `Hello, my name is  ${myName}  and I am  ${myAge} years old.`;

document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("greet").textContent = greet;
});

document.getElementById("dark-mode").addEventListener("click", () => {
  document.getElementById("body").style.background = "black";
  document.getElementById("body").style.color = "white";
});
