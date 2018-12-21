import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Price from './Price';
import DatePicker from './DatePicker';

class Booking extends React.Component {
  constructor(props) {
    super(props);

    const { roomId } = this.props;
    this.state = {
      roomId,
      price: null,
    };
  }

  componentDidMount() {
    const { roomId } = this.state;
    axios.get(`/api/rooms/${roomId}`)
      .then(({ data }) => {
        const { price } = data;
        this.setState({ price });
      });
  }

  render() {
    const { price } = this.state;
    return (
      <div>
        <Price price={price} />
        <hr />
        <DatePicker />
      </div>
    );
  }
}

Booking.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default Booking;
