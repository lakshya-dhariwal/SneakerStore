import { combineReducers } from "redux";
import cartCounter from "./cartCounter";
import cartList from "./cartList";
const allReducers = combineReducers({
  cartCounter,
  cartList,
});

export default allReducers;
