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
// let myName = "Godbless";
// let myAge = 75;

// console.log(
//   "Hello, my name is " + myName + " and I am " + myAge + " years old."
// );

// console.log('she screamed "ahhhhh" when she saw the snake');

// template literal (backticks)

// console.log(`freeman's daugther screamed "whooooaaaa" when she saw the snake`);
// console.log(`Hello, my name is  ${myName}  and I am  ${myAge} years old.`);

// let greet = `Hello, my name is  ${myName}  and I am  ${myAge} years old.`;

// document.getElementById("btn").addEventListener("click", () => {
//   document.getElementById("greet").textContent = greet;
// });

// document.getElementById("dark-mode").addEventListener("click", () => {
//   document.getElementById("body").style.background = "black";
//   document.getElementById("body").style.color = "white";
// });

// accessing the elements of a string:

// let myStr = "abcdef";

// console.log(myStr[5]);

// the first index of every string is 0
// the last index of every string is str.length-1
// every first element of a string has an idex of 0;
// every last element of a string has an idex of str.length-1;

// console.log(myStr[myStr.length - 1]);

// number
// let x = 20;

// let y = 60;

// // addition, subtraction, multitplication, division, modulus, power
// let z;
// z = y + x;
// z = y - x;
// z = y * x;
// z = y / x;
// z = y % x;
// z = (x + y) ** 2;
// console.log(z);

// boolean
// let isMarried = true;

// if (isMarried) {
//   console.log("you can have children");
// } else {
//   console.log("you cant have any yet");
// }

// let age = 17;

// if (age > 18) {
//   console.log("you are welcome to the party");
// } else {
//   console.log("too young, go home!");
// }

// null
// let children = null;

// console.log(children);

// // undefined
// let myBestFriend;

// console.log(myBestFriend);

// reference data types
// 1) arrays
// 2) objects

// array
let studentScore = [20, 45, 33, 98, 23];

// console.log(studentScore[studentScore.length - 1]);

// not adivsable to use array to hold multiple values of dirrent data types
// let myArr = [
//   "godbless",
//   true,
//   45,
//   "gb@gmail.com",
//   null,
//   ["coding", "robotics", "analysis"],
// ];

// use objects
// adivsable to use objects to hold multiple values of dirrent data types
let person = {
  name: "godbless",
  isMarried: true,
  age: 45,
  email: "gb@gmail.com",
  kids: null,
  hobbies: ["coding", "robotics", "analytics", "ai"],
  greet: function () {
    return "Hello, my name is " + this.name;
  },
};

// // accessing array elements (use indexing)
// // first score
// console.log(studentScore[0]);

// accessing object elements (use indexing or dot method)

// console.log(typeof person);
// console.log(typeof studentScore);

// console.log(person["hobbies"][0]);

// console.log(person.hobbies);

// console.log(person.hobbies[hobbies.length - 1]);
// console.log(person.hobbies[person.hobbies.length - 1]);

// console.log(person.greet());

// functions: are block of codes that performs a task when called
// syntax
// function functionName(){
//   return
// }

// function greet() {
//   console.log("hello world");
// }

// greet();

// a function is supposed to have a return statement:

// the return statement does two things:
// 1) it stores the value in memory of the function
// 2) it blocks or stops the code from running

// function greet() {
//   return "Hello world";
// }

// console.log(greet());

// functions with params and args

// function greet(name, time) {
//   return "Hello " + name + ", good " + time;
// }

// console.log(greet("Daniel", "morning"));
// console.log(greet("Nkiruka", "evening"));

// function greet() {
//   let name = "daniel";
//   return "Hello " + name;
// }

// console.log(greet());

// task: write a function that returns the
// sum or addition of any two numbers

// function sum(x, y) {
//   return x + y;
// }

// console.log(sum(4, 5));

// task: write a function that calculates the
// area of a circle of any given radius
// a = pi * (radius)**2

// bidmas => bracket index division multiplication addition subtraction

