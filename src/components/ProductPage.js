import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.js";

function ProductDetail({ params }) {
  let { id } = useParams();
  console.log(id);
  const toBuyProduct = data().filter((product) => {
    return product.id === id;
  });
  console.log(toBuyProduct);
  return (
    <div className="product-page">
      <div>
        <img src={toBuyProduct[0].imgUrl} alt={toBuyProduct[0].name} />
      </div>
      <div className="details">
        <h1>{toBuyProduct[0].name}</h1>
        <h2>${toBuyProduct[0].price}</h2>
        <form action="addToCart">
          <label for="size">Choose Size (UK/India) </label>
          <select name="size" id="cars">
            <option value="3.5">3.5</option>
            <option value="4">4</option>
            <option value="4.5">4.5</option>
            <option value="5">5</option>
            <option value="5.5">5.5</option>
            <option value="6">6</option>
            <option value="6.5">6.5</option>
            <option value="7">7</option>
            <option value="7.5">7.5</option>
            <option value="8">8</option>
            <option value="8.5">8.5</option>
            <option value="9">9</option>
            <option value="9.5">9.5</option>
            <option value="10">10</option>
            <option value="10.5">10.5</option>
            <option value="11">11</option>
            <option value="11.5">11.5</option>
            <option value="12">12</option>
          </select>
          <br />
          <label for="quantity">Quantity </label>
          <input type="number" />
          <br />
          <button type="submit">Add to Bag</button>
        </form>

        <h3>Delivery might take upto 7 days.</h3>
      </div>
    </div>
  );
}

export default ProductDetail;
