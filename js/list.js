const produkter = document.querySelector(".product_list_container");
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const productContainer = document.querySelector(".product_list_container1");

const produktElement = document.createElement("div");
fetch(`https://kea-alt-del.dk/t7/api/products/?category=${category}&limit=100`)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((produkt) => {
      produktElement.classList.add("product_list_container");
      produktElement.innerHTML += `
        <div>
          <a href="produkt.html?id=${produkt.id}" class="product_card soldout">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp" alt="" />
            <h3>${produkt.articletype}</h3>
            <p class="p1">${produkt.category}</p>
            <p class="price"><span class="old_price">DKK ${produkt.price},-</span></p>
            <p class="soldout_tag">${produkt.soldout}</p>
          </a>
        </div>
    `;
      produkter.appendChild(produktElement);
    });
  });
