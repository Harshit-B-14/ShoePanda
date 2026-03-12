import { useContext } from "react";
import { CartContext } from "../context/cartContext";

function CartItem({image, name, price, size, quantity}){
    return (
        <div className="singleCartProduct">
            <img src = {image}></img>
            <h1>{name}</h1>
            <p>{price}</p>
            <p>{size}</p>
            <p>{quantity}</p>
        </div>
    );
}

export default CartItem;