import { Link } from "react-router";

const Products = ({ product }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src=""
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>${product.price_min} - <span>${product.price_max}</span></p>
        <div className="card-actions">
          <Link to={`productDetails/${product._id}`} className="btn btn-primary w-full">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
