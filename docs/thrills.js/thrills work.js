import { cartadd, addtoCart} from "../DATA/cartadd.js";
import { prodcts } from "../DATA/prodcts.js";




const die = document.querySelector('.bar');
const close = document.getElementById('close');
const nav = document.querySelector('.shc');
const cartItem =document.querySelector('.cart-item')
const cartmoblie =document.querySelector('.cart-itemMBli')
const cartRemove =document.querySelector('.Remove')
const cartTotla =document.querySelector('.cart-numb')

const shopDOM =document.querySelector('.content')
const boDy = document.querySelector('.product1')


die.addEventListener('click', () => {
  nav.classList.toggle("open")

});
close.addEventListener('click', () => {
  nav.classList.remove("open") 
});



boDy.addEventListener("click", (event)=>{
  event.preventDefault();
})


//upload the HTML to js


let prodctsHTML='';
 

prodcts.forEach((prodcts)=>{
  prodctsHTML+= 
  `<div class="content">
  <div class="con">
        <img src="${prodcts.image}">
        <div class="dir"> <span>${prodcts.nameofcompy}</span>
          <h5>${prodcts.prname}</h5>
          <div class="star">
          ${prodcts.rating}
          </div>
          <h4>₦${prodcts.price} </h4>
        </div>
        <a href="#" class="cart-addjs" data-prodct-id="${prodcts.id}">${prodcts.cart}</i></a>
      </div> 
      </div>   
      `; 
}) ;
shopDOM.innerHTML=prodctsHTML
//upload End

//make it interactive to cart

function updateCartQuantity(){
  let cartQuantity=0;

cartadd.forEach((item)=>{

  cartQuantity+=item.quantity;
});
cartItem.innerHTML=cartQuantity; 
cartmoblie.innerHTML=cartQuantity;
}

document.querySelectorAll('.cart-addjs')
.forEach((button)=>{
  button.addEventListener('click',()=>{
const productId = button.dataset.prodctId; 
  addtoCart(productId);
updateCartQuantity();


  });
});
//interactive to cart End