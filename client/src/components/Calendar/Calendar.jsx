import React from 'react';
import PropTypes from 'prop-types';
import Day from './Day';

const Calendar = (props) => {
  const {
    loadCalendar, monthState,
    currentMonth, currentYear,
    handlePreviousCalendar, handleNextCalendar, hoveredDate,
  } = props;
  if (!monthState) {
    loadCalendar(new Date());
    return <p>loading</p>;
  }
  const calendar = monthState.map((week, weekIndex) => (
    <tr>
      {week.map((__, dayIndex) => {
        const day = monthState[weekIndex][dayIndex];
        if (day) {
          const date = new Date(`${currentMonth} ${day}, ${currentYear}`);
          return <Day {...props} date={date} />;
        }
        return <Day date={null} />;
      })}
    </tr>
  ));
  return (
    <div>
      <div id="calendar-banner">
        <button type="button" onClick={() => handlePreviousCalendar(currentMonth, currentYear)}><i className="fas fa-long-arrow-alt-left left" /></button>
        <span id="month">{currentMonth}</span>
        <button type="button" onClick={() => handleNextCalendar(currentMonth, currentYear)}><i className="fas fa-long-arrow-alt-right right" /></button>
      </div>
      <table id="calendar">
        <tbody>
          {calendar}
        </tbody>
      </table>
    </div>
  );
};

Calendar.defaultProps = {
  handleNextCalendar: null,
  currentMonth: null,
  currentYear: null,
  monthState: null,
};

Calendar.propTypes = {
  handleNextCalendar: PropTypes.func,
  handlePreviousCalendar: PropTypes.func.isRequired,
  currentMonth: PropTypes.string,
  currentYear: PropTypes.number,
  monthState: PropTypes.instanceOf(Array),
  loadCalendar: PropTypes.func.isRequired,
};

export default Calendar;
