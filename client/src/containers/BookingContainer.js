import { connect } from 'react-redux';
import Booking from '../components/Booking';

const mapStateToProps = state => ({
  showCheckInCalendar: state.checkIn,
  showCheckOutCalendar: state.checkOut,
  showGuestOptions: state.guestOptions,
  checkInDate: state.checkInDate,
  checkOutDate: state.checkOutDate,
});

const BookingContainer = connect(mapStateToProps, null)(Booking);

export default BookingContainer;
