import { combineReducers } from 'redux';
import checkIn from './checkInCalendarReducer';
import checkOut from './checkOutCalendarReducer';

const rootReducer = combineReducers({
  checkIn,
  checkOut,
});

export default rootReducer;
