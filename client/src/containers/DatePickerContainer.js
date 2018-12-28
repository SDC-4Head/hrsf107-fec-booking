import { connect } from 'react-redux';
import DatePicker from '../components/DatePicker';
import showCheckInCalendar from '../actions/checkInCalendar';
import showCheckOutCalendar from '../actions/checkOutCalendar';

const mapStateToProps = state => ({
  showCheckInCalendar: state.checkIn,
  showCheckOutCalendar: state.checkOut,
});

const mapDispatchToProps = dispatch => ({
  handleCheckInClick: (displayCheckIn, displayCheckOut) => {
    dispatch(showCheckInCalendar(displayCheckIn));
    dispatch(showCheckOutCalendar(displayCheckOut));
  },
  handleCheckOutClick: (displayCheckOut, displayCheckIn) => {
    dispatch(showCheckOutCalendar(displayCheckOut));
    dispatch(showCheckInCalendar(displayCheckIn));
  },
});

const DatePickerContainer = connect(mapStateToProps, mapDispatchToProps)(DatePicker);

export default DatePickerContainer;
