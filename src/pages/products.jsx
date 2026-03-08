import ProductCard from "../components/productCard";
import ProductList from "../assets/productList";

function Products(){
    return <>
        {/* <Header></Header> */}
        <div className="Products">
            {ProductList.map((product) => {
                return <ProductCard 
                        key = {product.id} 
                        name = {product.name} 
                        image = {product.image} 
                        price = {product.price}>
                    </ProductCard>
            })}
        </div>
        {/* <Footer></Footer> */}
    </>
}

export default Products;