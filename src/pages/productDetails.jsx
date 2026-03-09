import { useParams } from "react-router-dom";
import { useContext } from "react";
import ProductList from "../assets/productList";
import { CartContext } from "../context/cartContext";

function ProductDetails(){
    const { id } = useParams();
    const currentProduct = ProductList.find((item) => item.id === Number(id));
    
    if(!currentProduct) return <h2>Product not found</h2>

    let {cart, addToCart} = useContext(CartContext);

    return <>
        <div className="productDetails">
            <img src = {currentProduct.image}></img>
            <h1>{currentProduct.name}</h1>
            <p>{currentProduct.price}</p>
            <button onClick = {() => {addToCart(currentProduct)}} >Add to Cart</button>
        </div>
    </>
}

export default ProductDetails;

    // const currentProduct = ProductList.find((item) => {item.id == id});