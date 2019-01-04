const changeAdultReducer = (state = 1, action) => {
  switch (action.type) {
    case 'INCREMENT_ADULT':
      return action.quantity > 3 ? 3 : action.quantity;
    case 'DECREMENT_ADULT':
      return action.quantity < 1 ? 1 : action.quantity;
    default:
      return state;
  }
};

export default changeAdultReducer;
