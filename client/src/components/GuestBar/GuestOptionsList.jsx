import React from 'react';
import GuestOptionEntry from './GuestOptionEntry';

class GuestOptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      adults: 1,
      children: 0,
      infants: 0,
    };
  }

  render() {
    const { adults, children, infants } = this.state;
    return (
      <div>
        <h1>{`Adults: ${adults}`}</h1>
        <GuestOptionEntry />
        <h1>{`Children: ${children}`}</h1>
        <GuestOptionEntry />
        <h1>{`Infants: ${infants}`}</h1>
        <GuestOptionEntry />
      </div>
    );
  }
}

export default GuestOptions;
