//////////////////////////////////
/////saturday class 23th nov//////
//////////////////////////////////

// synchronous code

// console.log('Hello')
// console.log('world')
// console.log('again')

// asynchrouns

// setTimeout(()=> {
//     console.log('world');
// }, 1000)
// console.log('Hello')
// console.log('again')

// setTimeout(()=>{
//     console.log(3);
//     setTimeout(()=> {
//         console.log(2);
//         setTimeout(()=> {
//             console.log(1)
//         },1000)
//     },1000)
// }, 1000)

// callbacks

// function fetchData(callback){
//     setTimeout(()=> {
//         callback('data loaded')
//     }, 1000)
// }

// function callback(x){
//     console.log(x)
// }

// const callback = (x)=> {
//     console.log(x)
// }

// const callback = (x)=> console.log(x);

// fetchData(callback);

// fetchData((x)=>console.log(x))

// function getMe(){
//     return 'get Me';
// }

// function get(){
//     return getMe();
// }

// console.log(get())

// const fetchData = new Promise((resolve, reject)=> {
//     setTimeout(()=> resolve('data resoled'), 1000);
// });

// fetchData.then((data)=> console.log(data)).catch((error)=> console.log(error))

// async function fetchData(){
//     try{
//         const data = await new Promise((resolve, reject)=> {
//             setTimeout(()=> resolve('data resolved'),1000)
//         })
//         console.log(data);
//     }catch(error){
//         console.log(error)
//     }
// }

// fetchData();

// async function fetchData(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const data = res.json();
//     console.log(data)
// }

// fetchData();

// const fetchData = async () => {
//  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//  const data = await res.json();
//  console.log(data)
// }

// fetchData()

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => console.log(json));

////////////////////////////////
/////sunday class 24th nov//////
////////////////////////////////

// const posts = [
//   { title: "post one", body: "Hey first post" },
//   { title: "post two", body: "Hey second post" },
// ];

// function getPosts() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post) => {
//       output += `
//               <li>${post.title}</li>
//           `;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createPost(post) {
//   setTimeout(() => {
//     posts.push(post);
//   }, 2000);
// }

// getPosts();

// createPost({ title: "post three", body: "Hey third post" });

// // using call backs
// function createPost(post, callback) {
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// createPost({ title: "post three", body: "Hey post three" }, getPosts);

// AJAX -> Asynchrounous Javascript and XML

// function getData() {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
//   xhr.onload = () => {
//     if (xhr.status === 200) {
//       console.log(JSON.parse(xhr.responseText));
//     } else {
//       console.log(xhr.statusText);
//     }
//   };
//   xhr.onerror = () => console.log("an error occured");
//   xhr.send();
// }

// getData();

// JSON.stringinfy => converts javascript objects to json
// JSON.parse => converts json to javascript objects

// then and res method
// function fetchData() {
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// fetchData();

// async and await method

// async function fetchData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await res.json();
//   console.log(data);
// }

// fetchData();

// CRUD (Create Read Update and Delete)
// common request methds are => POST, GET, PUT OR PATH, DELETE

// // POST (Create)

// function postData() {
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       title: "new todo from pluralcode class",
//       body: "todo body",
//     }),
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

// postData();

// // GET (Read)

// function fetchData() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// fetchData();

// // PUT (Update)

// function updateData() {
//   fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "PATCH",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ title: "updated title" }),
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

// updateData();

// // DELETE (Delete)

// function deleteData() {
//   fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "DELETE",
//   }).then(() => console.log("post deleted successfully"));
// }

// deleteData();

// POST (Create)

// let url = "https://jsonplaceholder.typicode.com/posts";
// let data = {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     title: "new todo from pluralcode class",
//     body: "todo body",
//   }),
// };

// function postData() {
//   fetch(`${url}`, data)
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

// postData();

// OOP (Object Oriented Programing)

// const person = {
//   name: "godbless",
//   surname: "ejovwo",
//   email: "ej@gmail.com",
//   isAdmin: true,
//   teach() {
//     return "I like teaching or so";
//   },
//   greet() {
//     return "Hello my name is " + this.name;
//   },
// };

// console.log(person.greet());

function Person(name, surname, email) {
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.greet = function () {
    return "Hello my name is " + this.name;
  };
}

const person1 = new Person("godbless", "ejovwo", "ej@gmail.com");
const person2 = new Person("freeman", "morgan", "freeman@gmail.com");
console.log(person2);
