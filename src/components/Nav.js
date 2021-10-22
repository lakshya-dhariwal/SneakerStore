import React from "react";
import { Link } from "react-router-dom";
function Nav() {
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
              <span>0</span>
            </sup>
          </button>
        </Link>
      </div>
    </>
  );
}

export default Nav;
