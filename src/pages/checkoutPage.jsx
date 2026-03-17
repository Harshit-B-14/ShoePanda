
function CheckoutPage(){
    return (
        <>
            <h2 id = "checkout-heading">Checkout</h2>
            <form action="">
                <div className="input-field">
                    <label htmlFor="checkout-name">First Name* </label>
                    <input type="text" placeholder="name" required/>
                </div>
                
                <div className="input-field">
                    <label htmlFor="checkout-lastname">Last Name </label>
                    <input type="text" placeholder="last name"/>
                </div>

                <div className="input-field">
                    <label htmlFor="address"> Address* </label>
                    <input type="text" placeholder="address" required/>
                </div>
                
                <div className="input-field">
                    <label htmlFor="email"> Email* </label>
                    <input type="email" placeholder="email" required/>
                </div>
                
                <div className="input-field">
                    <label htmlFor="phone-no"> Phone no.* </label>
                    <input type="tel" placeholder="phone-no" pattern="[0-9]{10}"required/>
                </div>

                <div className="input-field">
                    <label>Mode of Payment*</label>
                    <select required>
                        <option value="">Select</option>
                        <option>COD</option>
                        <option>Credit Card</option>
                        <option>Debit Card</option>
                    </select>
                </div>
                
                <button>Place Order</button>
            </form>

            <div className="order-summay">
                haha
            </div>
        </>
    )
}

export default CheckoutPage;