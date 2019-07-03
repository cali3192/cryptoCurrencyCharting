const BitRouter = require('express').Router();
const BitControllers = require('./controller.js');
const BitCoinModels = require('../database/models.js');
const Models = require('../database/models.js');

BitRouter.route('/bitcoinTracker')
.get('./USD', BitCoinModels.getUSD)
.get('./EUR', BitCoinModels.getEUR)
.get('./GBP', BitCoinModels.getGBP)

.get('./ETH', Models.getETH)
.get('./BCH', Models.getBCH)
.get('./RIP', Models.getRIP)
.get('./LTC', Models.getLTC)

// FIXME:
// BitRouter.route('/bitcoinTracker/:currency').get(BitControllers.convert);

module.exports = BitRouter;
