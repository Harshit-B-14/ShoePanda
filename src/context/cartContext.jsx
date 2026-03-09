import { createContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }){

    let [cart,setCart] = useState([]);

    function addToCart(product){
        setCart(prev => [...prev,product]);
    }

    return <CartContext.Provider value={ {cart, addToCart} }>
        {children}
    </CartContext.Provider>
}

export { CartContext, CartProvider };