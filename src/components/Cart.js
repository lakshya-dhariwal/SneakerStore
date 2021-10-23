import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateCartList, resetCartCounter } from "../actions";

function Cart() {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartList);
  let sum = 0;
  const cartCounter = useSelector((state) => state.cartCounter);
  const [total, setTotal] = useState(0);
  const deleteHandler = (id) => {
    const newStateValue = cartList.filter((item) => {
      return item.uuid !== id;
    });
    dispatch(updateCartList(newStateValue));
    dispatch(resetCartCounter(newStateValue.length));
    //cart total update
    newStateValue.map((item) => {
      sum = sum + item.details.price;
    });
    setTotal(sum);
  };
  useEffect(() => {
    cartList.map((item) => {
      sum = sum + item.details.price;
    });
    setTotal(sum);
  }, []);

  return (
    <div className="cart">
      <div>
        <h1>Cart </h1>
        <h2>
          Total Items <span>{cartCounter}</span> {}
        </h2>
        <h2>
          Cart Total - Rs. <span>{total}</span> {}
        </h2>
      </div>

      <div className="cart-list">
        {cartList.map((item) => {
          return (
            <div key={item.uuid}>
              <div className="list-item">
                <h5>{item.details.name}</h5>
                <img src={item.details.imgUrl}></img>
                <h5>Rs.{item.details.price}</h5>
                <h5>UK {item.size}</h5>
                <button type="button" onClick={() => deleteHandler(item.uuid)}>
                  Delete
                </button>
                <br />
              </div>
            </div>
          );
        })}
      </div>

      <Link to="/success">
        <button type="button">Order</button>
      </Link>
    </div>
  );
}

export default Cart;
