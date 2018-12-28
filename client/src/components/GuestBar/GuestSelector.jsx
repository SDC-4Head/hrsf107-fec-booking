import React from 'react';
import GuestOptionsList from './GuestOptionsList';


const GuestSelector = (props) => {
  const { showGuestOptions, handleGuestBarClick } = props;
  const determineGuestCount = () => {
    const { adults, children, infants } = props;
    const count = adults + children + infants;
    return count > 1 ? `${count} guests` : `${count} guest`;
  };

  return (
    <div id="guest-container">
      <button type="button" onClick={() => handleGuestBarClick(!showGuestOptions)} id="guest-selector">
        <span id="guest-label">{determineGuestCount()}</span>
        <i className="fas fa-chevron-down" />
      </button>
      {
        showGuestOptions
          ? <GuestOptionsList {...props} />
          : null
      }
    </div>
  );
};

export default GuestSelector;
