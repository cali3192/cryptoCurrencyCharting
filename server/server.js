const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const BitRouter = require('./routes.js');

const app = express();
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

app.use(BitRouter);

const PORT = process.env.PORT || 6500;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
