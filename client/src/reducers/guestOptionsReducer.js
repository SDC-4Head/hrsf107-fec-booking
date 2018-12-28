const guestOptionsReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_GUEST_OPTIONS':
      return action.isDisplayed;
    default:
      return state;
  }
};

export default guestOptionsReducer;
