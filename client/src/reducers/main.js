import { combineReducers } from 'redux';
import checkIn from './checkInCalendarReducer';
import checkOut from './checkOutCalendarReducer';
import guestOptions from './guestOptionsReducer';

const rootReducer = combineReducers({
  checkIn,
  checkOut,
  guestOptions,
});

export default rootReducer;
