import React from 'react';
import PropTypes from 'prop-types';

// NEED TO ADD THE VALUE COMPONENT TO THESE INPUTS

const DatePicker = ({
  handleCheckInClick, handleCheckOutClick,
  showCheckInCalendar, showCheckOutCalendar,
  checkInDate, checkOutDate,
}) => {
  const activeCheckIn = showCheckInCalendar ? 'date-picker active-date-picker' : 'date-picker';
  const activeCheckOut = showCheckOutCalendar ? 'date-picker active-date-picker' : 'date-picker';
  return (
    <div id="date-picker-container">
      <input type="text" readOnly value={checkInDate} onClick={() => handleCheckInClick(!showCheckInCalendar, false)} className={activeCheckIn} />
      <i className="fas fa-long-arrow-alt-right date-right" />
      <input type="text" readOnly value={checkOutDate} onClick={() => handleCheckOutClick(!showCheckOutCalendar, false)} className={activeCheckOut} />
    </div>
  );
};

DatePicker.propTypes = {
  handleCheckInClick: PropTypes.func.isRequired,
  handleCheckOutClick: PropTypes.func.isRequired,
  checkInDate: PropTypes.string.isRequired,
  checkOutDate: PropTypes.string.isRequired,
  showCheckInCalendar: PropTypes.bool.isRequired,
  showCheckOutCalendar: PropTypes.bool.isRequired,
};

export default DatePicker;
