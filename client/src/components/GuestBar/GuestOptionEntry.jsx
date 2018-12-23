import React from 'react';
import PropType from 'prop-types';

const GuestOptionEntry = ({ type, guests, handleAddClick, handleSubtractClick }) => (
  <div className="guest-entry">
    {type}
    <div className="guest-control">
      <input type="button" value="+" onClick={() => handleAddClick(type)} />
      {guests}
      <input type="button" value="-" onClick={() => handleSubtractClick(type)} />
    </div>
  </div>
);

GuestOptionEntry.defaultProps = {
  guests: 0,
};

GuestOptionEntry.propTypes = {
  guests: PropType.number,
  type: PropType.string.isRequired,
};

export default GuestOptionEntry;
