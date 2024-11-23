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
// let studentScore = [20, 45, 33, 98, 23];

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
// let person = {
//   name: "godbless",
//   isMarried: true,
//   age: 45,
//   email: "gb@gmail.com",
//   kids: null,
//   hobbies: ["coding", "robotics", "analytics", "ai"],
//   greet: function () {
//     return "Hello, my name is " + this.name;
//   },
// };

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

// let x = 5;

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

// Looping through arrays

// let myArr = ["Merlin", "Arthur", "Lancelot", "Gwaine", "Elion"];

// learn to loop using for and while loop

// myArr.push("Lyon", "Percieval");

// console.log(myArr);

// using the for loop
// for (let i = 0; i < myArr.length; i++) {
//   console.log(myArr[i]);
// }

// using the while loop

// let i = 0;
// while (i < myArr.length) {
//   console.log(myArr[i]);
//   i++;
// }

// // for of
// for (let i of myArr) {
//   console.log(i);
// }

// // for in
// for (let i in myArr) {
//   console.log(i);
//   // console.log(myArr[i]);
// }

// major difference between for in and for of
// for of (iterates a string)
// for in (iterates an object)

// let person = {
//   name: "Godbless",
//   isMarried: true,
//   age: 45,
//   email: "gb@gmail.com",
//   kids: null,
//   hobbies: ["coding", "robotics", "analytics", "ai"],
//   greet: function () {
//     return "Hello, my name is " + this.name;
//   },
// };

// for (let i in person) {
//   console.log(i + " - " + person[i]);
// }

// let firstName = "Godbless";

// for (let i of firstName) {
//   console.log(i);
// }

// foreach and map method

// myArr.forEach((name, i) => {
//   console.log(i + 1 + " - " + name);
// });

// myArr.map((name, i) => {
//   console.log(name, i);
// });

// functions

// regular and arrow functions

// regular function syntax
// function functionName(){
//   // codeblock
// }

// function greet(name) {
//   return "heyyy " + name;
// }

// const greetMe = greet("Lancelot");
// const greetMe2 = greet();

// console.log(greetMe);
// console.log(greetMe2);

// functions without paramenter
// function greet() {
//   return "Hello world";
// }

// const greeting = greet();

// console.log(greeting);

// function with parameter
// function greet(username) {
//   return "Welcome on board " + username;
// }

// const reg = greet("godbless");
// console.log(reg);

// // two params
// function greet(name, time) {
//   return "Hello " + name + " good " + time;
// }

// const greets = greet("godbless", "morining");
// console.log(greets);

// // default params value
// function greet(name = "godbless", time = "morning") {
//   return "Hello " + name + " good " + time;
// }

// const greets = greet("freeman", "evening");
// console.log(greets);

// arrow functions

// function greet() {
//   return "Hello world";
// }

// const greet = greet();

// console.log(greet);

// const greet = function () {
//   return "Hello";
// };

// console.log(greet());

// arrow functions
// let greet = () => "Hello world";

// arrow functions with params
// let greet = name => "Hello " + name;

// arrow functions with two params
// let greet = (name, time) => "Hello " + name + " good " + time;

// arrow functions  with default params
// let greet = (name = "godbless", time = "morning") =>
//   "Hello " + name + " good " + time;

// let greetMe = greet("freeman", "evening");

// console.log(greetMe);

// create a function that returns the sum of numbers

// function addNums(x, y) {
//   return x + y;
// }

// const add = addNums(3, 5);

// console.log(add);

// write a function that takes a number and retunrs
// all the even numbers between 0 and that number

// function getEvenNums(num) {
//   for (let i = 0; i < num; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
// }

// getEvenNums(20);

// function getEvenNums(num) {
//   let even = [];
//   for (let i = 0; i < num; i++) {
//     if (i % 2 == 0) {
//       even.push(i);
//     }
//   }
//   return even;
// }

// const even = getEvenNums(20);

// console.log(even);

// write a fuction that converts dollar to naira
// using conversion factor of 1dollar to 1600naira

// Local Vs Global scope

// local scoped variable
// function greet(myName) {
//   let time = "afternoon"; // local variable
//   return "Hello " + myName + " good " + time;
// }

