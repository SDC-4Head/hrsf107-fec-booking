const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const { Pool } = require('pg');

require('newrelic');

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'booking',
  password: 'password',
});

pool.on('connect', () => {
  console.log('successful connection');
});

const app = express();
const PORT = 6565;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(morgan('tiny'));
app.use(bodyparser.json());
app.use(express.static('client/dist'));

app.get('/api/rooms/:id', (req, res) => {
  console.log('get fires');
  const { id } = req.params;

  let hotelObject;
  let calendarObject;

  const queryHotel = `SELECT * 
  FROM booking.booking 
  WHERE booking.booking.id = ${id};`;
  const queryCalender = `SELECT json_agg(bookedDates) 
    AS "bookedDates" 
    FROM (SELECT startdate 
    AS "startDate", 
    enddate AS "endDate" 
    FROM booking.hotels 
    WHERE booking.hotels.hotelfk = ${id}) 
    AS bookedDates;`;
  pool.query(queryHotel, (errHotel, hotel) => {
    if (errHotel) {
      res.status(500);
    } else {
      hotelObject = hotel.rows;
      pool.query(queryCalender, (errCalendar, dates) => {
        if (errCalendar) {
          res.status(500);
        } else {
          calendarObject = dates.rows;
          res.status(200)
            .send({
              hotelObject,
              calendarObject,
            });
        }
      });
    }
  });
});


app.patch('/api/rooms/:id', (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const insertBooking = 'INSERT INTO booking.hotels(hotelfk, startdate, enddate) VALUES ($1, $2, $3)';
  const queryParams = [id, payload.startDate, payload.endDate];
  pool.query(insertBooking, queryParams, (err, success) => {
    if (err) {
      res.status(500)
        .send(err);
    } else {
      res.status(201)
        .send(success);
    }
  });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});

app.listen(PORT, () => {
  /* eslint-disable-next-line */
  console.log(`Server listening on port: ${PORT}`);
});
