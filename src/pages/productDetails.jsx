import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import ProductList from "../assets/productList";
import { CartContext } from "../context/cartContext";

function ProductDetails(){
    const [size, setSize] = useState(4);
    const { id } = useParams();
    const currentProduct = ProductList.find((item) => item.id === Number(id));
    
    if(!currentProduct) return <h2>Product not found</h2>

    let {cart, addToCart} = useContext(CartContext);

    return <>
        <div className="productDetails">
            <img src = {currentProduct.image}></img>
            <div className="details">
                <h2>{currentProduct.name}</h2>
                <p>{currentProduct.price}</p>
                <select onChange = {(e) => setSize(e.target.value)} name="size">
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                </select>
                <button onClick = {() => {addToCart(currentProduct, size)}} >Add to Cart</button>
            </div>
        </div>
    </>
}

export default ProductDetails;

    // const currentProduct = ProductList.find((item) => {item.id == id});