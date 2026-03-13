import { useContext } from "react";
import { CartContext } from "../context/cartContext";

function CartItem({item}){

    const { cart, addToCart, reduceQuantity, removeProd } = useContext(CartContext);

    const {image, name, price, size, quantity} = item;
    
    return (
        <div className="singleCartProduct">
            <img src = {image}></img>
            <h1>{name}</h1>
            <p>{price}</p>
            <p>{size}</p>
            <p>{quantity}</p>
            <button onClick = {() => addToCart(item,size)}>+</button>
            <button onClick = {() => reduceQuantity(item, size)}>-</button>
            <button onClick = {() => removeProd(item, size)}> X </button>
        </div>
    );
}

export default CartItem;