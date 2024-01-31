 export let cartadd = [{
productId:"3ebe75dc-64d2-4137-8860-1f5a963e534b",
quantity:2,
},
 {
productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
quantity:1
 }];

export function addtoCart(productId){

let matchingItem;

cartadd.forEach((item)=>{
  if (productId=== item.productId){
matchingItem=item;
  }
});

if (matchingItem){
  matchingItem.quantity+=1;
}else{
  cartadd.push({
    productId:productId,
    quantity:3
  }); 
}}

 export function removeFromcart (productId){
const newCart =[];

cartadd.forEach((cartItem)=>{
if (cartItem.productId !== productId){
  newCart.push(cartItem);
}
});

cartadd=newCart; 
}