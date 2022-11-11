import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart); // state = whole application state

  const [term, setTerm] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(term);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {" "}
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  {" "}
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/cart">
                  {" "}
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <span className="nav-link active">
                  Cart Items: {items.length}
                </span>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={submitHandler}>
              <input
                className="form-control me-2"
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary mx-2" type="submit">
                Search
              </button>
              <button className="btn btn-primary" type="submit">
                Sort
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;