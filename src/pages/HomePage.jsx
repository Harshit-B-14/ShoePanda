import ProductCard from "../components/productCard";
import ProductList from "../assets/productList";
import panda from "../assets/panda-logo.jpg"
import {Link} from "react-router-dom"
function Home(){
    return <>
        <div className="logo">
            <img src={panda}/>
            <p>ShoePanda</p>
        </div>
        
        <div className="Products">
            {ProductList.map((product) => {
                return <Link to={`/productDetails/${product.id}`}>
                    <ProductCard 
                        key = {product.id} 
                        name = {product.name} 
                        image = {product.image} 
                        price = {product.price}>
                    </ProductCard>
                </Link>
            })}
        </div>
        
        
    </>
}

export default Home;