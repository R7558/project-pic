// case er kaj button


function updateProductsNumber(products,isIncresing,price) {
    const productsInput=document.getElementById(products + '-number');
    let productsNumber=productsInput.value ;
    if (isIncresing) {
        productsNumber=parseInt(productsNumber)+1;
    }
   else if(productsNumber>0){
    productsNumber=parseInt(productsNumber)-1;
   }
productsInput.value=productsNumber;


   // case er kaj price---

   const productsTotal=document.getElementById(products +'-total');
   productsTotal.innerText=productsNumber*price;

   // calculate total------
   calculateTotal();
}




function getInputValue(products){
    const productInput=document.getElementById(products + '-number');
    const productNumber=parseInt(productInput.value);
    return productNumber;
}

function calculateTotal () {
  const phoneTotal=getInputValue('wclothes1')*1219;
  const caseTotal=getInputValue('wclothes2')*121;
  const beg3Total=getInputValue('wclothes3')*512;
  const beg4Total=getInputValue('wclothes4')*59;
  const subTotal=phoneTotal+caseTotal+beg3Total+beg4Total;
  const tax=subTotal/10;
  const totalPrice=subTotal+tax;

  // update on the html-----

  document.getElementById('sub-total').innerText=subTotal;

  document.getElementById('tex-amount').innerText=tax;
  document.getElementById('total-price').innerText=totalPrice;
}
//clothes1----
document.getElementById('wclothes1-plus').addEventListener('click',function(){
    updateProductsNumber('wclothes1',true,1219);
})

document.getElementById('wclothes1-minus').addEventListener('click',function(){
    updateProductsNumber('wclothes1',false,1219)
})
//clothes2----
document.getElementById('wclothes2-plus').addEventListener('click',function(){
    updateProductsNumber('wclothes2',true,121);
})

document.getElementById('wclothes2-minus').addEventListener('click',function(){
    updateProductsNumber('wclothes2',false,121)
})
//clothes3----
document.getElementById('wclothes3-plus').addEventListener('click',function(){
    updateProductsNumber('wclothes3',true,512);
})

document.getElementById('wclothes3-minus').addEventListener('click',function(){
    updateProductsNumber('wclothes3',false,512)
})
//clothes4----
document.getElementById('wclothes4-plus').addEventListener('click',function(){
    updateProductsNumber('wclothes4',true,59);
})

document.getElementById('wclothes4-minus').addEventListener('click',function(){
    updateProductsNumber('wclothes4',false,59)
})


