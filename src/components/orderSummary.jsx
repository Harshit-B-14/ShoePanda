import { useContext } from "react"
import { CartContext } from "../context/cartContext"
import { useNavigate } from "react-router-dom";

function OrderSummary({handleClick}){
    
    let { cart } = useContext(CartContext);

    const cartTotal = cart.length>0 ? 
        cart.reduce((total, item) => total + (item.price *  item.quantity), 0) : 0;

    const totalQuantity = cart.length>0 ?
        cart.reduce((total, item) => total + (item.quantity),0) : 0;
    
        return (
        <>
            {cart.length > 0 && (
                <div className="order-summary">
                    <h1>Order Summary</h1>
                    <h2 className="cart-total">{`Total : ₹ ${cartTotal}`}</h2>
                    <h2 className="cart-total">{`Total Items : ${totalQuantity}`}</h2>
                    <button className="checkout-button" onClick = {handleClick} type="submit" >Place Order</button>
                </div>)}
        </>
    )
}

export default OrderSummary;