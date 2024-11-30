// // object literals

// const book1 = {
//   title: "Book 1",
//   author: "GB",
//   date: "2024",
//   getBookSummary: function () {
//     return `${this.title} is written by ${this.author} in ${this.date}`;
//   },
// };

// const book2 = {
//   title: "Book 1",
//   author: "GB",
//   date: "2024",
//   getBookSummary: function () {
//     return `${this.title} is written by ${this.author} in ${this.date}`;
//   },
// };

// console.log(book1);
// console.log(book2.getBookSummary());

// constructor functions

// function Book(title, author, date) {
//   this.title = title;
//   this.author = author;
//   this.date = date;

//   this.getBookSummary = function () {
//     return `${this.title} is written by ${this.author} in ${this.date}`;
//   };
// }

// const book1 = new Book("book 1", "gb", 2025);
// const book2 = new Book("book 2", "freeman", 2026);
// // console.log(book1.getBookSummary());
// // console.log(book2.getBookSummary());

// console.log(book1);

// prototypes

// function Book(title, author, date) {
//   this.title = title;
//   this.author = author;
//   this.date = date;
// }

// Book.prototype.getBookSummary = function () {
//   return `${this.title} is written by ${this.author} in ${this.date}`;
// };

// Book.prototype.onSale = function () {
//   return `${this.title} is still on sale`;
// };

// const book1 = new Book("book 1", "gb", 2025);
// const book2 = new Book("book 2", "freeman", 2026);
// // console.log(book1.getBookSummary());
// // console.log(book2.getBookSummary());

// console.log(book1.onSale());

// es6 classes

// class Book {
//   constructor(title, author, date) {
//     this.title = title;
//     this.author = author;
//     this.date = date;
//   }
//   //   getBookSUmmary = function () {
//   //     return `${this.title} is written by ${this.author} in ${this.date}`;
//   //   };
// }

// Book.prototype.getBookSUmmary = function () {
//   return `${this.title} is written by ${this.author} in ${this.date}`;
// };

// const book1 = new Book("book 1", "lancelot", 2029);

// console.log(book1);

// inheritance

// // creating and animal object
// function Animal(name) {
//   this.name = name;
// }

// // creating animal prototype
// Animal.prototype.speak = function () {
//   return `${this.name} makes a sound`;
// };

// // creating a dog object that inherits from the animal object
// function Dog(name, breed) {
//   Animal.call(this, name);
//   this.breed = breed;
// }

// // set prototype chain
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// // NB: prototype chain should be set before creating a dog prototype to avoid error

// // creating a dog prototype
// Dog.prototype.bark = function () {
//   return `${this.name} makes a sound called barking`;
// };

// // instantiating an animal object
// const animal = new Animal("bingo");

// // instantiating a dog object
// const dog = new Dog("bingo", "police dog");

// // console.log(animal.speak());

// console.log(dog.bark());
// console.log(dog.speak());

// inheritance using ES6 classes

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   // instance method/function
//   speak() {
//     return `${this.name} makes a sound`;
//   }

//   //   static methods (belong to the class itself and not instances)
//   static test() {
//     return `${this.name} makes a sound`;
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }

//   speak() {
//     return `${this.name} barks`;
//   }
// }

// // instantiating an animal object
// const animal = new Animal("bird");
// // console.log(animal.speak());

// // const dog = new Dog("bingo", "police dog");

// console.log(Animal.test());

// ordinary export
import greet, { randomId, alpha } from "./random.js";
// import { radnomId } from "./random.js";
// import { alpha } from "./random.js";
// import { radnomId as r } from "./random.js";

// export default
// import radnomId from "./random.js";

console.log(greet());
console.log(randomId());
console.log(alpha());
