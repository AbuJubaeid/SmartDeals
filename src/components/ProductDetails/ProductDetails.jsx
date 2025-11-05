import { useLoaderData } from "react-router";

const ProductDetails = () => {
  const product = useLoaderData();
  console.log(product);
  return (
    <div>
      <div className="px-10">
        <div className="flex justify-between items-center">
          <h3>Image</h3>
          <p>Description</p>
        </div>
        <div>
          <h3>Product Details</h3>
        </div>
        <div>
          <button className="btn btn-primary">I want to bid</button>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            open modal
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        <div>
          <h3>Bids are shown For this product</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
