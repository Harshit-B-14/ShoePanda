import { useNavigate } from "react-router-dom";

function OrderPlaced(){

    let navigate = useNavigate()

    function continueShopping(){
        navigate("/");
    }

    return (
        <div style={{display: "flex", alignItems: "center", justifyContent:"center", flexDirection: "column", marginBottom: "10%" }}>
            <h1>Order Placed Successfully🎉</h1>
            <h2>Thank you for your purchase</h2>
            <button onClick={continueShopping} className="checkout-button">Continue Shopping</button>
        </div>
    )
}

export default OrderPlaced;