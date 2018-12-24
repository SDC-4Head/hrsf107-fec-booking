import React from 'react';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMonth: '',
      monthState: [
      // Sun    M     T     W     Th   F     Sat
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
      ],
    };
  }

  render() {
    const { monthState, currentMonth } = this.state;
    return (
      <div>Calendar</div>
    );
  }
}

export default Calendar;
