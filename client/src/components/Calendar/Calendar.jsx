import React from 'react';
import PropTypes from 'prop-types';
import { generateCalendarState } from '../utilities/utils';
import Day from './Day';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    const { checkInDate, checkOutDate } = this.props;
    this.state = {
      currentMonth: '',
      checkInDate,
      checkOutDate,
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

  handleDayClick(e) {
    const { handleCalendarClick, showCheckInCalendar, showCheckOutCalendar } = this.props;
    const { currentMonth, currentYear } = this.state;
    const day = e.target.value;
    const date = new Date(`${currentMonth} ${day}, ${currentYear}`);
    if (showCheckInCalendar) {
      this.setState({
        checkInDate: date,
      }, () => {
        handleCalendarClick(date);
      });
    } else if (showCheckOutCalendar) {
      this.setState({
        checkOutDate: date,
      }, () => {
        handleCalendarClick(date);
      });
    }
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
    const {
      monthState, currentMonth, currentYear, checkInDate, checkOutDate,
    } = this.state;
    const { bookedDates } = this.props;
    const calendar = monthState.map((week, weekIndex) => (
      <tr>
        {week.map((__, dayIndex) => {
          const day = monthState[weekIndex][dayIndex];
          if (day) {
            const date = new Date(`${currentMonth} ${day}, ${currentYear}`);
            return (
              <Day
                handleDayClick={this.handleDayClick}
                date={date}
                bookedDates={bookedDates}
                checkInDate={checkInDate}
                checkOutDate={checkOutDate}
              />
            );
          }
          return <Day handleDayClick={this.handleDayClick} date={null} />;
        })}
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
  bookedDates: PropTypes.instanceOf(Array).isRequired,
  showCheckInCalendar: PropTypes.bool.isRequired,
  showCheckOutCalendar: PropTypes.bool.isRequired,
  checkInDate: PropTypes.instanceOf(Date).isRequired,
  checkOutDate: PropTypes.instanceOf(Date).isRequired,
};

export default Calendar;