// function calcArea(radius) {
//   let pi = 3.142;
//   return pi * radius ** 2;
// }

// console.log(calcArea(2));

// prompt and alert

// let name = prompt("what is your name?");
// alert(name + " you are welcome");

// function calcArea(r) {
//   let pi = 3.142;
//   return pi * r ** 2;
// }

// alert("Welcome to my area calculator app");
// let radius = prompt("please enter a radius");
// alert(
//   "The area of a circle whose radius is " + radius + " is " + calcArea(radius)
// );

// operators:
// type operator
// arithmetic operators
// assignment operators
// comparison operators
// logica operators

// assignment operators

// let varName = "something";

// console.log(varName);

let x = 5;

// let z = x + 3; //correct for algebra and js

// x = x + 3; //correct for js alone

// x += 3; //correct for js alone
// x -= 3; //correct for js alone
// x *= 3; //correct for js alone
// x /= 3; //correct for js alone
// x %= 3; //correct for js alone
// x **= 3; //correct for js alone

// console.log(x);

// let age = 18;

// if (age == "18") {
//   console.log("welcome to the party");
// } else {
//   console.log("too young, go home!");
// }

// let password = prompt("enter your password");

// if (password.length < 8) {
//   console.log("your password is too short");
// } else {
//   console.log("passed, welcome to the app!");
// }

// logical operators: combines two or more comparison operators
// logical and (&&): returns true only when all the statents are true
// let name = "godbless";
// console.log(5 > 3 && name.length == 8 && 20 > 60);
// Logical or (||): retuns true if one of the statments are true
// console.log(5 > 3 || name.length > 8 || 20 > 60);

// let username = prompt("enter your username");
// let password = prompt("enter your password");

// if (!username || !password) {
//   console.log("no info to show");
// } else {
//   console.log("welcome " + username);
// }

// if, else if, else
// if statement syntax
// if (condition) {
//   codeblock;
// }
// let age = 8;
// if
// if (age == 18) {
//   console.log("welcome to the party");
// }

// if else
// if (age == 18) {
//   console.log("welcome to the party");
// } else {
//   console.log("too young, go home!");
// }

// if else if and else
// if (age >= 18) {
//   console.log("welcome to the party");
// } else if (age >= 16) {
//   console.log("go to teenage party");
// } else if (age >= 10) {
//   console.log("go to children party");
// } else {
//   console.log("go to bed");
// }

// let color = "pink";

// if (color === "blue") {
//   console.log("your color is blue");
// } else if (color === "red") {
//   console.log("your color is red");
// } else if (color === "green") {
//   console.log("your color is green");
// } else {
//   console.log("does not match");
// }

// ternary operator

// ? :

// let y = 6;

// if (y > 3) {
//   console.log("y is greater than 3");
// } else {
//   console.log("not true for that");
// }

// using a ternary operator
// console.log(y > 3 ? "y is greater than 3" : "not true for that");

// let color = "blue";
// switch (color) {
//   case "blue":
//     console.log("your color is blue");
//     break;
//   case "red":
//     console.log("your color is red");
//     break;
//   case "green":
//     console.log("your color is green");
//     break;
//   default:
//     console.log("does not match");
//     break;
// }

// for while do while loop
// for loop syntax:
// for (condition){
//   codeblock;
// }
// for (initializer; boundary; increment){
//   codeblock;
// }

// for (let i = 0; i <= 20; i++) {
//   console.log(i);
// }

// while loop:
// while loop syntax:
// while (condition){
//   codeblock;
//   increment;
// }

// let i = 0;

// while (i <= 20) {
//   console.log(i);
//   i++;
// }

// do while loop:
// syntax
// do {} while (condition);

// let i = 7;

// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// for (let i = 1; i <= 10; i++) {
//   if (i == 7) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i == 7) {
//     continue;
//   }
//   console.log(i);
// }

// even numbers
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }

// odd numbers
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }
