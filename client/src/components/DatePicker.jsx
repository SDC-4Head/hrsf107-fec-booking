import React from 'react';

class DatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <input type="date" />
        <input type="date" />
      </div>
    );
  }
}

export default DatePicker;
