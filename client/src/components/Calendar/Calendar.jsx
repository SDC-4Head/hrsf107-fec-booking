import React from 'react';
import { generateCalendarState } from '../utilities/utils';
import Day from './Day';

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

  componentDidMount() {
    const year = new Date().getFullYear();
    this.setState({
      currentMonth: 'February',
      monthState: generateCalendarState('February', year),
    });
  }

  render() {
    const { monthState, currentMonth } = this.state;
    const calendar = monthState.map((week, weekIndex) => (
      <tr>
        {week.map((day, dayIndex) => <Day day={monthState[weekIndex][dayIndex]} />) }
      </tr>
    ));

    return (
      <div>
        <p>{currentMonth}</p>
        <table>
          <tbody>
            {calendar}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;
