import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import data from "../data.js";

import { cartCounterIncrement, addToCartListIncrement } from "../actions";

function ProductDetail({ params }) {
  //to create product page
  let { id } = useParams();
  const toBuyProduct = data().filter((product) => {
    return product.id === id;
  });

  //for adding to cart
  const [size, setSize] = useState("3.5");
  const dispatch = useDispatch();
  const formSubmitHandler = (e) => {
    let product = { uuid: uuidv4(), details: toBuyProduct[0], size };
    e.preventDefault();
    dispatch(cartCounterIncrement());
    dispatch(addToCartListIncrement(product));
    console.log(product);
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div className="product-page">
      <div>
        <img src={toBuyProduct[0].imgUrl} alt={toBuyProduct[0].name} />
      </div>
      <div className="details">
        <h1>{toBuyProduct[0].name}</h1>
        <h2>${toBuyProduct[0].price}</h2>
        <form action="addToCart" onSubmit={formSubmitHandler}>
          <label htmlFor="size">Choose Size (UK/India) </label>
          <select
            name="size"
            id="cars"
            onChange={(e) => setSize(e.target.value)}
          >
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
          <br />
          <button type="submit">Add to Bag</button>
        </form>
      </div>
    </div>
  );
}

export default ProductDetail;
