const loadCalendarReducer = (state = '', action) => {
  switch (action.type) {
    case 'LOAD_CALENDAR':
      return { month: action.month, year: action.year, state: action.state };
    case 'PREVIOUS_MONTH':
      return { month: action.month, year: action.year, state: action.state };
    case 'NEXT_MONTH':
      return { month: action.month, year: action.year, state: action.state };
    default:
      return state;
  }
};

export default loadCalendarReducer;
