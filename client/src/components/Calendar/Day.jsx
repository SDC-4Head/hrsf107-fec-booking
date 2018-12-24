import React from 'react';
import PropTypes from 'prop-types';

const Day = ({ day }) => (
  <td>
    {day}
  </td>
);

Day.defaultProps = {
  day: null,
};

Day.propTypes = {
  day: PropTypes.number,
};

export default Day;
