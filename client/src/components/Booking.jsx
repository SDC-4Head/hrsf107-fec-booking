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

    // this.handleCalendarClick = this.handleCalendarClick.bind(this);
    this.getNumberOfGuests = this.getNumberOfGuests.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getNumberOfGuests(guestObj) {
    const { adults, children, infants } = guestObj;
    this.setState({
      adults,
      children,
      infants,
    });
  }

  // handleCalendarClick(date) {
  //   const { showCheckInCalendar, showCheckOutCalendar, checkInDate } = this.state;
  //   if (showCheckInCalendar) {
  //     this.setState({
  //       checkInDate: date,
  //       showCheckInCalendar: !showCheckInCalendar,
  //       showCheckOutCalendar: !showCheckOutCalendar,
  //     });
  //     return;
  //   }
  //   if (showCheckOutCalendar) {
  //     if (checkInDate.valueOf() > date.valueOf()) {
  //       this.setState({
  //         checkOutDate: checkInDate,
  //         checkInDate: date,
  //         showCheckInCalendar: false,
  //         showCheckOutCalendar: false,
  //       });
  //     } else {
  //       this.setState({
  //         checkOutDate: date,
  //         showCheckInCalendar: false,
  //         showCheckOutCalendar: false,
  //       });
  //     }
  //   }
  // }

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
              <CalendarContainer bookedDates={bookedDates} />
            // <Calendar
            //   handleCalendarClick={this.handleCalendarClick}
            //   bookedDates={bookedDates}
            //   checkInDate={checkInDate}
            //   checkOutDate={checkOutDate}
            //   showCheckInCalendar={showCheckInCalendar}
            //   showCheckOutCalendar={showCheckOutCalendar}
            // />
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
          <input type="submit" onClick={this.makeReservation} value="Book" id="btn-book" />
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
