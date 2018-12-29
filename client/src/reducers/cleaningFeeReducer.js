const cleaningFeeReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_CLEANING_FEE':
      return action.cleaningFee;
    default:
      return state;
  }
};

export default cleaningFeeReducer;
