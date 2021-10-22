import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div>
      <div className="card">
        <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
          <img src={product.imgUrl} alt={product.name} />
        </Link>
        <div>
          <h2>{product.name}</h2>
          <h3>${product.price}</h3>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
