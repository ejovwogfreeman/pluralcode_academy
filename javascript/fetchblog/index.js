let container = document.querySelector("#container");

async function getBlogs() {
  const res = await fetch("http://localhost:8000/api/blogs");
  const blogs = await res.json();

  let html = "";

  blogs.forEach((blog) => {
    html += `
        <div class='blogs'>
            <h2>${blog.title}</h2>
            <p>${blog.body.slice(0, 100)}...
            <a href='details.html?id=${blog._id}'>READ MORE</a></p>
        </div>
    `;
  });

  container.innerHTML = html;
}

getBlogs();

let form = document.querySelector("#searchform");
let searchInput = document.querySelector("#searchInput");
let items = container.getElementsByTagName("div");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  searchInput.addEventListener("keyup", (e) => {
    const query = e.target.value.toLowerCase();

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if (item.innerHTML.toLocaleLowerCase().indexOf(query) > -1) {
        item.display = "";
      } else {
        item.style.display = "none";
      }
    }
  });
});
