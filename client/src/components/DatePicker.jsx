import React from 'react';
import PropTypes from 'prop-types';

const DatePicker = ({ handleDateChange, checkInDate, checkOutDate }) => (
  <div>
    <input type="date" value={checkInDate} onChange={e => handleDateChange(e.target.value, 'checkIn')} />
    <input type="date" value={checkOutDate} onChange={e => handleDateChange(e.target.value, 'checkOut')} />
  </div>
);

DatePicker.propTypes = {
  handleDateChange: PropTypes.func.isRequired,
  checkInDate: PropTypes.string.isRequired,
  checkOutDate: PropTypes.string.isRequired,

}

export default DatePicker;
