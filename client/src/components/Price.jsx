/* eslint-env browser */
import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ roomId }) => <div>{roomId}</div>;

Price.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default Price;
