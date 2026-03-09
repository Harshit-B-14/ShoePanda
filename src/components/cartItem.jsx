import { useContext } from "react";
import { CartContext } from "../context/cartContext";

function CartItem({image, name, price}){
    return (
        <div className="singleCartProduct">
            <img src = {image}></img>
            <h1>{name}</h1>
            <p>{price}</p>
        </div>
    );
}

export default CartItem;