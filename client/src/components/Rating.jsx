import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ stars }) => (
  <div>
    {`${Math.floor(stars)} stars`}
  </div>
);

Rating.propTypes = {
  stars: PropTypes.number.isRequired,
};

export default Rating;