// console.log(myName);

// global scoped variable

// let time = "afternoon"; //global variable

// function greet(myName) {
//   return "Hello " + myName + " good " + time;
// }

// console.log(time);
// console.log(greet("godbless"));

// x = 23;

// console.log(x);

// var x;

// let and const (block scoped)

// function greet(myName) {
//   var time = "afternoon"; // local variable
//   return "Hello " + myName + " good " + time;
// }

// console.log(time);

// function createGreeting(name) {
//   return function () {
//     console.log("Hello " + name + " good day!");
//   };
// }

// // createGreeting("godbless")();

// const greet = createGreeting("GB");

// greet();

// function outerFunc(outerVar) {
//   return function innerFunc(innerVar) {
//     console.log("outerVar " + outerVar);
//     console.log("innerVar " + innerVar);
//   };
// }

// const x = outerFunc("gb");
// x("freeman");

// recursive functions
// call back functions

// 1) convert naira to dollar
// function convertNariaToDollar(naira) {
//   let dollar = naira / 1600;
//   return dollar;
// }

// console.log(convertNariaToDollar(5000));

// 2) convert of kelvin to celcius

// k = c + 273; //formula
// c = k - 273; //formula

// function kelvinToCelcius(kelvin) {
//   let celcius = kelvin - 273;
//   return celcius;
// }

// console.log(kelvinToCelcius(373));

// ax^2 + bx + c = 0

// x = -b + or - sqrt(b^2 - 4ac) / 2a

// function quad(a, b, c) {
//   let d = b ** 2 - 4 * a * c;
//   let sqrtd = d ** 0.5;
//   let solOneNumerator = -b + sqrtd;
//   let solTwoNumerator = -b - sqrtd;
//   let sol1 = solOneNumerator / (2 * a);
//   let sol2 = solTwoNumerator / (2 * a);
//   console.log(sol1 + "," + sol2);
// }

// // solve x^2 - 3x + 2;

// quad(1, -3, 2);

// function greet(name = "gb", time = "morning") {
//   // let time = "morning";
//   return "Hello " + name + " good " + time;
// }

// console.log(greet("James"));

// // there are two ways
// 1) square bracket
// 2) array contructor function/method

// let myArr = ["Nk", "Gb"];

// // myArr.push("James");
// // myArr.push("Daniel");

// console.log(myArr);

// var myArr = new Array("gb", "fm", "lc");
// myArr.push("Nk", "Omj");
// myArr.push("James");
// var myArr = [];
// console.log(myArr);

// informations coming from a db or api are usually in the form of arrays
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// basic array methods
// push=> adds to the end of an array

// let myFruits = [];

// myFruits.push("mango", "apple", "banana");

// console.log(myFruits);

// pop=> removes from the end of an array

// myFruits.pop();
// myFruits.pop();

// console.log(myFruits);

// unshift=> adds to the begining of an array

// myFruits.unshift("pear", "watermelon");
// console.log(myFruits);

// shift=> removes from the begining of an array
// myFruits.shift();
// myFruits.shift();
// console.log(myFruits);

// let myFruits = ["apple", "banana", "cashew", "watermelon", "pear", "grape"];

// // console.log(myFruits);

// let slicedArr = myFruits.slice(1, 3); //(first and lastIndex-1)

// console.log(slicedArr);
// // console.log(myFruits);

// let splicedArr = myFruits.splice(1, 3); //(first and lastlength-1)

// console.log(splicedArr);

// // console.log(myFruits);

// myFruits.splice(2, 3);
// // splice can remove or add to any position in an array
// // 1) when its removing it takes two arugments
// // 2) when its adding it takes three arguments

// console.log(myFruits);

// question:
// 1) when you load the browser, it should show an alert (welcome, do you wish to buy from us today? (y/n))
// 2) when the user says no (it should thanks for visiting)
// 3) when the user says yes (it should take the user into the applicaion)
// 4) it shoud ask do you wish to add or display or quit (y/n)
// 5) if the user's reply is add
// 5) it should say enter a fruit you would like to add
// 6) if the user's reply is display
// 7) it should display all the fruits
// 8) if the user's reply is quit
// 9) it should say thanks for shopping with us today

