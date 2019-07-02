const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, './client/dist')));
app.use(bodyParser.json());

const PORT = 6500;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
