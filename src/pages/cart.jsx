import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import CartItem from "../components/cartItem";

function CartPage(){

    let { cart } = useContext(CartContext);

    return <>
        {/* <Header></Header> */}
            <div className="CartItems">
                {cart.map((product) => {
                    return (
                        <CartItem 
                            key={product.id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            >    
                        </CartItem>
                    )
                })}
            </div>
        {/* <Footer></Footer> */}
    </>
}

export default CartPage;