const BitRouter = require('express').Router();
const BitControllers = require('./controller.js');

BitRouter.route('/bitcoinTracker').get(BitControllers.retrieve);

BitRouter.route('/bitcoinTracker/:currency').get(BitControllers.convert);

module.exports = BitRouter;
