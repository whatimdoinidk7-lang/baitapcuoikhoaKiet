let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  let html = "";
  let total = 0;

  cart.forEach((item, index) => {
    let sum = item.price * item.quantity;
    total += sum;

    html += `
      <div class="cart-item">
        <div style="display:flex;align-items:center;gap:10px;">
            <img src="${item.image}">
            <span>${item.title}</span>
        </div>

        <p>${item.price}$</p>

        <div class="quantity">
            <button onclick="decrease(${index})">-</button>
            <span>${item.quantity}</span>
            <button onclick="increase(${index})">+</button>
        </div>

        <p>${sum}$</p>

        <button onclick="removeItem(${index})">X</button>
        
      </div>
    `;
  });

  document.getElementById("cartItems").innerHTML = html;
  document.getElementById("totalPrice").innerText = "Tổng: " + total + "$";
}

// tăng giảm
function increase(i) {
  cart[i].quantity++;
  save();
}

function decrease(i) {
  if (cart[i].quantity > 1) {
    cart[i].quantity--;
  }
  save();
}

// xoá
function removeItem(i) {
  cart.splice(i, 1);
  save();
}

// lưu
function save() {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// load
renderCart();

