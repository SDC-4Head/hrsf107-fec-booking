import React from 'react';
import PropTypes from 'prop-types';
import { transformDate } from './utilities/utils';

const DatePicker = ({
  handleCheckInClick, handleCheckOutClick,
  showCheckInCalendar, showCheckOutCalendar,
  checkInDate, checkOutDate,
}) => {
  const activeCheckIn = showCheckInCalendar ? 'date-picker active-date-picker' : 'date-picker';
  const activeCheckOut = showCheckOutCalendar ? 'date-picker active-date-picker' : 'date-picker';
  return (
    <div id="date-picker-container">
      <input type="text" readOnly value={transformDate(checkInDate) || 'Check In'} onClick={() => handleCheckInClick(!showCheckInCalendar, false)} className={activeCheckIn} />
      <i className="fas fa-long-arrow-alt-right date-right" />
      <input type="text" readOnly value={transformDate(checkOutDate) || 'Check Out'} onClick={() => handleCheckOutClick(!showCheckOutCalendar, false)} className={activeCheckOut} />
    </div>
  );
};

DatePicker.defaultProps = {
  checkInDate: null,
  checkOutDate: null,
};

DatePicker.propTypes = {
  handleCheckInClick: PropTypes.func.isRequired,
  handleCheckOutClick: PropTypes.func.isRequired,
  checkInDate: PropTypes.instanceOf(Date),
  checkOutDate: PropTypes.instanceOf(Date),
  showCheckInCalendar: PropTypes.bool.isRequired,
  showCheckOutCalendar: PropTypes.bool.isRequired,
};

export default DatePicker;
