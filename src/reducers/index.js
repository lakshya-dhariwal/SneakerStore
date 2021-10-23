import { combineReducers } from "redux";
import cartCounter from "./cartCounter";
import productList from "./productList";
const allReducers = combineReducers({
  cartCounter,
  productList,
});

export default allReducers;
