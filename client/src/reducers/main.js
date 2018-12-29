import { combineReducers } from 'redux';
import checkIn from './checkInCalendarReducer';
import checkOut from './checkOutCalendarReducer';
import guestOptions from './guestOptionsReducer';
import adults from './changeAdultReducer';
import children from './changeChildrenReducer';
import infants from './changeInfantsReducer';
import checkInDate from './selectCheckInReducer';
import checkOutDate from './selectCheckOutReducer';
import currentDate from './loadCalendarReducer';

const rootReducer = combineReducers({
  checkIn,
  checkOut,
  guestOptions,
  adults,
  children,
  infants,
  checkInDate,
  checkOutDate,
  currentDate,
});

export default rootReducer;
