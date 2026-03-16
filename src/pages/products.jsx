import { Link } from "react-router-dom";
import { useState } from "react";
import ProductCard from "../components/productCard";
import ProductList from "../assets/productList";

function Products(){

    const [search, setSearch] = useState("");

    return <>
        <input className="searchBox" placeholder="Search for products" onChange={(query) => setSearch(query.target.value)}></input>
        <div className="Products">
            {ProductList.filter((product) => 
                product.name.toLowerCase().includes(search.toLowerCase())).map((product) => 
                {
                    return <Link to={`/productDetails/${product.id}`} key = {product.id}>
                        <ProductCard 
                            name = {product.name} 
                            image = {product.image} 
                            price = {product.price}>
                        </ProductCard>
                    </Link>
                })}
        </div>
        {/* <Footer></Footer> */}
    </>
}

export default Products;