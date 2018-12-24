import React from 'react';
import PropTypes from 'prop-types';

const Day = ({ day }) => (
  <td>
    {day}
  </td>
);

Day.propTypes = {
  day: PropTypes.number.isRequired,
};

export default Day;
