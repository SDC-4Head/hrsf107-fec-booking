/* eslint-env browser */
import React from 'react';
import { Route } from 'react-router-dom';
import Price from './Price';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    return (
      <Route
        path="/rooms/:id"
        render={({ match }) => <Price roomId={match.params.id} />}
      />
    );
  }
};

export default App;
