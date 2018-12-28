import { connect } from 'react-redux';
import GuestSelector from '../components/GuestBar/GuestSelector';
import showGuestOptionsList from '../actions/guestOptionsList';

const mapStateToProps = state => ({
  showGuestOptions: state.guestOptions,
});

const mapDispatchToProps = dispatch => ({
  handleGuestBarClick: (displayGuestOptions) => {
    dispatch(showGuestOptionsList(displayGuestOptions));
  },
});

const GuestSelectorContainer = connect(mapStateToProps, mapDispatchToProps)(GuestSelector);

export default GuestSelectorContainer;
