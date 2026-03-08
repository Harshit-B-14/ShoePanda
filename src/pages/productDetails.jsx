import { useParams } from "react-router-dom";
import ProductList from "../assets/productList";

function ProductDetails(){
    const { id } = useParams();
    const currentProduct = ProductList.find((item) => item.id === Number(id));
    
    if(!currentProduct) return <h2>Product not found</h2>

    return <>
        <div className="productDetails">
            <img src = {currentProduct.image}></img>
            <h1>{currentProduct.name}</h1>
            <p>{currentProduct.price}</p>
        </div>
    </>
}

export default ProductDetails;

    // const currentProduct = ProductList.find((item) => {item.id == id});