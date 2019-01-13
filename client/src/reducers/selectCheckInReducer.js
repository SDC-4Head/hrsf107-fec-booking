const selectCheckInDate = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_CHECK_IN':
      return action.checkIn;
    default:
      return state;
  }
};

export default selectCheckInDate;
