//  lưu toàn bộ sản phẩm
let allProducts = [];

//  Lấy API
async function fetchProducts() {
  try {
    let res = await fetch("https://api.escuelajs.co/api/v1/products");
    let data = await res.json();

    allProducts = data; // ✅ FIX ở đây

    renderProducts(allProducts);
  } catch (err) {
    console.error("Lỗi API:", err);
  }
}

//  Render UI
// function renderProducts(list) {
//   let html = "";

//   list.forEach(product => {
//     html += `
//       <div class="col-md-3 col-sm-6">
//         <div class="product-card">
//           <img src="${product.images[0]}" style="width:100%">
          
//           <h5>${product.title}</h5>
//           <p class="price">${product.price}$</p>
//           <div class="btn-group">
//             <button onclick="addToCart(${product.id})">
//               Thêm vào giỏ
//             </button>

//             <button class="buy-now" onclick="buyNow(${product.id})">
//               Mua ngay
//             </button>
//           </div>
//         </div>
//       </div>
//     `;
//   });

//   document.getElementById("productList").innerHTML = html;
// }

function renderProducts(list) {
  let html = "";

  list.forEach(product => {
    let img = product.images && product.images.length > 0
      ? product.images[0]
      : "https://via.placeholder.com/300";

    html += `
      <div class="col-md-3 col-sm-6">
        <div class="product-card">
          <img src="${img}" style="width:100%" 
               onerror="this.src='https://via.placeholder.com/300'">
          
          <h5>${product.title}</h5>
          <p class="price">${product.price}$</p>

          <div class="btn-group">
            <button onclick="addToCart(${product.id})">
              Thêm vào giỏ
            </button>

            <button class="buy-now" onclick="buyNow(${product.id})">
              Mua ngay
            </button>
          </div>
        </div>
      </div>
    `;
  });

  document.getElementById("productList").innerHTML = html;
}

//  SEARCH
let searchInput = document.getElementById("search");

searchInput.addEventListener("input", function () {
  let keyword = searchInput.value.toLowerCase();

  let filtered = allProducts.filter(p =>
    p.title.toLowerCase().includes(keyword)
  );

  renderProducts(filtered);
});

//  ADD TO CART
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let product = allProducts.find(p => p.id === id);

  let existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Đã thêm vào giỏ!");

  function buyNow(id) {
  let product = allProducts.find(p => p.id === id);

  let cart = [
    {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      quantity: 1
    }
  ];

  localStorage.setItem("cart", JSON.stringify(cart));

  // alert("Chuyển sang thanh toán!");

  buyNow.onclick = function(){
    window.location.href = "product-details.html";
}
  
  
}
}

//  LOAD PAGE
fetchProducts();