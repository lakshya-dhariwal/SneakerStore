import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav() {
  const cartCounter = useSelector((state) => state.cartCounter);
  console.log(cartCounter);
  return (
    <>
      <div className="nav">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3>
            the<span>Sneaker</span>Store
          </h3>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <button>
            Cart{" "}
            <sup>
              <span>{cartCounter}</span>
            </sup>
          </button>
        </Link>
      </div>
    </>
  );
}

export default Nav;
