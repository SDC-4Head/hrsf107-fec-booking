import React from 'react';
import PropType from 'prop-types';

const GuestOptionEntry = ({
  type,
  guests,
  handleAddClick,
  handleSubtractClick,
}) => (
  <div className="guest-entry">
    {type}
    <div className="guest-control">
      <input type="button" value="-" onClick={() => handleSubtractClick(guests - 1, type)} className="guest-button" />
      <span className="guest-number">{guests}</span>
      <input type="button" value="+" onClick={() => handleAddClick(guests + 1, type)} className="guest-button" />
    </div>
  </div>
);

GuestOptionEntry.defaultProps = {
  guests: 0,
};

GuestOptionEntry.propTypes = {
  guests: PropType.number,
  type: PropType.string.isRequired,
  handleAddClick: PropType.func.isRequired,
  handleSubtractClick: PropType.func.isRequired,
};

export default GuestOptionEntry;
