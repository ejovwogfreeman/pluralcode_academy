// todo list with local storage

let tasks = document.querySelector("#tasks");
let input = document.querySelector("#new-task-input");
let btn = document.querySelector("#new-task-submit");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (input.value === "") {
    return alert("Please enter a task!");
  }

  //   create task component
  let task = document.createElement("div");
  task.classList.add("task");

  //   create content component
  let content = document.createElement("div");
  content.classList.add("content");

  //   create actions component
  let actions = document.createElement("div");
  actions.classList.add("actions");

  let text = document.createElement("input");
  text.classList.add("text");
  text.value = input.value;
  text.setAttribute("type", "text");
  text.setAttribute("readonly", "readonly");
  text.setAttribute("value", text.value);

  let editBtn = document.createElement("button");
  editBtn.classList.add("edit");
  editBtn.textContent = "edit";

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.textContent = "delete";

  let doneBtn = document.createElement("button");
  doneBtn.classList.add("done");
  doneBtn.textContent = "done";

  //   append text to content
  content.appendChild(text);

  //   append the buttons to the actions
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);
  actions.appendChild(doneBtn);

  //   append content and actions to component
  task.appendChild(content);
  task.appendChild(actions);

  tasks.appendChild(task);

  input.value = "";

  saveData();

  //   delete a task
  deleteBtn.addEventListener("click", () => {
    tasks.removeChild(task);
  });

  //   mark task as done and undone
  doneBtn.addEventListener("click", () => {
    if (doneBtn.textContent === "done") {
      doneBtn.textContent = "undone";
      text.classList.add("strike");
    } else {
      doneBtn.textContent = "done";
      text.classList.remove("strike");
    }
  });

  //   edit a task
  editBtn.addEventListener("click", () => {
    if (editBtn.textContent === "edit") {
      editBtn.textContent = "save";
      text.removeAttribute("readonly");
    } else if (editBtn.textContent === "save" && text.value === "") {
      alert("Please enter a task");
    } else {
      editBtn.textContent = "edit";
      text.setAttribute("readonly", "readonly");
    }
  });
});

// continue from saving it to localstorage
function saveData() {
  let tasks = document.querySelectorAll(".task");

  const taskArr = [];

  //   for (let i = 0; i < tasks.length; i++) {
  //     let input = tasks[i].querySelector("input");
  //     console.log(input.value);
  //   }

  tasks.forEach((task) => {
    let input = task.querySelector("input");
    taskArr.push(input.value);
  });

  //   console.log(taskArr);

  localStorage.setItem("tasks", JSON.stringify(taskArr));
}
