/*
This function takes in a string as an input and returns
which day of the week index the calendar starts at.
[Sun, Month, Tue, Wed, Thur, Fri, Sat]
*/

const getFirstDayInMonth = (month, year) => new Date(`${month}-1-${year}`).getDay();

const getLastDayInMonth = (month, day, year) => new Date(`${month}-${day}-${year}`).getDay();

const getNumberOfDaysInMonth = (month, year) => {
  const initialMonth = new Date(`${month}-1-${year}`);
  const nextMonthIndex = initialMonth.getMonth() + 1;
  const nextMonth = new Date(year, nextMonthIndex);
  const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;
  if (month === 'March') {
    return Math.floor((nextMonth - initialMonth) / MILLISECONDS_IN_DAY) + 1;
  }
  return Math.floor((nextMonth - initialMonth) / MILLISECONDS_IN_DAY);
};

const padCalendar = (firstDayInMonth, lastDayInMonth, calendar) => {
  for (let i = 0; i < firstDayInMonth; i += 1) {
    calendar.unshift(null);
  }

  for (let i = 0; i < 6 - lastDayInMonth; i += 1) {
    calendar.push(null);
  }
  return calendar;
};

// This function takes a 1D calendar and makes it 2D
const formatCalendar = (calendar) => {
  const formattedCalendar = [];
  let week = [];
  for (let i = 0; i < calendar.length; i += 1) {
    week.push(calendar[i]);
    if (week.length === 7) {
      formattedCalendar.push(week);
      week = [];
    }
  }
  return formattedCalendar;
};

const generateCalendarState = (month, year) => {
  const firstDayIndex = getFirstDayInMonth(month, year);
  const numberOfDaysInMonth = getNumberOfDaysInMonth(month, year);
  const lastDayIndex = getLastDayInMonth(month, numberOfDaysInMonth, year);
  let calendar = [];
  for (let i = 1; i <= numberOfDaysInMonth; i += 1) {
    calendar.push(i);
  }
  calendar = padCalendar(firstDayIndex, lastDayIndex, calendar);
  return formatCalendar(calendar);
};

const transformDate = (date) => {
  if (date instanceof Date) {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }
  return '';
};

const getMonthNameFromIndex = (monthIndex) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  return months[monthIndex];
};

const getMonthIndexFromName = (monthName) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  return months.indexOf(monthName);
};

module.exports.generateCalendarState = generateCalendarState;
module.exports.transformDate = transformDate;
module.exports.getMonthNameFromIndex = getMonthNameFromIndex;
module.exports.getMonthIndexFromName = getMonthIndexFromName;
