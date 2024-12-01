let form = document.querySelector("#form");
let title = document.querySelector("#title");
let body = document.querySelector("#body");

async function postBlog(blog) {
  await fetch("http://localhost:8000/api/blogs", {
    method: "POST",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify(blog),
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let blog = {
    title: title.value,
    body: body.value,
  };
  postBlog(blog);
  window.location.href = "index.html";
});
