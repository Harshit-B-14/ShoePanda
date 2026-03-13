import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import CartItem from "../components/cartItem";

function CartPage(){

    let { cart } = useContext(CartContext);
    const cartTotal = cart.length>0 ? cart.reduce((total, item) => total + (item.price *  item.quantity), 0) : 0;
    return <>
        {/* <Header></Header> */}
            <div className="CartItems">
                {cart.length === 0 ? (<p>Your Cart is empty</p>) : cart.map((product) => {
                    return (
                        <CartItem 
                            key = {product.cartItemId}
                            item = {product}
                            >    
                        </CartItem>
                    )
                })}
                <h2>{cart.length > 0 && `Total : ${cartTotal}`}</h2>
            </div>
            
        {/* <Footer></Footer> */}
    </>
}

export default CartPage;