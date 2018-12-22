import React from 'react';

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
        <h1>{`Children: ${children}`}</h1>
        <h1>{`Infants: ${infants}`}</h1>
      </div>
    );
  }
}

export default GuestOptions;
