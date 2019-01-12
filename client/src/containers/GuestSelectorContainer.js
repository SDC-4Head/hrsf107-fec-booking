import { connect } from 'react-redux';
import GuestSelector from '../components/GuestBar/GuestSelector';
import {
  incrementAdults, decrementAdults,
  incrementChildren, decrementChildren,
  incrementInfants, decrementInfants,
} from '../actions/guestActions';

const mapStateToProps = state => ({
  showGuestOptions: state.guestOptions,
  adults: state.adults,
  children: state.children,
  infants: state.infants,
});

const mapDispatchToProps = dispatch => ({
  handleAddClick: (numberOfGuests, guestType) => {
    let action;
    if (guestType === 'adults') {
      action = incrementAdults;
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
      action = decrementAdults;
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
