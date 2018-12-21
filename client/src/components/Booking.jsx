import React from 'react';
import PropTypes from 'prop-types';
import Price from './Price';

class Booking extends React.Component {
  constructor(props) {
    super(props);

    const { roomId } = this.props;
    this.state = { roomId };
  }

  render() {
    const { roomId } = this.state;
    return (
      <div>
        <Price roomId={roomId} />
      </div>
    );
  }
}

Booking.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default Booking;
