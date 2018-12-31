import React from 'react';
import Price from './Price';
import CalendarContainer from '../containers/CalendarContainer';
import DatePickerContainer from '../containers/DatePickerContainer';
import GuestSelectorContainer from '../containers/GuestSelectorContainer';
import Rating from './Rating';
import Total from './Total';

import styles from '../../dist/styles/styles.css';

const Booking = (props) => {
  const {
    stars, getData, roomId, price, bookedDates, checkInDate,
    checkOutDate, adults, children,
    infants, makeReservation, showCheckInCalendar, showCheckOutCalendar,
  } = props;
  if (!price) {
    getData(roomId);
    return <p>Loading...</p>;
  }
  const payload = {
    startDate: checkInDate,
    endDate: checkOutDate,
    guests: {
      adults,
      children,
      infants,
    },
  };
  return (
    <div id="booking-bar">
      <Price price={price} />
      <Rating stars={stars} />
      <hr />
      <span className="element-headers">Dates</span>
      <DatePickerContainer />
      {
        showCheckInCalendar || showCheckOutCalendar
          ? <CalendarContainer bookedDates={bookedDates} />
          : null
      }
      <span className="element-headers">Guests</span>
      <GuestSelectorContainer />
      {
        checkInDate instanceof Date && checkOutDate instanceof Date
          ? <Total {...props} />
          : null
      }
      <input type="submit" onClick={() => makeReservation(roomId, payload)} value="Book" id="btn-book" />
    </div>
  );
};

export default Booking;
