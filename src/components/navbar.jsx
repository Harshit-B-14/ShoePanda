import {Link} from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

function Navbar(props){

    const { cart } = useContext(CartContext);

    return <div className="navbar">
        {/* <Link to="/">
            <button><span className="material-symbols-outlined">home</span></button>
        </Link>
        <Link to="/products">
            <button><span className="material-symbols-outlined">grid_view</span></button>
        </Link>
        <Link to="/contact">
            <button><span className="material-symbols-outlined">mail</span></button>
        </Link>
        <Link to="/about">
            <button><span className="material-symbols-outlined">info</span></button>
        </Link>
        <Link to="/login">
            <button>Log In</button>
        </Link>
        <Link to="/cart">
            <button className="cart-button"><span className="material-symbols-outlined">shopping_cart</span>
            {cart.length > 0 && <span id="cart-length">{cart.length}</span>}
            </button>
        </Link> */}
        <Link to="/">
            <button>Home</button>
        </Link>
        <Link to="/products">
            <button>Products</button>
        </Link>
        <Link to="/contact">
            <button>Contact</button>
        </Link>
        <Link to="/about">
            <button>About</button>
        </Link>
        <Link to="/login">
            <button>Log In</button>
        </Link>
        <Link to="/cart">
            <button>Cart</button>{cart.length > 0 && <span id="cart-length">{cart.length}</span>}
        </Link>
    </div>
}

export default Navbar;