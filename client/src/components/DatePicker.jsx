import React from 'react';
import PropTypes from 'prop-types';

const DatePicker = ({
  handleDateClick, checkInDate, checkOutDate, showCheckInCalendar, showCheckOutCalendar,
}) => {
  const activeCheckIn = showCheckInCalendar ? 'date-picker active-date-picker' : 'date-picker';
  const activeCheckOut = showCheckOutCalendar ? 'date-picker active-date-picker' : 'date-picker';
  return (
    <div id="date-picker-container">
      <input type="text" readOnly value={checkInDate || 'Check In'} onClick={e => handleDateClick(e.target.value, 'checkIn')} className={activeCheckIn} />
      <i className="fas fa-long-arrow-alt-right date-right" />
      <input type="text" readOnly value={checkOutDate || 'Check Out'} onClick={e => handleDateClick(e.target.value, 'checkOut')} className={activeCheckOut} />
    </div>
  );
};

DatePicker.propTypes = {
  handleDateClick: PropTypes.func.isRequired,
  checkInDate: PropTypes.string.isRequired,
  checkOutDate: PropTypes.string.isRequired,
  showCheckInCalendar: PropTypes.bool.isRequired,
  showCheckOutCalendar: PropTypes.bool.isRequired,
};

export default DatePicker;
