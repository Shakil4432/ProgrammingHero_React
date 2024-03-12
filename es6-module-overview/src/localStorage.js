const getDatafromLS = ()=>{
    const getData = localStorage.getItem('cart');
    if(getData){
        return JSON.parse(getData);
    }
    return [];
}

const saveItemLS = cart =>{
    const cartStrJson = JSON.stringify(cart);
    localStorage.setItem('cart',cartStrJson);
}

const addToLS = id =>{
    const cart = getDatafromLS();
    cart.push(id);
    saveItemLS(cart);
}

const removeCartLS = (id)=>{
    const cart = getDatafromLS();
    const remaining = cart.filter(idx => idx !== id);
    saveItemLS(remaining);
}

export {getDatafromLS,addToLS, removeCartLS};