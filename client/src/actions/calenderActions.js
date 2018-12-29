import {
  generateCalendarState,
  getMonthNameFromIndex, getMonthIndexFromName,
} from '../components/utilities/utils';

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
  checkIn: date,
});

const selectCheckOutDate = date => ({
  type: 'SELECT_CHECK_OUT',
  checkOut: date,
});

const getCurrentDate = (date) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return {
    type: 'LOAD_CALENDAR',
    month: getMonthNameFromIndex(date.getMonth()),
    year: date.getFullYear(),
    state: generateCalendarState(months[date.getMonth()], date.getFullYear()),
  };
};

const getPreviousMonth = (monthName, currentYear) => {
  if (getMonthIndexFromName(monthName) - 1 < 0) {
    const previousYear = currentYear - 1;
    return {
      type: 'PREVIOUS_MONTH',
      month: 'December',
      year: previousYear,
      /* eslint-disable-next-line */
      state: generateCalendarState('December', previousYear),
    };
  }
  return {
    type: 'PREVIOUS_MONTH',
    month: getMonthNameFromIndex(getMonthIndexFromName(monthName) - 1),
    year: currentYear,
    /* eslint-disable-next-line */
    state: generateCalendarState(getMonthNameFromIndex(getMonthIndexFromName(monthName) - 1), currentYear),
  };
};

const getNextMonth = (monthName, currentYear) => {
  if (getMonthIndexFromName(monthName) + 1 > 11) {
    const nextYear = currentYear + 1;
    return {
      type: 'NEXT_MONTH',
      month: 'January',
      year: nextYear,
      /* eslint-disable-next-line */
      state: generateCalendarState('January', nextYear),
    };
  }
  return {
    type: 'NEXT_MONTH',
    month: getMonthNameFromIndex(getMonthIndexFromName(monthName) + 1),
    year: currentYear,
    /* eslint-disable-next-line */
    state: generateCalendarState(getMonthNameFromIndex(getMonthIndexFromName(monthName) + 1), currentYear),
  };
};
export {
  toggleCheckOutCalendar, toggleCheckInCalendar,
  selectCheckInDate, selectCheckOutDate,
  getCurrentDate, getPreviousMonth,
  getNextMonth,
};
