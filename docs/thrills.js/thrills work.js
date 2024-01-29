const die = document.querySelector('.bar');
const close = document.getElementById('close');
const nav = document.querySelector('.shc');
const cartItem =document.querySelector('.cart-item')
const cartRemove =document.querySelector('.Remove')
const cartTotla =document.querySelector('.cart-numb')
const cartContenItrm =document.querySelector('.cart-cont')
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
        <a href="#">${prodcts.cart}</i></a>
      </div> 
      </div>   
      `; 
})
 console.log(prodctsHTML); 
shopDOM.innerHTML=prodctsHTML

