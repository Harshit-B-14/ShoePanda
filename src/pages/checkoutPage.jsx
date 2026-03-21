import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { useNavigate } from "react-router-dom";

function CheckoutPage(){

    let navigate = useNavigate();
    const { clearCart } = useContext(CartContext);
    function handleCheckout(event){
        event.preventDefault();
        clearCart();
        navigate("/order-placed");
    }

    return (
        <div className="user-details-form">
            <h2 id = "checkout-heading">Checkout</h2>
            <form onSubmit = {handleCheckout}>
                <div className="input-field">
                    <label htmlFor="checkout-name">First Name* </label>
                    <input type="text" placeholder="name" />
                </div>
                
                <div className="input-field">
                    <label htmlFor="checkout-lastname">Last Name </label>
                    <input type="text" placeholder="last name"/>
                </div>

                <div className="input-field">
                    <label htmlFor="address"> Address* </label>
                    <input type="text" placeholder="address" />
                </div>
                
                <div className="input-field">
                    <label htmlFor="email"> Email* </label>
                    <input type="email" placeholder="email" />
                </div>
                
                <div className="input-field">
                    <label htmlFor="phone-no"> Phone no.* </label>
                    <input type="tel" placeholder="phone-no" pattern="[0-9]{10}"/>
                </div>

                <div className="input-field">
                    <label>Mode of Payment*</label>
                    <select >
                        <option value="">Select</option>
                        <option>COD</option>
                        <option>Credit Card</option>
                        <option>Debit Card</option>
                    </select>
                </div>
                
                <button>Place Order</button>
            </form>

            <div className="order-summay">
            </div>
        </div>
    )
}

export default CheckoutPage;