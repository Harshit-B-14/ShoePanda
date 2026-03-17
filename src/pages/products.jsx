import { Link } from "react-router-dom";
import { useState } from "react";
import ProductCard from "../components/productCard";
import ProductList from "../assets/productList";

function Products(){

    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");

    let products = [...ProductList];

    products = products.filter((product) => 
               product.name.toLowerCase().includes(search.toLowerCase()));

    if(sort === "AtoZ") products.sort((a,b) => a.name.localeCompare(b.name));
    if(sort === "low") products.sort((a,b) => a.price - b.price);
    if(sort === "high") products.sort((a,b) => b.price - a.price);

    return <>
        <div className="filters">

            <input className="searchBox" 
                placeholder="Search for products" 
                onChange={(query) => setSearch(query.target.value)}>
            </input>

            <select value={sort} onChange={(o) => setSort(o.target.value)}>
                <option value="">Select Sorting Options</option>
                <option value="AtoZ">A to Z</option>
                <option value="low">Price: Low to high</option>
                <option value="high">Price: High to low</option>
            </select>

        </div>

        <div className="Products">

            {products.map((product) => 
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