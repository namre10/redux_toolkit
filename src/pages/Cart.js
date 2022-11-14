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
      <h3 style={{ textAlign: "center" }}> Selected Items: {list.length}</h3>

      <div className="container">
        <div className="row">
          {list.map((product) => (
            <div className="col">
              {" "}
              <div className="card  my-2" style={{ width: "18rem" }}>
                <img
                  src={product.image}
                  className="card-img-top ps-5"
                  alt=""
                  style={{
                    height: "15rem",
                    width: "14rem",
                  }}
                />
                <div className="card-body">
                  <h5>{product.title.slice(0, 20)}....</h5>
                  <center>
                    <h5>${product.price}</h5>
                    <span>{product.category}</span>
                  </center>
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleRemove(product.id)}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
