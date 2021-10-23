export const cartCounterIncrement = () => {
  return {
    type: "INCREMENT",
  };
};
export const addToCartListIncrement = (product) => {
  return {
    type: "ADD",
    product,
  };
};
