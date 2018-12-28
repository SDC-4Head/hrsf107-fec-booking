import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Price from './Price';
import Calendar from './Calendar/Calendar';
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
      roomId,
      stars: null,
      price: null,
      checkInDate: '',
      checkOutDate: '',
      serviceFee: 0,
      cleaningFee: 0,
      showCheckInCalendar: false,
      showCheckOutCalendar: false,
      bookedDates: [],
    };

    this.handleCalendarClick = this.handleCalendarClick.bind(this);
  }

  componentDidMount() {
    const { roomId } = this.state;
    axios.get(`/api/rooms/${roomId}`)
      .then(({ data }) => {
        const {
          price, stars, serviceFee, cleaningFee, bookedDates,
        } = data;
        this.setState({
          price, stars, serviceFee, cleaningFee, bookedDates,
        });
      });
  }

  handleCalendarClick(date) {
    const { showCheckInCalendar, showCheckOutCalendar, checkInDate } = this.state;
    if (showCheckInCalendar) {
      this.setState({
        checkInDate: date,
        showCheckInCalendar: !showCheckInCalendar,
        showCheckOutCalendar: !showCheckOutCalendar,
      });
      return;
    }
    if (showCheckOutCalendar) {
      if (checkInDate.valueOf() > date.valueOf()) {
        this.setState({
          checkOutDate: checkInDate,
          checkInDate: date,
          showCheckInCalendar: false,
          showCheckOutCalendar: false,
        });
      } else {
        this.setState({
          checkOutDate: date,
          showCheckInCalendar: false,
          showCheckOutCalendar: false,
        });
      }
    }
  }

  render() {
    const {
      price, stars, checkInDate,
      checkOutDate, serviceFee, cleaningFee,
      bookedDates,
    } = this.state;

    const { showCheckInCalendar, showCheckOutCalendar } = this.props;

    return (
      <div id="booking-bar">
        <Price price={price} />
        <Rating stars={stars} />
        <hr />
        <span className="element-headers">Dates</span>
        <DatePickerContainer />
        {
          showCheckInCalendar || showCheckOutCalendar
            ? (
              <Calendar
                handleCalendarClick={this.handleCalendarClick}
                bookedDates={bookedDates}
                checkInDate={checkInDate}
                checkOutDate={checkOutDate}
                showCheckInCalendar={showCheckInCalendar}
                showCheckOutCalendar={showCheckOutCalendar}
              />
            )
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
          <input type="submit" value="Book" id="btn-book" />
        </div>
      </div>
    );
  }
}

Booking.propTypes = {
  roomId: PropTypes.string.isRequired,
  showCheckInCalendar: PropTypes.bool.isRequired,
  showCheckOutCalendar: PropTypes.bool.isRequired,
};

export default Booking;