// looping through an array

// for loop and while loop to loop through an array

// myFruits.forEach((fruit) => {
//   console.log(fruit);
// });

// myFruits.forEach(function (fruit) {
//   console.log(fruit);
// });

// myFruits.map((fruit) => {
//   console.log(fruit);
// });

// myFruits.map(function (fruit) {
//   console.log(fruit);
// });

// filtering an array using the for loop
// let result = [];
// for (let i = 0; i < myFruits.length; i++) {
//   if (myFruits[i] !== "banana") {
//     result.push(myFruits[i]);
//   }
// }

// console.log(result);

// filter method=> removes an element from an array
// let result = myFruits.filter((fruit) => fruit !== "banana");

// console.log(result);

// // reduce method=> adds all the elements of an array
// let scores = [60, 57, 99, 67];

// let total = scores.reduce((a, b) => a + b);
// let total = scores.reduce((a, b) => {
//   return a + b;
// });
// console.log(total);

// adding the elements of an array using for loop

// let acc = 0;

// for (let i = 0; i < scores.length; i++) {
//   // acc = acc + scores[i];
//   acc += scores[i];
// }

// console.log(acc);

// sort => arrange an array in ascending or descending order

// let asc = scores.sort((a, b) => a - b);
// console.log(asc);
// let des = scores.sort((a, b) => b - a);
// console.log(des);

// let myFruits = ["apple", "cashew", "Wallnut"];

// let sorted = scores.sort();
// console.log(sorted);

// let sorted = myFruits.sort();
// console.log(sorted);

// function functionName() {}

// let funct = () => {};

// let myScore = scores.find((x) => x === 99);
// let myScore = scores.findIndex((x) => x === 99);
// console.log(myScore);

// let multiDim = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// console.log(multiDim);

// // flat method=> reduces the dimension of an array
// let reducedDim = multiDim.flat();

// console.log(reducedDim);

// const myGoods = [
//   "mango",
//   "apple",
//   "banana",
//   "orange",
//   "sha type any fruit brother",
// ];

// const message = prompt(
//   "Welcome to my store my bro, Do you wish to buy from us today? (yes/no)"
// );

// if (message === "yes") {
//   const action = prompt(
//     "Do you wish to add, display, or quit? (add/display/quit)"
//   );

//   if (action === "add") {
//     const fruit = prompt("Enter a fruit you would like to add:");
//     myGoods.push(fruit);
//     alert(fruit + " has been added to your cart.");
//   } else if (action === "display") {
//     alert("Here are all the fruits we have: " + myGoods.join(", "));
//   } else if (action === "quit") {
//     alert("Thanks for shopping with us today!");
//   } else {
//     alert("Invalid.");
//   }
// } else if (message === "no") {
//   alert("Thanks for visiting!");
// } else {
//   alert("Invalid. Please reload the page and try again.");
// }

// let welcome = prompt("Welcome to AB mall. Do you want to shop with us? (Y/N)");
// welcome = welcome.toUpperCase();
// const shopping = ["Mango", "Banana"];
// let items;
// let moreFruit;

// if (welcome === "Y") {
//   let option;

//   do {
//     option = prompt("Do you want to add, display or exit? (a, d, q)");

//     if (option === "a") {
//       items = prompt("Enter a fruit you would like to add:");
//       shopping.push(items);

//       moreFruit = prompt(
//         "Do you want to add another fruit? (Y/N)"
//       ).toUpperCase();
//       while (moreFruit === "Y") {
//         items = prompt("Enter a fruit you would like to add:");
//         shopping.push(items);
//         moreFruit = prompt(
//           "Do you want to add another fruit? (Y/N)"
//         ).toUpperCase();
//       }
//     } else if (option === "d") {
//       alert("Your shopping list: " + shopping.join(", "));
//     } else if (option === "q") {
//       alert("Thanks for shopping with us today!");
//     } else {
//       alert("Invalid option, please choose a, d, or q.");
//     }
//   } while (option !== "q");
// } else if (welcome === "N") {
//   alert("Thanks for visiting!");
// } else {
//   alert("Invalid input. Please enter Y or N.");
// }

// Array to store the list of fruits
// let fruits = [];

