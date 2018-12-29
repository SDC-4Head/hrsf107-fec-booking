import axios from 'axios';
import {
  setPrice, setStars, setCleaningFee, setBookedDates,
} from './bookingActions';

const getData = roomID => (
  (dispatch) => {
    axios.get(`/api/rooms/${roomID}`)
      .then(({ data }) => {
        dispatch(setPrice(data.price));
        dispatch(setStars(data.stars));
        dispatch(setCleaningFee(data.cleaningFee));
        dispatch(setBookedDates(data.bookedDates));
        dispatch(setPrice(data.price));
      });
  }
);

const reserveDate = roomID => (
  (dispatch) => {
    axios.patch(`/api/rooms/${roomID}`)
      .then(() => {
        /* eslint-disable-next-line */
        window.alert('Booked');
        dispatch(getData(roomID));
      });
  }
);

export { getData, reserveDate };
