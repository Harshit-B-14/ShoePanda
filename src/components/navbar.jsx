import {Link} from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

function Navbar(props){

    const { cart } = useContext(CartContext);

    return <div className="navbar">
        <Link to="/">
            <button className="" >Home</button>
        </Link>
        <Link to="/products">
            <button>Products</button>
        </Link>
        <Link to="/contact">
            <button>Contact</button>
        </Link>
        <Link to="/login">
            <button>Log In</button>
        </Link>
        <Link to="/cart">
            <button className="cart-button"><span className="material-symbols-outlined">cart</span>
            {cart.length > 0 && <span id="cart-length">{cart.length}</span>}
            </button>
        </Link>
    </div>
}

export default Navbar;