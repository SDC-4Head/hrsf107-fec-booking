import React from 'react';
import PropTypes from 'prop-types';

const DatePicker = ({ handleDateClick, checkInDate, checkOutDate }) => (
  <div id="date-picker-container">
    <input type="text" readOnly value={checkInDate || 'Check In'} onClick={e => handleDateClick(e.target.value, 'checkIn')} className="date-picker" />
    <i className="fas fa-long-arrow-alt-right date-right" />
    <input type="text" readOnly value={checkOutDate || 'Check Out'} onClick={e => handleDateClick(e.target.value, 'checkOut')} className="date-picker" />
  </div>
);

DatePicker.propTypes = {
  handleDateClick: PropTypes.func.isRequired,
  checkInDate: PropTypes.string.isRequired,
  checkOutDate: PropTypes.string.isRequired,
};

export default DatePicker;
