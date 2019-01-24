const before = Date.now();
// const cassandra = require('cassandra-driver');
let fs = require('graceful-fs');

// const connection = new cassandra.Client({
//   contactPoints: ['127.0.0.1'],
//   localDataCenter: 'datacenter1',
//   keyspace: 'test',
// });

const generateRandomNumber = (min, max, type = 'int') => {
  if (type === 'int') {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  if (type === 'double') {
    return Math.random() * (max - min + 1) + min;
  }
  return new Error('Unexpected argument type. Acceptable inputs are \'int\' or \'double\'');
};

const generateRandomBoolean = () => !!Math.floor(Math.random() * 2);

function ConvertToCSV(objArray) {
  const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
  let str = '';
  for (let i = 0; i < array.length; i += 1) {
    let line = '';
    for (const index in array[i]) {
      if (line !== '') line += ',';
      line += array[i][index];
    }
    str += `${line}\n`;
  }
  return str;
}

const calendar = ['price', 'stars', 'weeklyviewcount', 'servicefee', 'weeklydiscountpercent', 'israrefind', 'cleaningfee'];
const columnsCalender = `id, ${calendar.join()}\n`;
const hotel = ['bookingId', 'hotelFK', 'startDate', 'endDate'];
const columnsHotel = `${hotel.join()}\n`;

let calenderId = 0;
let hotelId = 0;
let bookingId = 0;

const writeFileCalender = (stream, rowsRecorded, j) => {
  if (rowsRecorded >= 100) {
    stream.end();
    if (j === 10) {

    }
    return;
  }

  const calenderEntry = [{
    _id: calenderId,
    price: generateRandomNumber(50, 150, 'int'),
    stars: generateRandomNumber(1, 5, 'double'),
    weeklyViewCount: generateRandomNumber(100, 1000, 'int'),
    serviceFee: generateRandomNumber(10, 25, 'int'),
    weeklyDiscountPercent: generateRandomNumber(5, 10, 'int'),
    isRareFind: generateRandomBoolean(),
    cleaningFee: generateRandomNumber(50, 75, 'int'),
  }];
  calenderId += 1;

  const shouldContinue = stream.write(`${ConvertToCSV(calenderEntry)}`);
  if (shouldContinue) {
    writeFileCalender(stream, rowsRecorded + 1, j);
  } else {
    stream.once('drain', () => {
      writeFileCalender(stream, rowsRecorded + 1, j);
    });
  }

};

const writeFileHotel = (stream, rowsRecorded, k ) => {
  if (rowsRecorded >= 100) {
    stream.end();
    if (k === 10) {
      console.log('time taken: ', (Date.now() - before) / 60000);
    }
    return;
  }

  const randomStartDate = generateRandomNumber(1, 15, 'int');
  const randomEndDate = generateRandomNumber(6, 28, 'int');

  const date1 = {
    bookingId: bookingId,
    hotelFK: hotelId,
    startDate: JSON.stringify(new Date(Number(new Date().getFullYear()), generateRandomNumber(1, 2, 'int'), randomStartDate)),
    endDate:  JSON.stringify(new Date(Number(new Date().getFullYear()), generateRandomNumber(3, 4, 'int'), randomEndDate)),
  };
  bookingId++;
  const date2 = {
    bookingId: bookingId,
    hotelFK: hotelId,
    startDate:  JSON.stringify(new Date(Number(new Date().getFullYear()), generateRandomNumber(5, 6, 'int'), randomStartDate)),
    endDate:  JSON.stringify(new Date(Number(new Date().getFullYear()), generateRandomNumber(7, 8, 'int'), randomEndDate)),
  };
  bookingId++;
  const date3 = {
    bookingId: bookingId,
    hotelFK: hotelId,
    startDate:  JSON.stringify(new Date(Number(new Date().getFullYear()), generateRandomNumber(9, 10, 'int'), randomStartDate)),
    endDate:  JSON.stringify(new Date(Number(new Date().getFullYear()), generateRandomNumber(11, 12, 'int'), randomEndDate)),
  };
  bookingId++;
  hotelId++;

  stream.write(`${ConvertToCSV([date1])}${ConvertToCSV([date2])}${ConvertToCSV([date3])}`);

  // if (shouldContinue) {
    writeFileHotel(stream, rowsRecorded + 1, k);
  // } else {
  //   stream.once('drain', () => {
  //     writeFileHotel(stream, rowsRecorded + 1, k);
  //   });
  // }
};

for (let j = 1; j <= 10; j += 1) {
  const calendarFile = fs.createWriteStream(`/data_intake/calendar${j}.csv`);
  calendarFile.write(columnsCalender);
  writeFileCalender(calendarFile, 0, j);
}

for (let k = 1; k <= 10; k++) {
  const hotelFile = fs.createWriteStream(`/data_intake/hotel${k}.csv`);
  hotelFile.write(columnsHotel);
  writeFileHotel(hotelFile, 0, k);
}

let after = Date.now();
console.log('Generation time took: ' + ((after - before) / 60000) + ' minutes');
