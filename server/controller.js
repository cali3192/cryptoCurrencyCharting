const { getBitcoinData } = require('../helperFunctions/helpers.js');
const axios = require('axios');

module.exports.retrieve = (req, res) => {
  axios
    .get(
      `https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-04-02&end=2019-07-02`
    )
    .then(data => {
      console.log('data from Axios request from Helpers', data.data.bpi);
      const results = data.data.bpi;
      res.send(results).status(200);
    })
    .catch(err => {
      console.log('err in axios request from Helpers', err);
      res.send(err).status(500);
    });
};
