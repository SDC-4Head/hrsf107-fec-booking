/* eslint-env browser */
import React from 'react';
import { Route } from 'react-router-dom';
// import Booking from './Booking';
import BookingContainer from '../containers/BookingContainer';

const App = () => (

  <Route
    path="/rooms/:id"
    render={({ match }) => <BookingContainer roomId={match.params.id} />}
  />
);

export default App;
