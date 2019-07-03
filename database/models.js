const { db, USD, GBP, EUR } = require('./index.js');

const { ETH, RIP, BCH, LTC } = require('./TopCryptoSchema.js');

module.exports.getUSD = (req, res) => {
  USD.find({})
    .then(dollars => {
      res.send(dollars).status(200);
    })
    .catch(err => {
      console.log('err inside models USD', err);
      res.send().status(500);
    });
};

module.exports.getGBP = (req, res) => {
  GBP.find({})
    .then(pounds => {
      res.send(pounds).status(200);
    })
    .catch(err => {
      console.log('err inside models USD', err);
      res.send().status(500);
    });
};

module.exports.getEUR = (req, res) => {
  EUR.find({})
    .then(euros => {
      res.send(euros).status(200);
    })
    .catch(err => {
      console.log('err inside models USD', err);
      res.send().status(500);
    });
};

module.exports.getETH = (req, res) => {
  ETH.find({})
    .then(coins => {
      res.send(coins).status(200);
    })
    .catch(err => {
      console.log('err inside models ETH', err);
      res.send().status(500);
    });
};

module.exports.getBCH = (req, res) => {
  BCH.find({})
    .then(coins => {
      res.send(coins).status(200);
    })
    .catch(err => {
      console.log('err inside models BCH', err);
      res.send().status(500);
    });
};

module.exports.getRIP = (req, res) => {
  RIP.find({})
    .then(coins => {
      res.send(coins).status(200);
    })
    .catch(err => {
      console.log('err inside models RIP', err);
      res.send().status(500);
    });
};

module.exports.getLTC = (req, res) => {
  LTC.find({})
    .then(coins => {
      res.send(coins).status(200);
    })
    .catch(err => {
      console.log('err inside models LTC', err);
      res.send().status(500);
    });
};
