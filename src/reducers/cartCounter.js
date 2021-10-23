const cartCounterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + Number(action.quantity);
    case "DECREMENT":
      return state - Number(action.quantity);
    default:
      return state;
  }
};

export default cartCounterReducer;
