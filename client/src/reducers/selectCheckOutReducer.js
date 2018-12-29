const selectCheckOutDate = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_CHECK_OUT':
      return action.checkOut;
    default:
      return state;
  }
};

export default selectCheckOutDate;
