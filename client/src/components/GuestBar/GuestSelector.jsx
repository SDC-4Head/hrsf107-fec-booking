import React from 'react';
import GuestOptionsList from './GuestOptionsList';


<<<<<<< HEAD
const GuestSelector = (props) => {
  const { showGuestOptions, handleGuestBarClick } = props;
  const determineGuestCount = () => {
    const { adults, children, infants } = props;
    const count = adults + children + infants;
=======
class GuestSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      adults: 1,
      children: 0,
      infants: 0,
    };

    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleSubtractClick = this.handleSubtractClick.bind(this);
  }

  handleAddClick(guestType) {
    const { getNumberOfGuests } = this.props;
    let { [guestType]: count } = this.state;
    this.setState({
      [guestType]: count += 1,
    }, () => {
      getNumberOfGuests(this.state);
    });
  }

  handleSubtractClick(guestType) {
    const { getNumberOfGuests } = this.props;
    let { [guestType]: count } = this.state;
    const checkIfNegative = num => num < 0;
    count -= 1;
    this.setState({
      [guestType]: checkIfNegative(count) ? 0 : count,
    }, () => {
      getNumberOfGuests(this.state);
    });
  }

  determineGuestCount() {
    const count = Object.values(this.state).reduce((a, v) => a + v);
>>>>>>> d89bd2d9ddf0f6b6ed354adb8e8f54b873c8663c
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
