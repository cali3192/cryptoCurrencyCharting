const insertAll = currency => {
  axios
    .get(
      `https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}&start=2019-04-02&end=2019-07-02`
    )
    .then(data => {
      // load this data into our db
      // Goal: To get the key value pairs in the collection
      const { bpi } = data;
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
            USD.create(newEntry, (err, data) => {
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

insertAll('USD');
insertAll('GBP');
insertAll('EUR');
