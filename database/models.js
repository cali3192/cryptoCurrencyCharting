const { db, USD, GPB, EUR } = require('./index.js');

module.exports = getUSD = () => {
  USD.find({})
    .then(dollars => {
      res.send(dollars).status(200);
    })
    .catch(err => {
      console.log('err inside models USD', err);
      res.send().status(500);
    });
};

module.exports = getGPB = () => {
  GPB.find({})
    .then(pounds => {
      res.send(pounds).status(200);
    })
    .catch(err => {
      console.log('err inside models USD', err);
      res.send().status(500);
    });
};

module.exports = getEUR = () => {
  EUR.find({})
    .then(euros => {
      res.send(euros).status(200);
    })
    .catch(err => {
      console.log('err inside models USD', err);
      res.send().status(500);
    });
};
