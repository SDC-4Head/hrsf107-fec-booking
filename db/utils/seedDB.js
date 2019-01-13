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

const columns = `id, ${calendar.join()}\n`;

let id = 0;

const writeFile = (stream, rowsRecorded, j) => {
  if (rowsRecorded >= 1000000) {
    stream.end();
    if (j === 10) {
      console.log('time taken: ', (Date.now() - before) / 60000);
    }
    return;
  }

  const entry = [{
    _id: id,
    price: generateRandomNumber(50, 150, 'int'),
    stars: generateRandomNumber(1, 5, 'double'),
    weeklyViewCount: generateRandomNumber(100, 1000, 'int'),
    serviceFee: generateRandomNumber(10, 25, 'int'),
    weeklyDiscountPercent: generateRandomNumber(5, 10, 'int'),
    isRareFind: generateRandomBoolean(),
    cleaningFee: generateRandomNumber(50, 75, 'int'),
    // bookedDates: generateThreeRandomDatesPerYear(2019),
  }];
  id += 1;

  const shouldContinue = stream.write(`${ConvertToCSV(entry)}`);
  if (shouldContinue) {
    writeFile(stream, rowsRecorded + 1, j);
  } else {
    stream.once('drain', () => {
      writeFile(stream, rowsRecorded + 1, j);
    });
  }
};

for (let j = 1; j <= 10; j += 1) {
  const calendarFile = fs.createWriteStream(`/data_intake/calendar${j}.csv`);
  calendarFile.write(columns);
  writeFile(calendarFile, 0, j);
}

let after = Date.now();

console.log('Generation time took: '+ ((after - before)/60000) + ' minutes');
