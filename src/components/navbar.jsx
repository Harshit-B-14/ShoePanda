import {Link} from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

function Navbar(props){

    const { cart } = useContext(CartContext);

    return <div className={props.className}>
        <Link to="/">
            <button>Home</button>
        </Link>
        <Link to="/about">
            <button>About</button>
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
            <button>Cart {cart.length}</button>
        </Link>
    </div>
}

export default Navbar;