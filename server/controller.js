const { getBitcoinData } = require('../helperFunctions/helpers.js');
const axios = require('axios');

module.exports.retrieve = (req, res) => {
  getBitcoinData((err, results) => {
    if (err) {
      err => res.send().status(500);
    } else {
      res.send(results).status(200);
    }
  });
};

module.exports.convert = (req, res) => {
  const { currency } = req.body;

  axios
    .get(
      `https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}&start=2019-04-02&end=2019-07-02`
    )
    .then(data => {
      res.send(data).status(200);
    })
    .catch(err => {
      console.log('err in convert', err);
    });
};
