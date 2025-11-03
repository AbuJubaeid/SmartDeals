import { use } from "react";
import Products from "../Products/Products";

const LatestProducts = ({latestProductsPromise}) => {
    const latestProduct = use(latestProductsPromise)
    console.log(latestProduct)

    return (
        <div className="mt-10">
            <h2 className="text-3xl font-extrabold text-center  mb-5">Recent Products</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2
             lg:grid-cols-3">
                {
                   latestProduct.map(product=> <Products key={product._id} product={product}></Products>) 
                }
            </div>
        </div>
    );
};

export default LatestProducts;