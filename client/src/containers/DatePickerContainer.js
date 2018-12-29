import { connect } from 'react-redux';
import DatePicker from '../components/DatePicker';
import { toggleCheckInCalendar, toggleCheckOutCalendar } from '../actions/calenderActions';

const mapStateToProps = state => ({
  checkInDate: state.checkInDate,
  checkOutDate: state.checkOutDate,
  showCheckInCalendar: state.checkIn,
  showCheckOutCalendar: state.checkOut,
});

const mapDispatchToProps = dispatch => ({
  handleCheckInClick: (displayCheckIn, displayCheckOut) => {
    dispatch(toggleCheckInCalendar(displayCheckIn));
    dispatch(toggleCheckOutCalendar(displayCheckOut));
  },
  handleCheckOutClick: (displayCheckOut, displayCheckIn) => {
    dispatch(toggleCheckOutCalendar(displayCheckOut));
    dispatch(toggleCheckInCalendar(displayCheckIn));
  },
});

const DatePickerContainer = connect(mapStateToProps, mapDispatchToProps)(DatePicker);

export default DatePickerContainer;
