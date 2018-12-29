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
import price from './priceReducer';
import stars from './starsReducer';
import cleaningFee from './cleaningFeeReducer';
import bookedDates from './bookedDatesReducer';
import serviceFee from './serviceFeeReducer';

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
  price,
  stars,
  cleaningFee,
  bookedDates,
  serviceFee,
});

export default rootReducer;
