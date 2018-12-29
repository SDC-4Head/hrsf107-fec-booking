const hoverDateReducer = (state = null, action) => {
  switch (action.type) {
    case 'HOVER_DATE':
      return action.date;
    default:
      return state;
  }
};

export default hoverDateReducer;
