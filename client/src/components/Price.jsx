import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ data }) => <div>{ data }</div>;

Price.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Price;
