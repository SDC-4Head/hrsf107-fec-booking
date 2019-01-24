require('newrelic');

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'booking',
  password: 'password',
});

pool.on('error', (err) => {
  console.log('Error', err);
});

const saveDataHotel = async () => {
  for (let i = 1; i <= 10; i++) {
    const before = Date.now();
    const file2 = `/data_intake/hotel${i}.csv`;
    await pool.query(`COPY booking.hotels (bookingId, hotelFK, startDate, endDate) FROM \'${file2}\' DELIMITERS ',' CSV HEADER;`, (err) => {
      const after = Date.now();
      if (err) {
        console.log('error', err);
      } else {
        console.log('success hotel');
        console.log(`CSV file copy to POSTGRES SERVER took: ${(after - before) / 60000} minutes`);
      }
    });
  }
};

saveDataHotel();

const saveDataCalender = async () => {
  for (let i = 1; i <= 10; i++) {
    const before = Date.now();
    const file = `/data_intake/calendar${i}.csv`;
    await pool.query(`COPY booking.booking (price, stars, weeklyViewCount, serviceFee, weeklyDiscountPercent, isRareFind, cleaningFee) FROM \'${file}\' DELIMITERS ',' CSV HEADER;`, (err) => {
      const after = Date.now();
      if (err) {
        console.log('error', err);
      } else {
        console.log('success calender');
        console.log(`CSV file copy to POSTGRES SERVER took: ${(after - before) / 60000} minutes`);
      }
    });
  }
};

saveDataCalender();
