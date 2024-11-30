let form = document.querySelector("form");
let textInput = document.querySelector("#textInput");
let todos = document.querySelector(".todos");
let msg = document.querySelector(".msg");
let todoArr = [];

document.addEventListener("DOMContentLoaded", () => {
  const todos = localStorage.getItem("todos");
  let todoArr = todos ? JSON.parse(todos) : [];
  showTodo(todoArr);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let id = Math.random();
  let text = textInput.value;
  let date =
    new Date().toDateString() + " | " + new Date().toLocaleTimeString();
  const todo = {
    id,
    text,
    date,
  };

  addTodo(todo);

  showTodo(todoArr);

  form.reset();
});

function addTodo(singleTodo) {
  todoArr.unshift(singleTodo);
  localStorage.setItem("todos", JSON.stringify(todoArr));
}

function showTodo(arr) {
  let html = "";
  arr.forEach((todo) => {
    html += `
        <div class='todo'>
            <section>
                <h2>${todo.text}</h2>
                <small>${todo.date}</small>
            </section>
            <button onclick=deleteTodo(${todo.id})>DELETE</button>
        </div>
    `;
  });
  todos.innerHTML = html;
}

function deleteTodo(id) {
  todoArr = todoArr.filter((todo) => todo.id !== id);
  localStorage.setItem("todos", JSON.stringify(todoArr));
  showTodo(todoArr);
}
