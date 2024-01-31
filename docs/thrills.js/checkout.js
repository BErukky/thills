 import { cartadd, removeFromcart } from "../DATA/cartadd.js";
 import { prodcts } from "../DATA/prodcts.js";


let caartSummaryHTML= '';


cartadd.forEach((cartItem) =>{
const prodctId =cartItem.productId


let matchingProduct;

prodcts.forEach((prodct)=>{

  if (prodct.id===prodctId ){
matchingProduct=prodct;
  }
});

 caartSummaryHTML+=
  `
  <section id="cart-add" class="section-p1">
  <table id="js-cart-add-con-${matchingProduct.id}"   width="100%">
      <thead>
        <tr>
          <td>Remove</td>
          <td>Imges</td>
          <td>Product</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Subtotal</td>
        </tr>
      </thead>
      
      <tbody>
        <div class="cart-cont">
          <tr>
          <td class="Remove" data-product-id="${matchingProduct.id}"><a href="#"><i class="fas fa-times-circle"></i></a></td>
          <td><img src="${matchingProduct.image}" alt=""> </td>
          <td>${matchingProduct.prname}</td>
          <td>${matchingProduct.price}</td>
          <td class="cart-itemnumb"><input type="number" value="${cartItem.quantity}"> </td>
          <td>${matchingProduct.price}</td>
        </tr>
        </div>
  
      </tbody>
  
    </table>

  </section>
  
  `;
}); 
document.querySelector('#cart-add').innerHTML=caartSummaryHTML;

document.querySelectorAll('.Remove').forEach((remove)=>{
  remove.addEventListener('click',()=>{
    const productId=remove.dataset.productId;
    removeFromcart(productId);
     

    const contenter = document.querySelector(`#js-cart-add-con-${productId}`);
    contenter.remove();
  }); 
});

