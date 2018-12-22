import React from 'react';
import PropTypes from 'prop-types';
import GuestOptionsList from './GuestOptionsList';


const GuestSelector = ({ isClicked, handleClick }) => (
  <div>
    <input type="button" value="guests" onClick={handleClick} />
    {
      isClicked
        ? <GuestOptionsList />
        : null
    }
  </div>
);

GuestSelector.propTypes = {
  isClicked: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default GuestSelector;
