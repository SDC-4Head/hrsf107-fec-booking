import { connect } from 'react-redux';
import Calendar from '../components/Calendar/Calendar';
import { selectCheckInDate, selectCheckOutDate, getCurrentDate } from '../actions/calenderActions';

const checkDates = (checkInDate, checkOutDate) => {
  const checkInDateEpoch  = new Date(checkInDate).valueOf();
  const chekOutDateEpoch = new Date(checkOutDate).valueOf();
  
  if (checkInDate > checkOutDate) {
    
  }

}

const mapStateToProps = state => ({
  checkInDate: state.checkInDate,
  checkOutDate: state.checkOutDate,
  currentMonth: state.currentDate.month,
  currentYear: state.currentDate.year,
  monthState: state.currentDate.state,
  showCheckInCalendar: state.checkIn,
  showCheckOutCalendar: state.checkOut,
});

// I need a function here that loads the current Month and current Date
const mapDispatchToProps = dispatch => ({
  loadCalendar: (date) => {
    dispatch(getCurrentDate(date));
  },
  handleDayClick: (date, isCheckIn, isCheckOut) => {
    if (isCheckIn) {
      dispatch(selectCheckInDate(date));
    } else if (isCheckOut) {
      dispatch(selectCheckOutDate(date));
    }
  },
});

const CalendarContainer = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default CalendarContainer;
