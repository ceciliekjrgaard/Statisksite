const categoryContainer = document.querySelector(".categories");

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((category) => {
      categoryContainer.innerHTML += `<li class="border"><a href="produktliste.html">${category.category}</a></li>`;
    });
  });
