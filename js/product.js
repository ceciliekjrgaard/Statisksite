const params = new URLSearchParams(window.location.search);
// console.log(params);
const id = params.get("id");

const productContainer = document.querySelector(".product_list_container1");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = ` <div>
    <div><a href="produktliste.html?category=${data.category}" class="tilbageknap">Tilbage</a></div>
                <a href="product.html" class="product_card">
                  <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="" />
                  <h3>${data.articletype}</h3>
                  <p class="p1">${data.productdisplayname}</p>
                  <p class="price"><span>DKK ${data.price},-</span></p>
               
                </a>
              </div>
               <section class="productDetails">
          <h2 class="productName">${data.articletype}</h2>
          <div>
            <p class="articleType"><span class="bold">Brand:</span> ${data.brandname}</p>
            <p class="productCategory"><span class="bold">Kategori:</span> ${data.category}</p>
            <p class="productPrice"><span class="bold">Pris:</span> ${data.price},-</p>
             <p class="productPrice"><span class="bold">Ny pris:</span>${Math.ceil(data.price - (data.price * data.discount) / 100)},-</p>

          </div>
        </section>
        <div class="produktkort">
          <h2>KURV</h2>

          <p class="brand">${data.brandname} | ${data.usagetype}</p>

          <div class="valg">
            <label>Vælg en størrelse</label>
            <select>
              <option></option>
              <option></option>
              <option></option>
            </select>
          </div>
          <button>Tilføj til kurv</button>
          <button class="buyButton">Køb nu</button>
        </div>
              `;
  });

// console.log("productContainer");
