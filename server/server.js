const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');

const app = express();
const PORT = 8080;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(morgan('tiny'));
app.use(bodyparser.json());
app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
