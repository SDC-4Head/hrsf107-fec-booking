const priceReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_PRICE':
      return action.price;
    default:
      return state;
  }
};

export default priceReducer;
