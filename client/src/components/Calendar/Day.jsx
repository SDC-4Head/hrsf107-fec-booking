import React from 'react';
import PropTypes from 'prop-types';

const Day = ({ day, handleDayClick }) => (
  <td>
    <button type="button" onClick={handleDayClick} value={day}>{day}</button>
  </td>
);

Day.defaultProps = {
  day: null,
};

Day.propTypes = {
  day: PropTypes.number,
};

export default Day;
