import ProductCard from "../components/productCard";
import ProductList from "../assets/productList";
import hero from "../assets/hero.png"
import {Link} from "react-router-dom"

function Home(){
    return <>
        
        <div className="hero">
            <img src={hero} alt="Hero for summer collection" />
        </div>

        <div className="Products">
            {ProductList.map((product) => {
                return <Link to={`/productDetails/${product.id}`} key = {product.id} className="link">
                    <ProductCard 
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