// // Function to display the fruits
// function displayFruits() {
//   if (fruits.length > 0) {
//     alert(fruits.join(", "));
//   } else {
//     alert("No fruits in the list.");
//   }
// }

// // Welcome the user and ask if they wish to buy
// function welcomeUser() {
//   let response = prompt("Welcome, do you wish to buy from us today? (yes/no)");
//   if (response === "yes") {
//     enterApplication();
//   } else {
//     alert("Thanks for visiting!");
//     return;
//   }
// }

// // Main application logic
// function enterApplication() {
//   while (true) {
//     let action = prompt(
//       "Do you wish to add, display, or quit? (type 'add', 'display', or 'quit')"
//     );

//     if (action === "add") {
//       let fruit = prompt("Enter a fruit you would like to add:");
//       if (fruit) {
//         fruits.push(fruit);
//         alert(`${fruit} has been added to your list.`);
//       } else {
//         alert("No fruit entered.");
//       }
//     } else if (action === "display") {
//       displayFruits();
//     } else if (action === "quit") {
//       alert("Thanks for shopping with us today!");
//       break;
//     } else {
//       alert("Invalid option. Please type 'add', 'display', or 'quit'.");
//     }
//   }
// }

// // Start the script by welcoming the user
// welcomeUser();

// object
// let person = {
//   firstName: "Godbless",
//   lastName: "Ejovwo",
//   email: "ejovwogfreeman007@gmail.com",
//   age: 55,
//   isAdmin: true,
//   isMarried: false,
//   kids: null,
//   school: "pluralcode_academy",
//   courses: ["html", "css", "js"],
//   address: {
//     facebook: "ejovwogfreeman",
//     twitter: "ejovwogfreeman",
//     instagram: "ejovwogfreeman",
//   },
// };

// person.level = "advanced";
// person["remark"] = "excellent";
// person.isMarried = true;

// console.log(person);

// for(let i in person){
//   console.log(i, person[i]);
// }

// console.log(person.firstName);

// destructuring an object
// const { firstName, lastName } = person;

// console.log(lastName);

// const person = {
//   name: "Godbless",
//   email: "ej@gmail.com",
//   age: 55,
// };

// console.log(person);

// function Person(name, email, age) {
//   this.name = name;
//   this.email = email;
//   this.age = age;
//   this.greet = function () {
//     return `Hello, my name is ${this.name}`;
//   };
// }

// const person1 = new Person("godbless", "ej@gmail.com", 44);
// const person2 = new Person("freeman", "fm@gmail.com", 25);

// console.log(person2.greet());

// as set

// const mySet = new Set([1, 2, 3, 3, 3, 4, 5, 5]);

// console.log(mySet);

// set methods
// 1)add 2)delete 3) has 4) size 5) clear

// mySet.add(55);
// mySet.delete(3);
// console.log(mySet.has(509));
// console.log(mySet.size);
// mySet.clear();
// console.log(mySet.size);
// console.log(mySet);

// console.log(mySet);

// map

// const map = new Map([["key", "value"]]);

// const myMap = new Map([
//   ["firstName", "Godbless"],
//   ["lastName", "Ejovwo"],
// ]);

// console.log(myMap);

// myMap.set("email", "ej@gmail.com");

// console.log(myMap.get("firstName"));

// console.log(myMap.size);

// const myMap = new Map([
//   ["firstName", "Godbless"],
//   ["lastName", "Ejovwo"],
//   ["email", "ej@gmail.com"],
//   ["phone", "080777"],
//   ["gender", "Male"],
//   ["age", 55],
// ]);

// const myObj = {
//   firstName: "Godbless",
//   lastName: "Ejovwo",
//   email: "ej@gmail.com",
//   phone: "080777",
//   gender: "Male",
//   age: 55,
// };

// console.log(myMap.size);
// console.log(Object.keys(myObj).length);

// let myVar = [];
// console.log(Array.isArray(myVar));

// let myStr = "Pluralcode_Ademy";

// str methods
// length, charAt(), indexOf(), slice(), substr(), substring(), toUpperCase(), toLowerCase(), trim(), split(), replace().

// console.log(myStr.length);

// indexing a str

