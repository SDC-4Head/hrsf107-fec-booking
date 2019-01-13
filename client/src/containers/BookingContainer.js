import { connect } from 'react-redux';
import Booking from '../components/Booking';
import { getData, reserveDate } from '../actions/serverActions';

const mapStateToProps = state => ({
  showCheckInCalendar: state.checkIn,
  showCheckOutCalendar: state.checkOut,
  showGuestOptions: state.guestOptions,
  checkInDate: state.checkInDate,
  checkOutDate: state.checkOutDate,
  price: state.price,
  stars: state.stars,
  bookedDates: state.bookedDates,
  cleaningFee: state.cleaningFee,
  serviceFee: state.serviceFee,
  adults: state.adults,
  children: state.children,
  infants: state.infants,
});

const mapDispatchToProps = dispatch => ({
  getData: (roomID) => {
    dispatch(getData(roomID));
  },
  makeReservation: (roomID, payload) => {
    dispatch(reserveDate(roomID, payload));
  },
});

const BookingContainer = connect(mapStateToProps, mapDispatchToProps)(Booking);

export default BookingContainer;
