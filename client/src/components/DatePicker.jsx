import React from 'react';
import PropTypes from 'prop-types';

const DatePicker = ({ handleDateChange, checkInDate, checkOutDate }) => (
  <div>
    <input type="text" readOnly value={checkInDate} onClick={e => handleDateChange(e.target.value, 'checkIn')} />
    <i className="fas fa-arrow-right" />
    <input type="text" readOnly value={checkOutDate} onClick={e => handleDateChange(e.target.value, 'checkOut')} />
  </div>
);

DatePicker.propTypes = {
  handleDateChange: PropTypes.func.isRequired,
  checkInDate: PropTypes.string.isRequired,
  checkOutDate: PropTypes.string.isRequired,
};

export default DatePicker;
