const blogContainer = document.querySelector("#post-container");

const page_url = document.URL;

let id = page_url.split("=")[1];

// console.log(id);

async function getBlog() {
  const res = await fetch(`http://localhost:8000/api/blogs/${id}`);
  const blog = await res.json();

  let html = `
  <div>
      <h2>${blog.title}</h2>
      <p>${blog.body}</P>
      <a href='update.html?id=${blog._id}'>UPDATE</a>
  </div>
`;

  blogContainer.innerHTML = html;
}

getBlog();

async function deleteBlog() {
  await fetch(`http://localhost:8000/api/blogs/${id}`, {
    method: "DELETE",
  });

  window.location.href = "index.html";
}
