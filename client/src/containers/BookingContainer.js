import { connect } from 'react-redux';
import Booking from '../components/Booking';
// import showCheckInCalendar from '../actions/checkInCalendar';

const mapStateToProps = state => ({
  showCheckInCalendar: state.checkIn,
  showCheckOutCalendar: state.checkOut,
});

const BookingContainer = connect(mapStateToProps, null)(Booking);

export default BookingContainer;
