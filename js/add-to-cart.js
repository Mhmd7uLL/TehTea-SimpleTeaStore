// Ambil elemen tombol dan data produk
const addToCartBtn = document.getElementById("add-to-cart-btn");

addToCartBtn.addEventListener("click", function () {
  const name = document.getElementById("tea-name").textContent;
  const price = document.getElementById("tea-price").textContent;
  const image = document.getElementById("tea-img").src;
  const quantity = document.getElementById("qty").value;

  // Buat objek produk
  const product = {
    name,
    price,
    image,
    quantity: parseInt(quantity)
  };

  // Ambil data keranjang yang sudah ada di localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Cek apakah produk sudah ada
  const existingProduct = cart.find((item) => item.name === name);
  if (existingProduct) {
    existingProduct.quantity += parseInt(quantity);
  } else {
    cart.push(product);
  }

  // Simpan kembali ke localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Notifikasi kecil
  alert(`${name} telah ditambahkan ke keranjang!`);

  // (Opsional) Redirect ke halaman cart
  // window.location.href = "cart.html";
});
