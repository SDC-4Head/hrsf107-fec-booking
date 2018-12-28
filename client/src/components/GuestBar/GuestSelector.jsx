import React from 'react';
import PropTypes from 'prop-types';
import GuestOptionsList from './GuestOptionsList';


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
    let { [guestType]: count } = this.state;
    this.setState({
      [guestType]: count += 1,
    });
  }

  handleSubtractClick(guestType) {
    let { [guestType]: count } = this.state;
    const checkIfNegative = num => num < 0;
    count -= 1;
    this.setState({
      [guestType]: checkIfNegative(count) ? 0 : count,
    });
  }

  determineGuestCount() {
    const count = Object.values(this.state).reduce((a, v) => a + v);
    return count > 1 ? `${count} guests` : `${count} guest`;
  }

  render() {
    const { showGuestOptions, handleGuestBarClick } = this.props;
    return (
      <div id="guest-container">
        <button type="button" onClick={() => handleGuestBarClick(!showGuestOptions)} id="guest-selector">
          <span id="guest-label">{this.determineGuestCount()}</span>
          <i className="fas fa-chevron-down" />
        </button>
        {
          showGuestOptions
            ? (
              <GuestOptionsList
                {...this.state}
                handleAddClick={this.handleAddClick}
                handleSubtractClick={this.handleSubtractClick}
              />
            )
            : null
        }
      </div>
    );
  }
}

GuestSelector.propTypes = {
  showGuestOptions: PropTypes.bool.isRequired,
  handleGuestBarClick: PropTypes.func.isRequired,
};

export default GuestSelector;
