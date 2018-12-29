const setPrice = price => ({
  type: 'SET_PRICE',
  price,
});

const setStars = stars => ({
  type: 'SET_STARS',
  stars,
});

const setCleaningFee = cleaningFee => ({
  type: 'SET_CLEANING_FEE',
  cleaningFee,
});

const setBookedDates = bookedDates => ({
  type: 'SET_BOOKED_DATES',
  bookedDates,
});

export {
  setPrice, setStars, setCleaningFee, setBookedDates,
};
