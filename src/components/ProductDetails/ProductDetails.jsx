import { use, useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthContext/AuthContext";

const ProductDetails = () => {
  const { _id: productId } = useLoaderData();
  const [bids, setBids] = useState([]);
  const { user } = use(AuthContext);

  const modalRef = useRef(null);

  const handleModalOpen = () => {
    modalRef.current.showModal();
  };

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const bid = e.target.bid.value;

    const newBid = {
      product: productId,
      buyer_name: name,
      buyer_email: email,
      bid_price: bid,
    };
    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          modalRef.current.close();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your bids has been placed",
            showConfirmButton: false,
            timer: 1500,
          });
          // add the new bid to the state
          newBid._id = data.insertedId;
          const newBids = [...bids, newBid];
          newBids.sort((a, b) => b.bid_price - a.bid_price);
          setBids(newBids);
        }
      });
  };

  useEffect(() => {
    fetch(`http://localhost:3000/products/bids/${productId}`, {
      headers: {
        authorization : `Bearer ${user.accessToken}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("bida data", data);
        setBids(data);
      });
  }, [productId, user]);

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
          <button onClick={handleModalOpen} className="btn btn-primary">
            I want to bid
          </button>
          {/* Open the modal using document.getElementById('ID').showModal() method */}

          <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Give the best offer</h3>
              <p className="py-4">Offer something seller can't resist</p>
              <form onSubmit={handleBidSubmit}>
                <fieldset className="fieldset">
                  {/* name */}
                  <label className="label">Name</label>
                  <input
                    type="name"
                    name="name"
                    className="input"
                    defaultValue={user?.displayName}
                    readOnly
                  />
                  {/* email */}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    defaultValue={user?.email}
                    readOnly
                  />
                  {/* bid */}
                  <label className="label">Bid</label>
                  <input type="text" name="bid" className="input" />
                  <button className="btn btn-neutral mt-4">Submit bid</button>
                </fieldset>
              </form>
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
          <h3>
            Bids are shown For this product <span>{bids.length}</span>
          </h3>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Buyer Name</th>
                <th>Buyer Email</th>
                <th>Bid Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bids.map((bid, index) => (
                <tr key={bid._id}>
                  <th>{index + 1} </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{bid.buyer_name}</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>{bid.buyer_email}</td>
                  <td>{bid.bid_price}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
              {/* row 2 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
