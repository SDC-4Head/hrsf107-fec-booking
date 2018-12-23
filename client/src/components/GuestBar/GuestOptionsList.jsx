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

    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleSubtractClick = this.handleSubtractClick.bind(this);
  }

  handleAddClick(type) {
    let currentState = this.state[type];
    const newState = {};
    newState[type] = currentState + 1;
    this.setState(newState);
  }

  handleSubtractClick(type) {
    let currentState = this.state[type];
    const newState = {};
    newState[type] = currentState - 1;
    this.setState(newState);
  }

  render() {
    const { adults, children, infants } = this.state;
    return (
      <div>
        {/* <h1>{`Adults: ${adults}`}</h1> */}
        <GuestOptionEntry type="adults" guests={adults} handleAddClick={this.handleAddClick} handleSubtractClick={this.handleSubtractClick} />
        {/* <h1>{`Children: ${children}`}</h1> */}
        <GuestOptionEntry type="children" guests={children} handleAddClick={this.handleAddClick} handleSubtractClick={this.handleSubtractClick} />
        {/* <h1>{`Infants: ${infants}`}</h1> */}
        <GuestOptionEntry type="infants" guests={infants} handleAddClick={this.handleAddClick} handleSubtractClick={this.handleSubtractClick} />
      </div>
    );
  }
}

export default GuestOptions;
