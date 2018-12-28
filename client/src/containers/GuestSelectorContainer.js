import { connect } from 'react-redux';
import GuestSelector from '../components/GuestBar/GuestSelector';
import showGuestOptionsList from '../actions/guestOptionsList';
import incrementAdultGuest from '../actions/incrementAdultGuest';
import decrementAdultGuest from '../actions/decrementAdultGuest';
import incrementChildren from '../actions/incrementChildren';
import decrementChildren from '../actions/decrementChildren';
import incrementInfants from '../actions/incrementInfants';
import decrementInfants from '../actions/decrementInfants';

const mapStateToProps = state => ({
  showGuestOptions: state.guestOptions,
  adults: state.adults,
  children: state.children,
  infants: state.infants,
});

const mapDispatchToProps = dispatch => ({
  handleGuestBarClick: (displayGuestOptions) => {
    dispatch(showGuestOptionsList(displayGuestOptions));
  },
  handleAddClick: (numberOfGuests, guestType) => {
    let action;
    if (guestType === 'adults') {
      action = incrementAdultGuest;
    } else if (guestType === 'children') {
      action = incrementChildren;
    } else if (guestType === 'infants') {
      action = incrementInfants;
    }
    dispatch(action(numberOfGuests));
  },
  handleSubtractClick: (numberOfAdults, guestType) => {
    let action;
    if (guestType === 'adults') {
      action = decrementAdultGuest;
    } else if (guestType === 'children') {
      action = decrementChildren;
    } else if (guestType === 'infants') {
      action = decrementInfants;
    }
    dispatch(action(numberOfAdults));
  },
});

const GuestSelectorContainer = connect(mapStateToProps, mapDispatchToProps)(GuestSelector);

export default GuestSelectorContainer;
