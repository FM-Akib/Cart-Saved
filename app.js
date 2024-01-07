const TakeInputFromInputField=()=>{
    const productNameField=document.getElementById('productName');
    const productQuantityField=document.getElementById('productQuantity');
    const  productName=productNameField.value;
    const  productQuantity=productQuantityField.value;
    productNameField.innerText='';
    productQuantityField.innerText='';  
    
    addToCart(productName,productQuantity);
}


const addToCart=(productName,productQuantity)=>{

    const cartList=document.getElementById('cart-list');
    const li=document.createElement('li');
    li.innerText=productName +': '+ productQuantity;
    cartList.appendChild(li);

    AddLocalStorageCart(productName, productQuantity);
    
}
const HandlePreviousCart=()=>{
    let cart={};
    const cartStored=localStorage.getItem('cart');

    if(cartStored){
        cart=JSON.parse(cartStored)
    }
    return cart;
    
}

const AddLocalStorageCart=(product,quantity)=>{
   const cart= HandlePreviousCart();
       
    cart[product] = quantity;

    cartString=JSON.stringify(cart);
    localStorage.setItem('cart', cartString);
    // console.log(cart);
}

const ShowPreviousCartToScreen=()=>{
    const cart= HandlePreviousCart();
    for(item in cart){
        addToCart(item,cart[item]);
    }

}
ShowPreviousCartToScreen();