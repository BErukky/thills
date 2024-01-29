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
        <a href="#" class="cart-addjs" data-prodct-name="${prodcts.prname}">${prodcts.cart}</i></a>
      </div> 
      </div>   
      `; 
}) ;
shopDOM.innerHTML=prodctsHTML

document.querySelectorAll('.cart-addjs')
.forEach((button)=>{
  button.addEventListener('click',()=>{
  const productName = button.dataset.prodctName; 

let matchingItem;


cartadd.forEach((item)=>{
  if (productName=== item.productName){
matchingItem=item

  }
});

if (matchingItem){
  matchingItem.quantitya+=1;
}else{
  cartadd.push({
    productName:productName,
    quantitya:1
  }); 
}
  console.log(cartadd);
  });
});