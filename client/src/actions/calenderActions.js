import { generateCalendarState, transformDate } from '../components/utilities/utils';

const toggleCheckInCalendar = bool => ({
  type: 'TOGGLE_CHECK_IN',
  isDisplayed: bool,
});

const toggleCheckOutCalendar = bool => ({
  type: 'TOGGLE_CHECK_OUT',
  isDisplayed: bool,
});

const selectCheckInDate = date => ({
  type: 'SELECT_CHECK_IN',
  checkIn: transformDate(date),
});

const selectCheckOutDate = date => ({
  type: 'SELECT_CHECK_OUT',
  checkOut: transformDate(date),
});

const getCurrentDate = (date) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return {
    type: 'LOAD_CALENDAR',
    month: months[date.getMonth()],
    year: date.getFullYear(),
    state: generateCalendarState(months[date.getMonth()], date.getFullYear()),
  };
};

export {
  toggleCheckOutCalendar, toggleCheckInCalendar,
  selectCheckInDate, selectCheckOutDate,
  getCurrentDate,
};
