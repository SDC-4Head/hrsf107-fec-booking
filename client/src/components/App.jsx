/* eslint-env browser */
import React from 'react';
import { Route } from 'react-router-dom';
import Price from './Price';

const App = () => (

  <Route
    path="/rooms/:id"
    render={({ match }) => <Price roomId={match.params.id} />}
  />
);

export default App;
