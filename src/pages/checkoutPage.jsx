
function CheckoutPage(){
    return (
        <>
            <h2 id = "checkout-heading">Checkout</h2>
            <form action="">
                <div className="input-field">
                    <label htmlFor="checkout-name">First Name: </label>
                    <input type="text" placeholder="name"/>
                </div>
                
                <div className="input-field">
                    <label htmlFor="checkout-lastname">Last Name: </label>
                    <input type="text" placeholder="last name"/>
                </div>

                <div className="input-field">
                    <label htmlFor="address"> Address: </label>
                    <input type="text" placeholder="address" />
                </div>
                
                <div className="input-field">
                    <label htmlFor="address"> Email: </label>
                    <input type="text" placeholder="email" />
                </div>
                
            </form>
        </>
    )
}

export default CheckoutPage;