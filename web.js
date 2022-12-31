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
  const phoneTotal=getInputValue('beg2')*1219;
  const caseTotal=getInputValue('beg1')*59;
  const beg3Total=getInputValue('beg3')*121;
  const beg4Total=getInputValue('beg4')*512;
  const subTotal=phoneTotal+caseTotal+beg3Total+beg4Total;
  const tax=subTotal/10;
  const totalPrice=subTotal+tax;

  // update on the html-----

  document.getElementById('sub-total').innerText=subTotal;

  document.getElementById('tex-amount').innerText=tax;
  document.getElementById('total-price').innerText=totalPrice;
}
//beg1----
document.getElementById('beg1-plus').addEventListener('click',function(){
    updateProductsNumber('beg1',true,59);
})

document.getElementById('beg1-minus').addEventListener('click',function(){
    updateProductsNumber('beg1',false,59)
})

//beg2---------


document.getElementById('beg2-plus').addEventListener('click',function(){
    updateProductsNumber('beg2',true,1219);
})


document.getElementById('beg2-minus').addEventListener('click',function(){
    updateProductsNumber('beg2',false,1219);
})
//beg3-----
document.getElementById('beg3-plus').addEventListener('click',function(){
    updateProductsNumber('beg3',true,121);
})


document.getElementById('beg3-minus').addEventListener('click',function(){
    updateProductsNumber('beg3',false,121);
})
// beg4--------
document.getElementById('beg4-plus').addEventListener('click',function(){
    updateProductsNumber('beg4',true,512);
})


document.getElementById('beg4-minus').addEventListener('click',function(){
    updateProductsNumber('beg4',false,512);
})