// // first char of every str
// console.log(myStr[0]);
// // last char of every str
// console.log(myStr[myStr.length - 1]);

// console.log(myStr.charAt(myStr.length - 1));

// console.log(myStr.indexOf("a"));
// console.log(myStr.lastIndexOf("a"));

// console.log(myStr.slice(6, 10));
// console.log(myStr.substring(6, 10));

// console.log(myStr.substr(6, 4));

// console.log(myStr.toUpperCase());
// console.log(myStr.toLowerCase());

// let myStr = " godbless ";
// let trimmedString = myStr.trim();

// console.log(myStr.length);
// console.log(trimmedString.length);

// split - converts a string to an array

// let myStr = "godbless";

// let myStr = "PluralCode_Academy";

// console.log(myStr.split("_"));

// let myStr = "PluralCode_Academy";

// let newStr = myStr.replace("PluralCode", "gbmedia");

// console.log(newStr);

// let str = "godbless";

// console.log(str.replace("god", "jesus"));

// function createUsernameFromEmail(email) {
//   let username = email.split("@")[0];
//   return username;
// }

// const username = createUsernameFromEmail("pluralcode.company@pluralcode.com");

// console.log(username);

// regular expression

// function createUsernameFromEmail(email) {
//   let username = email.split("@")[0];
//   return username;
// }

// const username = createUsernameFromEmail("pluralcode.company@pluralcode.com");

// console.log(username);

// /pattern/modifiers;

// // let text = "Visit Microsoft";
// let text =
//   "I love Microsoft because Microsoft is a great place to work and Microsoft has the best Engineers";

// // let result = text.replace(/microsoft/i, "Pluralcode");
// // let result = text.replace(/microsoft/gi, "Pluralcode");

// console.log(result);

// anchors
// /^a/ => match all a at the begining of a
// /a$/ => match all a at the end of a string

// character class
// \d => match digits (0 - 9)
// \w => any word (letter, underscore, digits)
// \s => match white space character
// . => match any character apart from a new line

// quantifiers
// * zero or more
// + one or more
// {n} exact n times

// let emailRegex = /^[W.-]+@[/

// let number = 834723984738.5748937;

// console.log(number.toString().replace(/B(?=(d{3})+(?!d))/g, ","));

// const str = new String("hell world");

// console.log(str);

// let date = new Date();

// let day = new Date().getDay();

// let month = new Date().getMonth();

// new Date().toDateString();

// let dayOfWeek = [
//   "sunday",
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
// ];

// console.log(month);
// console.log(new Date().toDateString());
// console.log(new Date().toLocaleDateString());
// console.log(new Date().toLocaleTimeString());

// console.log(new Date().getTime());

// console.log(new Date().getDate());

// console.log(
//   "posted on " +
//     new Date().toDateString() +
//     " | " +
//     new Date().toLocaleTimeString()
// );

// js math object

// console.log(Math.PI);

// console.log(Math.pow(2, 3));

// let num = 15.5;

// console.log(Math.round(num)); // round off number (either up or down)
// console.log(Math.floor(num)); // always round down
// console.log(Math.ceil(num)); // always round up

// console.log(Math.max(3, 9, 78));
// console.log(Math.min(3, 9, 78));

// console.log(Math.random());

// js DOM

// console.log(window);

// window.alert("Hello world");

// console.log(window.document.location.href);
// console.log(window.document.URL);

// DOM Selectors (they are grouped into two)
// single element selectors
// -> getElementById(), querySelector()
// multiple element selectors
// -> getElementsByClassName(), getElementsByTagName(), querySelectorAll()

// -> getElementById()

// let h1 = document.getElementById("h1");

// h1.style.color = "red";
// // h1.style.fontSize = "100px";
// h1.style.fontFamily = "sans-serif";
// h1.style.background = "green";
// h1.style.backgroundColor = "blue";
// // h1.innerText = "<span>Hello js plural code</span>";
// // h1.textContent = "<span>Hello GB</span>";
// // h1.innerHTML = "<h1>Hello with inner html</h1>";

// querySelector() -> select the first of its kind;

// let h1 = document.querySelector("h1");

// let firstClass = document.querySelector(".myclass");

