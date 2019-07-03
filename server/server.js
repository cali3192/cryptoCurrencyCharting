const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routes.js');

const app = express();
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

app.use('/', router);

const PORT = process.env.PORT || 6500;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
