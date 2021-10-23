const cartCounterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "RESET":
      return (state = action.newVal);
    default:
      return state;
  }
};

export default cartCounterReducer;
