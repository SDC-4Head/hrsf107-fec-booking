/* eslint-env browser */
import React from 'react';
import { Route } from 'react-router-dom';
import Booking from './Booking';

const App = () => (

  <Route
    path="/rooms/:id"
    render={({ match }) => <Booking roomId={match.params.id} />}
  />
);

export default App;
