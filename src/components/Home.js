import React from "react";
import data from "../data.js";
import ProductCard from "./ProductCard.js";
function Home() {
  console.log(data());
  return (
    <div className="cardGrid">
      {data().map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
}

export default Home;
