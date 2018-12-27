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

    this.handleDayClick = this.handleDayClick.bind(this);
  }

  componentDidMount() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const monthIndex = currentDate.getMonth();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.setState({
      currentMonth: months[monthIndex],
      monthState: generateCalendarState(months[monthIndex], year),
    });
  }

  // Need a function here that takes in the handles CalendarClick and decorates it.
  handleDayClick(e) {
    // this will be the reach into the booking bar to set the
    // checkIn or CheckOut Date depending on which calendar is open.
    const { handleCalendarClick } = this.props;
    const { currentMonth } = this.state;
    // let's decorate the date and send it off.
    const day = e.target.value;
    // need to a state for year, but for now I'll hard code a date.
    const date = new Date(`${currentMonth} ${day}, 2019`);
    handleCalendarClick(date);
  }

  render() {
    const { monthState, currentMonth } = this.state;
    const calendar = monthState.map((week, weekIndex) => (
      <tr>
        {week.map((__, dayIndex) => <Day day={monthState[weekIndex][dayIndex]} handleDayClick={this.handleDayClick} />) }
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
