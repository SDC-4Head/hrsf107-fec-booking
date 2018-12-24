import React from 'react';
import PropTypes from 'prop-types';
import GuestOptionEntry from './GuestOptionEntry';

const GuestOptions = ({
  adults,
  children,
  infants,
  handleAddClick,
  handleSubtractClick,
}) => (
  <div>
    <GuestOptionEntry type="adults" guests={adults} handleAddClick={handleAddClick} handleSubtractClick={handleSubtractClick} />
    <GuestOptionEntry type="children" guests={children} handleAddClick={handleAddClick} handleSubtractClick={handleSubtractClick} />
    <GuestOptionEntry type="infants" guests={infants} handleAddClick={handleAddClick} handleSubtractClick={handleSubtractClick} />
  </div>
);

GuestOptions.propTypes = {
  adults: PropTypes.number.isRequired,
  children: PropTypes.number.isRequired,
  infants: PropTypes.number.isRequired,
  handleAddClick: PropTypes.func.isRequired,
  handleSubtractClick: PropTypes.func.isRequired,
};

export default GuestOptions;
