const die = document.querySelector('.bar');
const close = document.getElementById('close');
const nav = document.querySelector('.shc');
const cartItem =document.querySelector('.cart-item')
const cartRemove =document.querySelector('.Remove')
const cartTotla =document.querySelector('.cart-numb')
const cartContenItrm =document.querySelector('.cart-cont')
const shopDOM =document.querySelector('.content')
const boDy = document.querySelector('.product1')
const cartOrder = document.querySelector('.cart')

die.addEventListener('click', () => {
  nav.classList.toggle("open")

});
close.addEventListener('click', () => {
  nav.classList.remove("open")
});

cartOrder.addEventListener('click', () => {
  if (cartOrder.innerHTML === '<i></i>') {
    cartOrder.innerHTML = '+';

  } else {
    cartOrder.innerHTML = '<i></i>';
  };
});
console.log(cartOrder)



//upload the img to js
const prodcts =[{
  image:'photo/b11afd08-92b2-4677-bc8e-fe77fa59ee0f.jpg',
  nameofcompy:'Thrills Couure',
  prname:'Swiss Dasmask Fabrics',
rating:'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
price:8000 
},
{
  image:'photo/55720c07-9f90-4e74-bf47-b1a37ea28fba.jpg',
  nameofcompy:'Thrills Couure',
  prname:'Italian cashmere',
rating:'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
price:5000 
},
{
  image:'photo/BDEU2030.JPG', 
  nameofcompy:'Thrills Couure',
  prname:'Suiting chairman',
rating:'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
price:3800 
}];


let prodctsHTML='';
 


prodcts.forEach((prodcts)=>{
  prodctsHTML+= 
  `<div class="con">
        <img src="${prodcts.image}">
        <div class="dir"> <span>${prodcts.nameofcompy}</span>
          <h5>${prodcts.prname}</h5>
          <div class="star">
          ${prodcts.rating}
          </div>
          <h4>₦${prodcts.price} per yard</h4>
        </div>
        <a href="#"><i class="fas fa-shopping-cart cart"></i></a>
      </div>  
      `; 
})
 console.log(prodctsHTML); 
shopDOM.innerHTML=prodctsHTML

