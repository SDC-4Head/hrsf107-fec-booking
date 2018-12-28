const toggleCheckInCalendar = bool => ({
  type: 'TOGGLE_CHECK_IN',
  isDisplayed: bool,
});

const toggleCheckOutCalendar = bool => ({
  type: 'TOGGLE_CHECK_OUT',
  isDisplayed: bool,
});

export { toggleCheckOutCalendar, toggleCheckInCalendar };
