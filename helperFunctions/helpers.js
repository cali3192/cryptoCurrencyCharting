const axios = require('axios');
const moment = require('moment');
// const request = require('request');

module.exports.getBitcoinData = cb => {
  const endDate = moment(new Date()).format('YYYY-MM-DD');
  axios
    .get(
      `https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-04-02&end=${endDate}`
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
