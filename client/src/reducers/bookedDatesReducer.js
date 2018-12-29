const bookedDatesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_BOOKED_DATES':
      return action.bookedDates;
    default:
      return state;
  }
};

export default bookedDatesReducer;
