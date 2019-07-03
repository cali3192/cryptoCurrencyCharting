// INSERT ALL FOR ETHEREUM
const axios = require('axios');
const { USD, GBP, EUR } = require('./EthereumSchema.js');

const insertAll = currency => {
  const endDate = moment(new Date()).format('YYYY-MM-DD');

  axios
    .get(
      `https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}&start=2019-04-02&end=${endDate}`
    )
    .then(data => {
      const { bpi } = data.data;
      let arr = [];
      for (var key in bpi) {
        const obj = {
          [key]: bpi[key]
        };
        arr.push(obj);
      }
      Promise.all(
        arr.map(element => {
          let newEntry = {
            date: Object.keys(element)[0],
            price: Object.values(element)[0]
          };
          if (currency === 'USD') {
            USD.create(newEntry, (err, data) => {
              if (err) {
                console.log('err', err);
              } else {
                console.log('sucess posting USD in database! ', data);
              }
            });
          } else if (currency === 'GBP') {
            GBP.create(newEntry, (err, data) => {
              if (err) {
                console.log('err', err);
              } else {
                console.log('sucess posting GBP in database! ', data);
              }
            });
          } else if (currency === 'EUR') {
            EUR.create(newEntry, (err, data) => {
              if (err) {
                console.log('err', err);
              } else {
                console.log('sucess posting EUR in database! ', data);
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

// Uncomment to insert these values in the colelction
// insertAll('USD'); // 92
// insertAll('GBP');
// insertAll('EUR'); // 92

const insertOne = currency => {
  const endDate = moment(new Date()).format('YYYY-MM-DD');

  axios
    // FIXME: test this end date
    .get(
      `https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}&start=${endDate}&end=${endDate}`
    )

    .then(data => {
      const { bpi } = data.data;
      let arr = [];
      for (var key in bpi) {
        const obj = {
          [key]: bpi[key]
        };
        arr.push(obj);
      }
      let newEntry = {
        date: Object.keys(arr[0])[0],
        price: Object.values(arr[0])[0]
      };

      if (currency === 'USD') {
        USD.create(newEntry, (err, data) => {
          if (err) {
            console.log('err with single entry', err);
          } else {
            console.log('sucess posting single USD in database! ', data);
          }
        });
      } else if (currency === 'GBP') {
        GBP.create(newEntry, (err, data) => {
          if (err) {
            console.log('err with single entry', err);
          } else {
            console.log('sucess posting single GBP in database! ', data);
          }
        });
      } else if (currency === 'EUR') {
        EUR.create(newEntry, (err, data) => {
          if (err) {
            console.log('err with single entry', err);
          } else {
            console.log('sucess posting single EUR in database! ', data);
          }
        });
      }
    })
    .catch(err => {
      console.log('err in posting single entry', err);
    });
};

setInterval(insertOne('USD'), 100000);
setInterval(insertOne('GBP'), 100000);
setInterval(insertOne('EUR'), 100000);
