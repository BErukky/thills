const die = document.querySelector(".bar");
const close = document.getElementById("close");
const nav = document.querySelector(".shc");

const cartmoblie = document.querySelector(".cart-itemMBli");
const cartTotla = document.querySelector(".cart-numb");
const shopDOM = document.querySelector(".content");
const boDy = document.querySelector(".product1");

// preloader start
let preloader = document.querySelector("#preloader");
window.addEventListener("load", function () {
  preloader.classList.add("preloaded");
  setTimeout(function () {
    preloader.remove();
  }, 1500);
});
// preloader end

die.addEventListener("click", () => {
  nav.classList.toggle("open");
});
close.addEventListener("click", () => {
  nav.classList.remove("open");
});

boDy.addEventListener("click", (event) => {
  event.preventDefault();
});

//upload the HTML to js

//upload End

//make it interactive to cart

function updateCartQuantity() {
  let cartQuantity = 0;

  cartadd.forEach((item) => {
    cartQuantity += item.quantity;
  });
  cartItem.innerHTML = cartQuantity;
  cartmoblie.innerHTML = cartQuantity;
}

calulatecartQuatity();

document.querySelectorAll(".cart-addjs").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.prodctId;
    addtoCart(productId);
    updateCartQuantity();
  });
});
//interactive to cart End
