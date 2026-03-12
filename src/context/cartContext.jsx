import { createContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }){

    let [cart,setCart] = useState([]);

    function addToCart(product, size){
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id && item.size === size);
            
            if(existingItem){
                return prevCart.map(item => 
                    item.id === product.id && item.size === size ? {...item, quantity : item.quantity + 1} : {...item, quantity : 1}
                )
            }
            return [...prevCart, { ...product, quantity:1, size: size }];
        });
    }

    return <CartContext.Provider value={ {cart, addToCart} }>
        {children}
    </CartContext.Provider>
}

export { CartContext, CartProvider };