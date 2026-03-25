import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import CartItem from "../components/cartItem";

function CartPage(){

    let navigate = useNavigate();

    function continueShopping(){
        navigate("/");
    }

    let { cart } = useContext(CartContext);
    const cartTotal = cart.length>0 ? 
        cart.reduce((total, item) => total + (item.price *  item.quantity), 0) : 0;

    return <>
        {/* <Header></Header> */}
            <div className="CartItems">
                {cart.length === 0 ? 
                        (<div className="empty-cart-message">
                            <p>Your Cart is empty</p>
                            <button onClick={continueShopping} className="checkout-button">Back to Shopping</button>
                        </div>) : 
                        cart.map((product) => {
                        return (
                            <CartItem
                                key = {product.cartItemId}
                                item = {product}
                                >
                            </CartItem>
                        )
                    })}
                <div className="checkout-corner">    
                    <h2 className="cart-total">{cart.length > 0 && `Total : ₹ ${cartTotal}`}</h2>
                    {cart.length > 0 && (<button className="checkout-button" onClick = {() => navigate("/checkout")} >Checkout</button>)}
                </div>   
            </div>
    </>
}

export default CartPage;