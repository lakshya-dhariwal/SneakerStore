import React from "react";
import data from "../data.js";
import ProductCard from "./ProductCard.js";
function Home() {
  return (
    <div className="container">
      <div className="cardGrid">
        {data().map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
}

export default Home;
