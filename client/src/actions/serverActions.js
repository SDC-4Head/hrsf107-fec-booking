import axios from 'axios';
import {
  setPrice, setStars, setCleaningFee, setBookedDates, setServiceFee,
} from './bookingActions';

const getData = roomID => (
  (dispatch) => {
    axios.get((`/api/rooms/${roomID}`), { headers: { 'Access-Control-Allow-Origin': 'https://s3-us-west-1.amazonaws.com/sdc-calendar/bundle.js' } })
      .then(({ data }) => {
        console.log('this is data', data);
        dispatch(setPrice(data.hotelObject[0].price));
        dispatch(setStars(data.hotelObject[0].stars));
        dispatch(setCleaningFee(data.hotelObject[0].cleaningfee));
        dispatch(setBookedDates(data.calendarObject[0].bookedDates));
        dispatch(setPrice(data.hotelObject[0].price));
        dispatch(setServiceFee(data.hotelObject[0].servicefee));
      });
  }
);

const reserveDate = (roomID, payload) => (
  (dispatch) => {
    axios.patch(`/api/rooms/${roomID}`, payload)
      .then(() => {
        /* eslint-disable-next-line */
        window.alert('Booked');
        dispatch(getData(roomID));
      });
  }
);

export { getData, reserveDate };
