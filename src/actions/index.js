export const cartCounterIncrement = (quantity) => {
  return {
    type: "INCREMENT",
    quantity,
  };
};
