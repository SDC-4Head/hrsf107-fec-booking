/* eslint-env browser */
import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ price }) => {
  if (price) {
    return (
      <div className="price">
        {`The price is ${price}`}
      </div>
    );
  }
  return <div>Loading...</div>
};

Price.defaultProps = {
  price: null,
};

Price.propTypes = {
  price: PropTypes.number,
};

export default Price;
