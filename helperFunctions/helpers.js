const axios = require('axios');

module.exports = {
  getBitcoinData: () => {
    return axios.get(
      'https://api.coincap.io/v2/assets/bitcoin/history?interval=d1'
    );
  },
  getEthereumData: () => {
    return axios.get(
      'https://api.coincap.io/v2/assets/ethereum/history?interval=d1'
    );
  },
  getRippleData: () => {
    return axios.get(
      'https://api.coincap.io/v2/assets/ripple/history?interval=d1'
    );
  },
  getLitecoinData: () => {
    return axios.get(
      'https://api.coincap.io/v2/assets/litecoin/history?interval=d1'
    );
  },
  getBitcoinCashData: () => {
    return axios.get(
      'https://api.coincap.io/v2/assets/bitcoin-cash/history?interval=d1'
    );
  },
};
