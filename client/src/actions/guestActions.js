const decrementAdults = num => ({
  type: 'DECREMENT_ADULT',
  quantity: num,
});

const decrementChildren = num => ({
  type: 'DECREMENT_CHILDREN',
  quantity: num,
});

const decrementInfants = num => ({
  type: 'DECREMENT_INFANTS',
  quantity: num,
});

const incrementAdults = num => ({
  type: 'INCREMENT_ADULT',
  quantity: num,
});

const incrementChildren = num => ({
  type: 'INCREMENT_CHILDREN',
  quantity: num,
});

const incrementInfants = num => ({
  type: 'INCREMENT_INFANTS',
  quantity: num,
});

const toggleGuestOptions = bool => ({
  type: 'TOGGLE_GUEST_OPTIONS',
  isDisplayed: bool,
});


export {
  decrementAdults, decrementChildren,
  decrementInfants, incrementAdults,
  incrementChildren, incrementInfants,
  toggleGuestOptions,
};
