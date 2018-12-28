const changeChildrenReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_CHILDREN':
      return action.quantity;
    case 'DECREMENT_CHILDREN':
      return action.quantity < 0 ? 0 : action.quantity;
    default:
      return state;
  }
};

export default changeChildrenReducer;
