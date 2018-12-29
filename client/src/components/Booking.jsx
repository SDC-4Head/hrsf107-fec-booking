import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Price from './Price';
import CalendarContainer from '../containers/CalendarContainer';
import DatePickerContainer from '../containers/DatePickerContainer';
import GuestSelectorContainer from '../containers/GuestSelectorContainer';
import Rating from './Rating';
import Total from './Total';
import { transformDate } from './utilities/utils';

class Booking extends React.Component {
  constructor(props) {
    super(props);

    const { roomId } = this.props;
    this.state = {
      stars: null,
      price: null,
      checkInDate: '',
      checkOutDate: '',
      serviceFee: 0,
      cleaningFee: 0,
      bookedDates: [],
      adults: 1,
      children: 0,
      infants: 0,
    };

    this.makeReservation = () => {
      const {
        checkInDate, checkOutDate, adults, children, infants,
      } = this.state;
      const payload = {
        startDate: checkInDate,
        endDate: checkOutDate,
        guests: {
          adults,
          children,
          infants,
        },
      };

      axios.patch(`/api/rooms/${roomId}`, payload)
        .then(() => {
          /* eslint-disable-next-line */
          window.alert('Booked');
          this.getData();
        });
    };

    this.getData = () => {
      axios.get(`/api/rooms/${roomId}`)
        .then(({ data }) => {
          const {
            price, stars, serviceFee, cleaningFee, bookedDates,
          } = data;
          this.setState({
            price, stars, serviceFee, cleaningFee, bookedDates,
          });
        });
    };
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const {
      price, stars,
      serviceFee, cleaningFee,
      bookedDates,
    } = this.state;

    const {
      showCheckInCalendar, showCheckOutCalendar, checkInDate, checkOutDate,
    } = this.props;

    return (
      <div id="booking-bar">
        <Price price={price} />
        <Rating stars={stars} />
        <hr />
        <span className="element-headers">Dates</span>
        <DatePickerContainer />
        {
          showCheckInCalendar || showCheckOutCalendar
            ? <CalendarContainer bookedDates={bookedDates} />
            : null
        }
        <span className="element-headers">Guests</span>
        <GuestSelectorContainer />
        {
          (checkInDate instanceof Date && checkOutDate instanceof Date)
            ? (
              <Total
                checkInDate={transformDate(checkInDate)}
                checkOutDate={transformDate(checkOutDate)}
                price={price}
                serviceFee={serviceFee}
                cleaningFee={cleaningFee}
              />
            )
            : null
        }
        <div>
          <input type="submit" onClick={this.makeReservation} value="Book" id="btn-book" />
        </div>
      </div>
    );
  }
}

Booking.defaultProps = {
  checkInDate: null,
  checkOutDate: null,
};

Booking.propTypes = {
  roomId: PropTypes.string.isRequired,
  showCheckInCalendar: PropTypes.bool.isRequired,
  showCheckOutCalendar: PropTypes.bool.isRequired,
  checkInDate: PropTypes.instanceOf(Date),
  checkOutDate: PropTypes.instanceOf(Date),
};

export default Booking;
