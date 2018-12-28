import { combineReducers } from 'redux';
import checkIn from './checkInCalendarReducer';
import checkOut from './checkOutCalendarReducer';
import guestOptions from './guestOptionsReducer';
import adults from './changeAdultReducer';
import children from './changeChildrenReducer';
import infants from './changeInfantsReducer';

const rootReducer = combineReducers({
  checkIn,
  checkOut,
  guestOptions,
  adults,
  children,
  infants,
});

export default rootReducer;
