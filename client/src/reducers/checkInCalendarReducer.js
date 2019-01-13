const checkInCalendarReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_CHECK_IN':
      return action.isDisplayed;
    default:
      return state;
  }
};

export default checkInCalendarReducer;
