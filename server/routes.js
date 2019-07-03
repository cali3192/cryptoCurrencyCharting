const BitRouter = require('express').Router();
const BitControllers = require('./controller.js');
const Models = require('../database/models.js');

BitRouter
  // .route('/bitcoinTracker')
  .get('./USD', Models.getUSD)
  .get('./EUR', Models.getEUR)
  .get('./GBP', Models.getGBP)
  .get('./ETH', Models.getETH)
  .get('./BCH', Models.getBCH)
  .get('./RIP', Models.getRIP)
  .get('./LTC', Models.getLTC);

module.exports = BitRouter;
