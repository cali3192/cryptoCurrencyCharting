const helpers = require('../helperFunctions/helpers.js');

module.exports = {
  getBitcoin: (req, res) => {
    helpers
      .getBitcoinData()
      .then(({ data }) => {
        res.send(data);
      })
      .catch(err => {
        res.sendStatus(500);
      });
  },
  getEthereum: (req, res) => {
    helpers
      .getEthereumData()
      .then(({ data }) => {
        res.send(data);
      })
      .catch(err => {
        res.sendStatus(500);
      });
  },
  getRipple: (req, res) => {
    helpers
      .getRippleData()
      .then(({ data }) => {
        res.send(data);
      })
      .catch(err => {
        res.sendStatus(500);
      });
  },
  getLitecoin: (req, res) => {
    helpers
      .getLitecoinData()
      .then(({ data }) => {
        res.send(data);
      })
      .catch(err => {
        res.sendStatus(500);
      });
  },
  getBitcoinCash: (req, res) => {
    helpers
      .getBitcoinCashData()
      .then(({ data }) => {
        res.send(data);
      })
      .catch(err => {
        res.sendStatus(500);
      });
  },
};
