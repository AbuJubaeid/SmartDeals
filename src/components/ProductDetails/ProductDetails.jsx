import { useLoaderData } from "react-router";

const ProductDetails = () => {
    const product = useLoaderData()
    console.log(product)
    return (
        <div>
            <div>
                <div className="flex justify-between items-center">
                    <h3>Image</h3>
                    <p>Description</p>
                </div>
                <div>
                    <h3>Product Details</h3>
                </div>
                <div>
                    <button>I want to bid</button>
                </div>
                <div>
                    <h3>Bids are shown For this product</h3>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;