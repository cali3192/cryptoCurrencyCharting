const axios = require('axios');
const request = require('request');

const getBitcoinData = cb => {
  // request(`http://api.coindesk.com/v1/bpi/`, (err, res, body) => {
  //   if (err) {
  //     console.log('helperFunction - err', err);
  //     cb(err);
  //   } else {
  //     console.log('helperFunction - sucess body', body);
  //     cb(null, body);
  //   }
  // });
  axios
    .get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-04-02&end=2019-07-02`)
    .then(data => {
      console.log('data from Axios request from Helpers', data.data);
      cb(null, data);
    })
    .catch(err => {
      console.log('err in axios request from Helpers', err);
      cb(err);
    });
};

module.exports.getBitcoinData = getBitcoinData;