// console.log(firstClass);

// let hello = document.querySelector("#hello");

// console.log(hello);

// h1.style.background = "red";

// console.log(h1);

// -> getElementsByTagName(),

// let h1Elements = document.getElementsByTagName("h1");

// for (let i = 0; i < h1Elements.length; i++) {
//   h1Elements[i].style.color = "red";
// }

// console.log(h1Elements);

// -> getElementsByClassName()

// let myClass = document.getElementsByClassName("myclass");

// for (let i = 0; i < myClass.length; i++) {
//   myClass[i].style.background = "yellow";
// }

// console.log(myClass);

// querySelectorAll();

// let headings = document.querySelectorAll("h1");

// console.log(headings);

// let myClass = document.querySelectorAll(".myclass");

// console.log(myClass);

// // old methods of dom selection
// getElementById(), getElementsByClassName(), getElementsByTagName();
// // new methods
// querySelector(), querySelectorAll()

// let h1 = document.getElementById("hello");

// console.log(h1.getAttribute("id"));

// h1.setAttribute("id", "hiii");

// console.log(h1.getAttribute("id"));

// let bulb = document.querySelector("img");

// bulb.setAttribute("src", "pic_bulboff.gif");

// console.log(bulb);

// on and off bulb project

// let bulb = document.querySelector("#bulb");

// console.log(bulb.getAttribute("src"));

// function onBulb() {
//   bulb.setAttribute("src", "pic_bulbon.gif");
// }

// function offBulb() {
//   bulb.setAttribute("src", "pic_bulboff.gif");
// }

// let firstHeading = document.querySelector(".myclass");

// console.log(firstHeading);

// // firstHeading.classList.add("newStyle");

// // console.log(firstHeading.getAttribute("class"));

// // firstHeading.classList.remove("myclass");
// // console.log(firstHeading.getAttribute("class"));

// firstHeading.addEventListener("click", () => {
//   firstHeading.classList.toggle("newStyle");
// });

// let h1 = document.createElement("h1");

// h1.textContent = "Hello JS";

// // document.write("<h1>hello world</h1>");

// let body = document.querySelector("body");

// let p = document.createElement("p");
// p.textContent = "Hello paragraph";

// body.appendChild(h1);
// body.appendChild(p);

// body.removeChild(h1);

// document.write("<h1>hello world</h1>");

// // using a function
// function darkMode() {
//   document.querySelector("body").style.background = "black";
// }

// // using event listeners
// document.getElementById("btn").addEventListener("click", () => {
//   document.querySelector("body").style.background = "black";
// });

//1) crate a counter using js
// plus, minus, increase by 5, decrease by 5, reset
//2) temperature converter from celcius to kelvin

// let div = document.querySelector(".hover");

// div.addEventListener("mouseenter", () => {
//   alert("hello world");
// });

// let btn = document.getElementById("btn");

// btn.addEventListener("click", (e) => console.log(e));

// let parent = document.querySelector(".parent");
// let child = document.querySelector(".child");

// parent.addEventListener("click", () => alert("Hello parent"));
// child.addEventListener("click", (e) => {
//   alert("Hello child");
//   e.stopPropagation();
// });

// let id1 = document.getElementById("id1");

// id1.addEventListener("click", () => alert(id1.textContent));

// event delegation
// let todoList = document.getElementById("todoList");
// todoList.addEventListener("click", (e) => {
//   if (e.target.tagName === "LI") {
//     alert(e.target.textContent);
//   }
// });

let btnGroup = document.querySelector(".btn-group");
let counter = document.querySelector(".counter");
let count = 0;

btnGroup.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    let action = e.target.getAttribute("data-action");
    if (action === "decreaseBy5") {
      count -= 5;
      counter.textContent = count;
    } else if (action === "decrease") {
      count--;
      counter.textContent = count;
    } else if (action === "reset") {
      counter = 0;
      counter.textContent = count;
    } else if (action === "increase") {
      count++;
      counter.textContent = count;
    } else if (action === "increaseBy5") {
      count += 5;
      counter.textContent = count;
    }
  }
});

localStorage.setItem("task", "task 1 value");

console.log(localStorage.getItem("task"));
