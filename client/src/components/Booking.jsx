import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Price from './Price';
import DatePicker from './DatePicker';
import Rating from './Rating';
import GuestSelector from './GuestBar/GuestSelector';
import Total from './Total';

class Booking extends React.Component {
  constructor(props) {
    super(props);

    const { roomId } = this.props;
    this.state = {
      roomId,
      stars: null,
      price: null,
      isGuestBarClicked: false,
      checkInDate: '',
      checkOutDate: '',
      serviceFee: 0,
      cleaningFee: 0,
    };

    this.handleGuestBarClick = this.handleGuestBarClick.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  componentDidMount() {
    const { roomId } = this.state;
    axios.get(`/api/rooms/${roomId}`)
      .then(({ data }) => {
        const {
          price, stars, serviceFee, cleaningFee,
        } = data;
        this.setState({
          price, stars, serviceFee, cleaningFee,
        });
      });
  }

  handleDateChange(date, type) {
    if (type === 'checkIn') {
      this.setState({ checkInDate: date });
    } else if (type === 'checkOut') {
      this.setState({ checkOutDate: date });
    }
  }

  handleGuestBarClick() {
    const { isGuestBarClicked } = this.state;
    this.setState({ isGuestBarClicked: !isGuestBarClicked });
  }

  render() {
    const {
      price, stars, isGuestBarClicked, checkInDate, checkOutDate, serviceFee, cleaningFee,
    } = this.state;
    return (
      <div id="booking-bar">
        <Price price={price} />
        <Rating stars={stars} />
        <hr />
        <DatePicker
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          handleDateChange={this.handleDateChange}
        />
        <GuestSelector isClicked={isGuestBarClicked} handleClick={this.handleGuestBarClick} />
        {
          (checkInDate && checkOutDate)
            ? (
              <Total
                checkInDate={checkInDate}
                checkOutDate={checkOutDate}
                price={price}
                serviceFee={serviceFee}
                cleaningFee={cleaningFee}
              />
            )
            : null
        }
        <div>
          <input type="submit" value="Request to Book" />
        </div>
      </div>
    );
  }
}

Booking.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default Booking;
