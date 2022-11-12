// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { add } from "../store/CartSlice";
// import { useSelector } from "react-redux";
// import { set } from "immer/dist/internal";

// const Products = () => {
// const sortProduct = useSelector((state) => state.cart);

//   const dispatch = useDispatch();

//   const [products, setProducts] = useState([]);

//   const fetchProducts = async () => {
//     const res = await fetch("https://fakestoreapi.com/products");
//     const data = await res.json(res);
//     // console.log(data);
//     setProducts(data);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleAdd = (product) => {
//     dispatch(add(product));
//   };

//   const handleSort = () => {
//     const sortedproducts = products.sort((a, b) =>
//       a.title.localeCompare(b.title)
//     );
//     setProducts(sortedproducts);
//   };

//   console.log(products);

//   return (
//     <>
//       <button className="btn btn-primary" onClick={handleSort}>
//         SORT
//       </button>

//       <div className="continer">
//         <div className="row">
//           {products.map((product) => (
//             <div className="col-3">
//               <div className="card" key={product.id} style={{ width: "18rem" }}>
//                 <img
//                   src={product.image}
//                   className="card-img-top ps-5"
//                   alt="Product-Img"
//                   style={{
//                     height: "15rem",
//                     width: "14rem",
//                   }}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{product.title}</h5>
//                   <p className="card-text">${product.price}</p>
//                   <p className="card-text">{product.category}</p>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => handleAdd(product)}
//                   className="btn btn-primary"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Products;

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/CartSlice";
// import { useSelector } from "react-redux";
// import { set } from "immer/dist/internal";

const Products = () => {
  // const sortProduct = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  const [isAscending, setIsAscending] = useState(false);

  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json(res);

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  const sortAscending = (products) =>
    products.sort((a, b) => a.title.localeCompare(b.title));
  const sortDescending = (products) =>
    products.sort((a, b) => b.title.localeCompare(a.title));
  const handleSort = () => {
    const sortedproducts = isAscending
      ? sortAscending(products)
      : sortDescending(products);
    setIsAscending(!isAscending);
    setProducts(sortedproducts);
  };

  return (
    <>
      <div className="container">
        <button className="btn btn-primary my-3" onClick={handleSort}>
          SORT
        </button>
      </div>

      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <div
                className="card my-2"
                key={product.id}
                style={{ width: "18rem" }}
              >
                <img
                  src={product.image}
                  className="card-img-top ps-5"
                  alt="Product-Img"
                  style={{
                    height: "15rem",
                    width: "14rem",
                  }}
                />
                <div className="card-body ">
                  <h5 className="card-title">
                    {product.title.slice(0, 20)}....
                  </h5>
                  <p className="card-text">${product.price}</p>
                  <p className="card-text">{product.category}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleAdd(product)}
                  className="btn btn-primary"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
