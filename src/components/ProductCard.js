import React from "react";

function ProductCard({ product }) {
  console.log(product.imgUrl);
  return (
    <div>
      <div className="card">
        <img src={product.imgUrl} alt={product.name} />
        <div>
          <h3>{product.name}</h3>
          <h3>${product.price}</h3>
        </div>
        <span>
          <button>-</button>
          <h6>Add to Cart</h6>
          <button>+</button>
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
