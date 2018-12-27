import React from 'react';
import PropTypes from 'prop-types';

const Day = ({ handleDayClick, date, bookedDates }) => {
  const checkIfValidDate = (checkDate) => {
    // check if the date is between any of the bookedDates
    for (let i = 0; i < bookedDates.length; i += 1) {
      const dates = bookedDates[i];
      const startDate = new Date(dates.startDate).valueOf();
      const endDate = new Date(dates.endDate).valueOf();
      if (checkDate.valueOf() > startDate && checkDate.valueOf() < endDate) {
        // not valid
        return false;
      }
    }
    return true;
  };

  if (date && checkIfValidDate(date)) {
    return (
      <td className="valid">
        <button type="button" onClick={handleDayClick} value={date.getDate()} className="day">{date.getDate()}</button>
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
};

Day.propTypes = {
  date: PropTypes.instanceOf(Date),
  handleDayClick: PropTypes.func.isRequired,
  bookedDates: PropTypes.instanceOf(Array).isRequired,
};

export default Day;
