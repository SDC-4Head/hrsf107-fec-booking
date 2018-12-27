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
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const monthIndex = currentDate.getMonth();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.setState({
      currentMonth: months[monthIndex],
      monthState: generateCalendarState('February', year),
    });
  }

  render() {
    const { monthState, currentMonth } = this.state;
    const calendar = monthState.map((week, weekIndex) => (
      <tr>
        {week.map((__, dayIndex) => <Day day={monthState[weekIndex][dayIndex]} />) }
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
