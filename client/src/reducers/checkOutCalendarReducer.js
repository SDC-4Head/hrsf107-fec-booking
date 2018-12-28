const checkOutCalendarReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_CHECK_OUT':
      return action.isDisplayed;
    default:
      return state;
  }
};

export default checkOutCalendarReducer;
