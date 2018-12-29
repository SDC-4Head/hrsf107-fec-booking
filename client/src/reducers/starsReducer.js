const starReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_STARS':
      return action.stars;
    default:
      return state;
  }
};

export default starReducer;
