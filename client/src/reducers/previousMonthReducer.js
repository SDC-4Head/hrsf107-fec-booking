const previousMonthReducer = (state, action) => {
  switch (action.type) {
    case 'PREVIOUS_MONTH':
      return action.month;
    default:
      return state;
  }
};

export default previousMonthReducer;
