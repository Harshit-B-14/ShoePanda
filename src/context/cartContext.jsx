import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }){

    let [cart,setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    
    function addToCart(product, size){
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id && item.size === size);
            
            if(existingItem){
                return prevCart.map(item => 
                    item.id === product.id && item.size === size ? {...item, quantity : item.quantity + 1} : item
                )
            }
            return [...prevCart, { ...product, quantity:1, size, cartItemId : `${product.id}-${size}` }];
        });
    }

    function reduceQuantity(product, size){
        
        setCart(prevCart => {
            const currentProduct = prevCart.find(item => item.cartItemId === product.cartItemId);
                
                if (!currentProduct) return prevCart;

                if(currentProduct.quantity === 1){
                    return prevCart.filter(item => item.cartItemId !== product.cartItemId);
                }

                return prevCart.map(item => 
                    item.cartItemId === product.cartItemId ? {...item, quantity : item.quantity - 1} : item
                )
            }
        )
    }

    function removeProd(product, size){
        setCart( prevCart => 
            prevCart.filter( item => item.cartItemId !== product.cartItemId)
        )
    }

    return <CartContext.Provider value={ {cart, addToCart, reduceQuantity, removeProd} }>
        {children}
    </CartContext.Provider>
}

export { CartContext, CartProvider };