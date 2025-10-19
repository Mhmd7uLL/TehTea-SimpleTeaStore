const urlParams = new URLSearchParams(window.location.search);
const titlePage = document.getElementById("title-page");
const topik = urlParams.get("topik");

// TEA DETAILS //
const namaTeh = document.getElementById("tea-name");
const hargaTeh = document.getElementById("tea-price");
const gambarTeh = document.getElementById("tea-img");

// TOMBOL TEMPERATURE MINUMAN //
const tombol = document.querySelectorAll(".option-btn");
const hotBTN = document.getElementById("hot-btn");
const iceBTN = document.getElementById("ice-btn");
const normalBTN = document.getElementById("normal-btn");
const hargaADD = document.getElementById("add-price");

tombol.forEach((optionBTN) => {
  optionBTN.addEventListener("click", () => {
    tombol.forEach((btn) => btn.classList.remove("active"));
    optionBTN.classList.add("active");

    const pilihan = optionBTN.textContent.trim();
    let tambahan = 0;

    switch (pilihan) {
      case "Hot":
        tambahan = 0;
        hargaADD.textContent = "";
        break;
      case "Ice":
        tambahan = 2000;
        hargaADD.textContent = "+ 2.000 untuk es batu";
        break;
      case "Normal":
        tambahan = 0;
        hargaADD.textContent = "";
        break;
    }

    const total = hargaReal + tambahan;
    //  PERUBAHAN DARI INT total ke hargaTeh String  //
    hargaTeh.textContent = total.toLocaleString("id-ID");
  });
});

//  hargaReal di set 0 awalan  //
let hargaReal = 0;

switch (topik) {
  case "Matcha-Tea":
    titlePage.textContent = "Matcha Tea - TehTea";
    gambarTeh.src = "../src/popular-prod/matcha.png";
    namaTeh.textContent = "Matcha Tea";
    hargaReal = 25000;
    break;
  case "Sakura-Matcha-Tea":
    titlePage.textContent = "Sakura Matcha Tea Blend - TehTea";
    gambarTeh.src = "../src/featured-prod/sakura-matcha.jpeg";
    namaTeh.textContent = "Sakura Matcha Tea Blend";
    hargaReal = 35000;
    break;
  case "Lemon-Ginger-Tea":
    titlePage.textContent = "Lemon Ginger Tea - TehTea";
    gambarTeh.src = "../src/featured-prod/ginger-root.jpeg";
    namaTeh.textContent = "Lemon Ginger Tea";
    hargaReal = 18000;
    break;
  case "Rose-Oolong":
    titlePage.textContent = "Rose Oolong Tea - TehTea";
    gambarTeh.src = "../src/featured-prod/rose-oolong.png";
    namaTeh.textContent = "Rose Oolong Tea";
    hargaReal = 22000;
    break;
  case "peppermint-tea":
    titlePage.textContent = "Peppermint Tea - TehTea";
    gambarTeh.src = "../src/allprod/peppermint.png";
    namaTeh.textContent = "Peppermint Tea";
    hargaReal = 40000;
    break;
  case "jasmine-tea":
    titlePage.textContent = "Jasmine Tea - TehTea";
    gambarTeh.src = "../src/allprod/jasmine.png";
    namaTeh.textContent = "Jasmine Tea";
    hargaReal = 23000;
    break;
  case "assam-tea":
    titlePage.textContent = "Assam Tea - TehTea";
    gambarTeh.src = "../src/allprod/assam-tea.png";
    namaTeh.textContent = "Assam Tea";
    hargaReal = 32000;
    break;
  case "chamomile-tea":
    titlePage.textContent = "Chamomile Tea - TehTea";
    gambarTeh.src = "../src/allprod/chamomile.png";
    namaTeh.textContent = "Chamomile Tea";
    hargaReal = 45000;
    break;
  case "earl-grey-tea":
    titlePage.textContent = "Earl Grey Tea - TehTea";
    gambarTeh.src = "../src/allprod/earl-grey-tea.png";
    namaTeh.textContent = "Earl Grey Tea";
    hargaReal = 35000;
    break;
  case "americano":
    titlePage.textContent = "Arabica Coffee - TehTea";
    gambarTeh.src = "../src/allprod/americano.png";
    namaTeh.textContent = "Americano Coffee";
    hargaReal = 15000;
    break;
  case "cappucino":
    titlePage.textContent = "Cappucino Coffee - TehTea";
    gambarTeh.src = "../src/allprod/cappucino.png";
    namaTeh.textContent = "Cappucino Coffee";
    hargaReal = 25000;
    break;
  case "arabica":
    titlePage.textContent = "Arabica Coffee - TehTea";
    gambarTeh.src = "../src/allprod/arabica.png";
    namaTeh.textContent = "Arabica Coffee";
    hargaReal = 35000;
    break;
}

// perubahan dari tipe data INT hargaReal ke hargaTeh String // 
hargaTeh.textContent = hargaReal.toLocaleString("id-ID");

// PLUS MINUS QUANTITY //
const quantityInput = document.getElementById("qty");
function tambahQuantity() {
  quantityInput.value = parseInt(quantityInput.value) + 1;
}

function kurangQuantity() {
  let currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  } else {
    quantityInput.value = 1;
  }
}
