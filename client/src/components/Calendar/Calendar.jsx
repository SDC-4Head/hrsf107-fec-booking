import React from 'react';
import PropTypes from 'prop-types';
import { generateCalendarState } from '../utilities/utils';
import Day from './Day';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMonth: '',
      currentYear: null,
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
    this.handlePreviousMonthClick = this.handlePreviousMonthClick.bind(this);
    this.handleNextMonthClick = this.handleNextMonthClick.bind(this);
  }

  componentDidMount() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const monthIndex = currentDate.getMonth();
    this.setState({
      currentMonth: months[monthIndex],
      monthState: generateCalendarState(months[monthIndex], currentYear),
      currentYear,
    });
  }

  // Need a function here that takes in the handles CalendarClick and decorates it.
  handleDayClick(e) {
    // this will be the reach into the booking bar to set the
    // checkIn or CheckOut Date depending on which calendar is open.
    const { handleCalendarClick } = this.props;
    const { currentMonth, currentYear } = this.state;
    const day = e.target.value;
    // console.log(`${currentMonth} ${day}, ${currentYear}`)
    const date = new Date(`${currentMonth} ${day}, ${currentYear}`);
    handleCalendarClick(date);
  }

  handlePreviousMonthClick() {
    const { currentMonth, currentYear } = this.state;
    let monthIndex = months.indexOf(currentMonth) - 1;
    if (monthIndex < 0) {
      monthIndex = months.length - 1;
      const previousYear = currentYear - 1;
      this.setState({
        currentMonth: months[monthIndex],
        currentYear: previousYear,
        monthState: generateCalendarState(months[monthIndex], previousYear),
      });
    } else {
      this.setState({
        currentMonth: months[monthIndex],
        monthState: generateCalendarState(months[monthIndex], currentYear),
      });
    }
  }

  handleNextMonthClick() {
    const { currentMonth, currentYear } = this.state;
    let monthIndex = months.indexOf(currentMonth) + 1;
    if (monthIndex > months.length - 1) {
      monthIndex = 0;
      const nextYear = currentYear + 1;
      this.setState({
        currentMonth: months[monthIndex],
        currentYear: nextYear,
        monthState: generateCalendarState(months[monthIndex], nextYear),
      });
    } else {
      this.setState({
        currentMonth: months[monthIndex],
        monthState: generateCalendarState(months[monthIndex], currentYear),
      });
    }
  }

  render() {
    const { monthState, currentMonth } = this.state;
    const calendar = monthState.map((week, weekIndex) => (
      <tr>
        {week.map((__, dayIndex) => (
          <Day day={monthState[weekIndex][dayIndex]} handleDayClick={this.handleDayClick} />
        ))}
      </tr>
    ));

    return (
      <div>
        <div id="calendar-banner">
          <button type="button" onClick={this.handlePreviousMonthClick}><i className="fas fa-long-arrow-alt-left left" /></button>
          <span id="month">{currentMonth}</span>
          <button type="button" onClick={this.handleNextMonthClick}><i className="fas fa-long-arrow-alt-right right" /></button>
        </div>
        <table id="calendar">
          <tbody>
            {calendar}
          </tbody>
        </table>
      </div>
    );
  }
}

Calendar.propTypes = {
  handleCalendarClick: PropTypes.func.isRequired,
};

export default Calendar;
