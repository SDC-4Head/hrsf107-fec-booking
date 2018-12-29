const serviceFeeReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_SERVICE_FEE':
      return action.serviceFee;
    default:
      return state;
  }
};

export default serviceFeeReducer;
