import { connect } from 'react-redux';
import Calendar from '../components/Calendar/Calendar';
import {
  selectCheckInDate, selectCheckOutDate,
  getCurrentDate, getPreviousMonth,
  getNextMonth, toggleCheckOutCalendar,
} from '../actions/calenderActions';

const isCheckInSmaller = (checkInDate, selectedDate) => {
  const checkInDateEpoch = new Date(checkInDate).valueOf();
  const checkOutDateEpoch = selectedDate.valueOf();

  if (checkInDateEpoch > checkOutDateEpoch) {
    return false;
  }
  return true;
};

const mapStateToProps = state => ({
  checkInDate: state.checkInDate,
  checkOutDate: state.checkOutDate,
  currentMonth: state.currentDate.month,
  currentYear: state.currentDate.year,
  monthState: state.currentDate.state,
  showCheckInCalendar: state.checkIn,
  showCheckOutCalendar: state.checkOut,
});

const mapDispatchToProps = dispatch => ({
  loadCalendar: (date) => {
    dispatch(getCurrentDate(date));
  },
  handleDayClick: (date, isCheckIn, isCheckOut, checkInDate) => {
    if (isCheckIn) {
      dispatch(selectCheckInDate(date));
    } else if (isCheckOut) {
      dispatch(selectCheckOutDate(date));
      if (!isCheckInSmaller(checkInDate, date)) {
        dispatch(selectCheckOutDate(new Date(checkInDate)));
        dispatch(selectCheckInDate(date));
      }
      dispatch(toggleCheckOutCalendar(false));
    }
  },
  handlePreviousCalendar: (monthIndex, currentYear) => {
    dispatch(getPreviousMonth(monthIndex, currentYear));
  },
  handleNextCalendar: (monthIndex, currentYear) => {
    dispatch(getNextMonth(monthIndex, currentYear));
  },
});

const CalendarContainer = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default CalendarContainer;
