import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../store/CartSlice";

const Cart = () => {
  const list = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemove = (productid) => {
    dispatch(remove(productid));
  };

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Selected Items</h3>

      <div className="row">
        {list.map((product) => (
          <div className="col-3">
            {" "}
            <div className="card" style={{ width: "20rem" }}>
              <img src={product.image} alt="" style={{ width: "18rem" }} />
              <div className="card-body">
                <h5>{product.title}</h5>
                <h5>${product.price}</h5>
              </div>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => handleRemove(product.id)}
              >
                Delete from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
