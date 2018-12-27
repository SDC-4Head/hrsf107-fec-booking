import React from 'react';
import PropTypes from 'prop-types';

const DatePicker = ({ handleDateClick, checkInDate, checkOutDate }) => (
  <div>
    <input type="text" readOnly value={checkInDate || 'Check In'} onClick={e => handleDateClick(e.target.value, 'checkIn')} />
    <i className="fas fa-arrow-right" />
    <input type="text" readOnly value={checkOutDate || 'Check Out'} onClick={e => handleDateClick(e.target.value, 'checkOut')} />
  </div>
);

DatePicker.propTypes = {
  handleDateClick: PropTypes.func.isRequired,
  checkInDate: PropTypes.string.isRequired,
  checkOutDate: PropTypes.string.isRequired,
};

export default DatePicker;
