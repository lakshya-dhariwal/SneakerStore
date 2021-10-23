const cartListReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return (state = [...state, action.product]);
    case "UPDATE":
      return (state = action.newStateValue);
    default:
      return state;

    // case : ""
    //     return state;
  }
};

export default cartListReducer;
