document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const totalMrp = document.getElementById("total-mrp");
  const finalTotal = document.getElementById("final-total");

  cartCount.textContent = cart.length;

  let total = 0;

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("cart-item");

    // 🔥 Pastikan harga jadi angka murni (hapus semua selain digit)
    const priceNumber = parseInt(String(item.price).replace(/[^\d]/g, "")) || 0;

    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="flex-grow-1">
        <h5>${item.name}</h5>
        <small>Estimated delivery: 1 hour after checkout</small>
      </div>
      <div class="text-end">
        <p class="fw-bold mb-1">Rp ${priceNumber.toLocaleString("id-ID")}</p>
        <div class="quantity-control d-flex align-items-center justify-content-end gap-2">
          <button class="decrease">−</button>
          <span class="fw-bold">${item.quantity}</span>
          <button class="increase">+</button>
        </div>
        <button class="btn btn-link text-danger p-0 mt-1 remove-btn">Remove</button>
      </div>
    `;

    cartContainer.appendChild(div);

    total += priceNumber * item.quantity;

    // Tombol increase/decrease
    div.querySelector(".increase").addEventListener("click", () => {
      item.quantity++;
      localStorage.setItem("cart", JSON.stringify(cart));
      location.reload();
    });

    div.querySelector(".decrease").addEventListener("click", () => {
      if (item.quantity > 1) item.quantity--;
      localStorage.setItem("cart", JSON.stringify(cart));
      location.reload();
    });

    // Tombol remove
    div.querySelector(".remove-btn").addEventListener("click", () => {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      location.reload();
    });
  });

  totalMrp.textContent = "Rp " + total.toLocaleString("id-ID");
  finalTotal.textContent = "Rp " + total.toLocaleString("id-ID");
});
