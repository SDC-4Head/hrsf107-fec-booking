import { connect } from 'react-redux';
import Calendar from '../components/Calendar/Calendar';
import {
  selectCheckInDate, selectCheckOutDate,
  getCurrentDate, getPreviousMonth,
  getNextMonth, toggleCheckOutCalendar,
  toggleCheckInCalendar, hoverOverCheckOutDate,
} from '../actions/calenderActions';

const isCheckInSmaller = (checkInDate, selectedDate) => {
  const checkInDateEpoch = checkInDate.valueOf();
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
  hoveredDate: state.hoveredDate,
});

const mapDispatchToProps = dispatch => ({
  loadCalendar: (date) => {
    dispatch(getCurrentDate(date));
  },
  handleDayClick: (date, isCheckIn, isCheckOut, checkInDate) => {
    if (isCheckIn) {
      dispatch(selectCheckInDate(date));
      dispatch(toggleCheckInCalendar(false));
      dispatch(toggleCheckOutCalendar(true));
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
  hoverOverDate: (date, showCheckOutCalendar) => {
    if (showCheckOutCalendar) {
      dispatch(hoverOverCheckOutDate(date));
      dispatch(selectCheckOutDate(date));
    }
  },
});

const CalendarContainer = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default CalendarContainer;
