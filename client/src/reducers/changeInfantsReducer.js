const changeInfantsReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_INFANTS':
      return action.quantity;
    case 'DECREMENT_INFANTS':
      return action.quantity < 0 ? 0 : action.quantity;
    default:
      return state;
  }
};

export default changeInfantsReducer;
