const page_url = document.URL;

let id = page_url.split("=")[1];

let form = document.querySelector("#form");
let title = document.querySelector("#title");
let body = document.querySelector("#body");

async function updateBlog(blog) {
  await fetch(`http://localhost:8000/api/blogs/${id}`, {
    method: "PUT",
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
  updateBlog(blog);
  window.location.href = "index.html";
});

async function getBlog() {
  const res = await fetch(`http://localhost:8000/api/blogs/${id}`);
  const blog = await res.json();
  title.value = blog.title;
  body.value = blog.body;
}

getBlog();
