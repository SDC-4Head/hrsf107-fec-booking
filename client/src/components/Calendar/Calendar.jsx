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
    };

    this.handlePreviousMonthClick = this.handlePreviousMonthClick.bind(this);
    this.handleNextMonthClick = this.handleNextMonthClick.bind(this);
  }

  componentDidMount() {
    const { loadCalendar } = this.props;
    loadCalendar(new Date());
  }

  // handleDayClick(e) {
  //   const { handleCalendarClick, showCheckInCalendar, showCheckOutCalendar } = this.props;
  //   const { currentMonth, currentYear } = this.props;
  //   const day = e.target.value;
  //   const date = new Date(`${currentMonth} ${day}, ${currentYear}`);
  //   if (showCheckInCalendar) {
  //     this.setState({
  //       checkInDate: date,
  //     }, () => {
  //       handleCalendarClick(date);
  //     });
  //   } else if (showCheckOutCalendar) {
  //     this.setState({
  //       checkOutDate: date,
  //     }, () => {
  //       handleCalendarClick(date);
  //     });
  //   }
  // }

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
      monthState, currentMonth, currentYear, handlePreviousCalendar,
    } = this.props;

    if (monthState) {
      const calendar = monthState.map((week, weekIndex) => (
        <tr>
          {week.map((__, dayIndex) => {
            const day = monthState[weekIndex][dayIndex];
            if (day) {
              const date = new Date(`${currentMonth} ${day}, ${currentYear}`);
              return (
                <Day {...this.props} date={date} />
                // handleDayClick={handleDayClick}
                // date={date}
                // bookedDates={bookedDates}
                // checkInDate={checkInDate}
                // checkOutDate={checkOutDate}
                // />
              );
            }
            return <Day handleDayClick={this.handleDayClick} date={null} />;
          })}
        </tr>
      ));

      return (
        <div>
          <div id="calendar-banner">
            <button type="button" onClick={() => handlePreviousCalendar(currentMonth, currentYear)}><i className="fas fa-long-arrow-alt-left left" /></button>
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
    return <p>loading</p>;
  }
}

Calendar.propTypes = {
  handleCalendarClick: PropTypes.func.isRequired,
  bookedDates: PropTypes.instanceOf(Array).isRequired,
  showCheckInCalendar: PropTypes.bool.isRequired,
  showCheckOutCalendar: PropTypes.bool.isRequired,
  checkInDate: PropTypes.string.isRequired,
  checkOutDate: PropTypes.string.isRequired,
  monthState: PropTypes.instanceOf(Array).isRequired,
  loadCalendar: PropTypes.func.isRequired,
};

export default Calendar;
