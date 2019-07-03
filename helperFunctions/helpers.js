const axios = require('axios');
// const request = require('request');

module.exports.getBitcoinData = cb => {
  axios
    .get(
      `https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-04-02&end=2019-07-02`
    )
    .then(data => {
      console.log('data from Axios request from Helpers', data.data);

      cb(null, data.data.bpi);
    })
    .catch(err => {
      console.log('err in axios request from Helpers', err);
      cb(err);
    });
};
