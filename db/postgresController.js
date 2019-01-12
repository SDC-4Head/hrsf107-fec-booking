const { Pool } = require('pg');

const pool = new Pool({
  user: 'agustind',
  host: '127.0.0.1',
  database: 'test',
  password: 'password'
});

pool.on('error', (err) => {
  console.log('Error', err);
});

const saveData = () => {
  for (let i = 1; i <= 10; i++) {
    const file = `/Users/agustind/Desktop/hrsf107-fec-booking/calendar${i}.csv`;
    pool.query(`COPY booking (id, price, stars, weeklyViewCount, serviceFee, weeklyDiscountPercent, isRareFind, cleaningFee) FROM \'${file}\' WITH (FORMAT csv, HEADER true);`, (err) => {
      if (err) {
        console.log('error', err);
      }
    });
  }
};

saveData();

pool.end();
