const produkter = document.querySelector(".product_list_container");

const produktArray = [
  {
    id: 1,
    name: "Rygsæk",
    brand: "Quechua",
    price: 999,
    image: "https://kea-alt-del.dk/t7/images/webp/640/1557.webp",
    soldOut: true,
  },
  {
    id: 2,
    name: "Træningsko",
    brand: "Kalenji",
    price: 649,
    image: "https://kea-alt-del.dk/t7/images/webp/640/1571.webp",
    soldOut: false,
    salePrice: 389,
  },
  {
    id: 3,
    name: "Fodbold",
    brand: "Puma",
    price: 299,
    image: "https://kea-alt-del.dk/t7/images/webp/640/1550.webp",
  },
  {
    id: 4,
    name: "Kasket",
    brand: "Puma",
    price: 179,
    image: "https://kea-alt-del.dk/t7/images/webp/640/1535.webp",
  },
];

produktArray.forEach((produkt) => {
  const produktElement = document.createElement("div");
  produktElement.classList.add("produktelement");
  produktElement.innerHTML = `
            <a href="produkt.html" class="product_card ${produkt.soldOut ? "soldout" : ""}">
                <img src="${produkt.image}" alt="" />
            <h3>${produkt.name}</h3>
            <p class="p1">${produkt.brand}</p>
            <p class="price"><span class="old_price">DKK ${produkt.price},-</span> ${produkt.salePrice ? "DKK " + produkt.salePrice + ",-" : ""}</p>
            <p class="${produkt.soldOut ? "soldout_tag" : "sale_tag"}">${produkt.soldOut ? "Udsolgt" : "-" + (100 - (produkt.salePrice / produkt.price) * 100).toFixed(0) + "%"}</p>
        </a>
    `;
  produkter.appendChild(produktElement);
});
