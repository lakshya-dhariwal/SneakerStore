export const cartCounterIncrement = () => {
  return {
    type: "INCREMENT",
  };
};
export const resetCartCounter = (newVal) => {
  return {
    type: "RESET",
    newVal,
  };
};

export const addToCartListIncrement = (product) => {
  return {
    type: "ADD",
    product,
  };
};
export const updateCartList = (newStateValue) => {
  return {
    type: "UPDATE",
    newStateValue,
  };
};
