
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'booking',
  password: 'password'
});

pool.on('error', (err) => {
  console.log('Error', err);
});

const saveData = () => {
  for (let i = 1; i <= 10; i++) {
    const before = Date.now();
    const file = `/data_intake/calendar${i}.csv`;
    pool.query(`COPY booking.booking.booking (id, price, stars, weeklyViewCount, serviceFee, weeklyDiscountPercent, isRareFind, cleaningFee) FROM \'${file}\' DELIMITERS ',' CSV HEADER;`, (err) => {
      let after = Date.now();
      if (err) {
        console.log('error', err);
      } else {
        console.log('success');
        console.log('CSV file copy to POSTGRES SERVER took: '+ ((after - before)/60000) + ' minutes');
      }
    });
  }
};

saveData();

pool.end();




// carriage return are typically found in line endings, windows handle line endings differently,
// somebody manually inserted a character return

// The ascii standards define the hex value OD as a carriage return and

// the server proccess using "copy" did not have permissions to read a file, create a directory to specifically
// house the data, chmod to allow user to write the file, chown to allow postgres to read the data.
