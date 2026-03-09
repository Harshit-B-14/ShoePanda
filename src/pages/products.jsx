import { Link } from "react-router-dom";
import ProductCard from "../components/productCard";
import ProductList from "../assets/productList";

function Products(){
    return <>
        {/* <Header></Header> */}
        <div className="Products">
            {ProductList.map((product) => {
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