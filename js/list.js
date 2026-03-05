// if () {
//   console.log("if block");
// } else {
//   console.log("else block");
// }

"use strict";

const produkter = document.querySelector(".product_list_container");
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const productContainer = document.querySelector(".product_list_container1");

fetch(`https://kea-alt-del.dk/t7/api/products/?category=${category}&limit=100`)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((produkt) => {
      const produktElement = document.createElement("div");
      produktElement.classList.add("produkt_card");

      //   if (produkt.soldout) {
      //     console.log("product status: sold out");
      //   } else {
      //     console.log("product status: available");
      //   }

      // product.soldout
      // ? console.log("product status: sold out")
      // : console.log("product status: available");

      //   produktElement.classList.add("product_list_container");
      produktElement.innerHTML += `
        <div>
          <a href="produkt.html?id=${produkt.id}" class="product_card" ${produkt.soldout ? `soldout` : ""}>
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp" alt="" />
            <h3>${produkt.articletype}</h3>
            <p class="p1">${produkt.category}</p>
            <p class="price"><span>DKK ${produkt.price},-</span></p>
            ${produkt.soldout ? "<span class='soldout_tag'>Sold out</span>" : ""}
           ${produkt.discount ? `<span class='discount'>On sale!</span>` : ""}

${produkt.discount ? `<p>Now <span>${Math.ceil(produkt.price - (produkt.price * produkt.discount) / 100)},-</span></p>` : ""}

            
          </a>
        </div>
    `;
      produkter.appendChild(produktElement);
    });
  });
