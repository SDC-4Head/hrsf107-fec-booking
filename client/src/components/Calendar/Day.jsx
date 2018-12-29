import React from 'react';
import PropTypes from 'prop-types';
import { transformDate } from '../utilities/utils';

const Day = ({
  handleDayClick, date,
  bookedDates, checkInDate,
  checkOutDate, showCheckInCalendar,
  showCheckOutCalendar,
}) => {
  const checkIfValidDate = (checkDate) => {
    // check if the date is between any of the bookedDates
    for (let i = 0; i < bookedDates.length; i += 1) {
      const dates = bookedDates[i];
      const startDate = new Date(dates.startDate).valueOf();
      const endDate = new Date(dates.endDate).valueOf();
      if (checkDate.valueOf() >= startDate && checkDate.valueOf() <= endDate) {
        // not valid
        return false;
      }
    }
    return true;
  };

  const fillBetweenDates = () => {
    if (checkInDate instanceof Date && checkOutDate instanceof Date) {
      const startDate = checkInDate.valueOf();
      const endDate = checkOutDate.valueOf();
      if (date.valueOf() > startDate && date.valueOf() < endDate) {
        return true;
      }
    }
    return false;
  };

  if (date && checkIfValidDate(date)) {
    const isMatchingDate = (
      transformDate(checkInDate) === transformDate(date)
      || transformDate(checkOutDate) === transformDate(date)
    );
    const classes = fillBetweenDates() || isMatchingDate ? 'selected' : 'valid';
    return (
      <td className={classes}>
        <button type="button" onClick={() => handleDayClick(date, showCheckInCalendar, showCheckOutCalendar, checkInDate, checkOutDate)} value={date.getDate()} className="day">{date.getDate()}</button>
      </td>
    );
  }

  if (date && !checkIfValidDate(date)) {
    return (
      <td className="invalid">
        <button type="button" value={date.getDate()} className="day">{date.getDate()}</button>
      </td>
    );
  }

  return (
    <td>
      <button type="button" value={null} className="day null">{null}</button>
    </td>
  );
};

Day.defaultProps = {
  date: null,
  checkInDate: '',
  checkOutDate: '',
  bookedDates: [],
  handleDayClick: null,
  showCheckInCalendar: false,
  showCheckOutCalendar: false,
};

Day.propTypes = {
  date: PropTypes.instanceOf(Date),
  handleDayClick: PropTypes.func,
  bookedDates: PropTypes.instanceOf(Array),
  checkInDate: PropTypes.string,
  checkOutDate: PropTypes.string,
  showCheckInCalendar: PropTypes.bool,
  showCheckOutCalendar: PropTypes.bool,
};

export default Day;
