// INSERT ALL FOR ETHEREUM
const axios = require('axios');
const moment = require('moment');

const { ETH, RIP, BCH, LTC } = require('./index.js');

const insertAll = crypto => {
  const endDate = moment(new Date()).format('x');
  const startDate = moment(new Date())
    .subtract(3, 'month')
    .format('x');

  let currency = '';

  if (crypto === 'ETH') {
    currency = 'ethereum';
  } else if (crypto === 'RIP') {
    currency = 'ripple';
  } else if (crypto === 'BCH') {
    currency = 'bitcoin-cash';
  } else if (crypto === 'LTC') {
    currency = 'litecoin';
  }

  axios
    .get(
      `https://api.coincap.io/v2/assets/${currency}/history?interval=d1&start=${startDate}&end=${endDate}`
    )
    .then(results => {
      const { data } = results.data;
      console.log('data from eos get', data);

      Promise.all(
        data.map(coin => {
          let newEntry = {
            date: moment(coin.data).format('YYYY-MM-DD'),
            price: coin.priceUsd
          };

          if (crypto === 'ETH') {
            ETH.create(newEntry, (err, data) => {
              if (err) {
                console.log('err in posting ETH', err);
              } else {
                console.log(`Sucessfully posted ETH`);
              }
            });
          } else if (crypto === 'RIP') {
            RIP.create(newEntry, (err, data) => {
              if (err) {
                console.log('err in posting RIP', err);
              } else {
                console.log(`Sucessfully posted RIP`);
              }
            });
          } else if (crypto === 'BCH') {
            BCH.create(newEntry, (err, data) => {
              if (err) {
                console.log('err in posting BCH', err);
              } else {
                console.log(`Sucessfully posted BCH`);
              }
            });
          } else if (crypto === 'LTC') {
            LTC.create(newEntry, (err, data) => {
              if (err) {
                console.log('err in posting LTC', err);
              } else {
                console.log(`Sucessfully posted LTC`);
              }
            });
          }
        })
      );
    })
    .catch(err => {
      console.log('err in posting data to DB', err);
    });
};

// insertAll('ETH');
// insertAll('RIP');
// insertAll('BCH');
// insertAll('LTC');
