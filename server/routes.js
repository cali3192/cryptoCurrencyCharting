const BitRouter = require('express').Router();
const BitControllers = require('./controller.js');

BitRouter.route('/bitcoinTracker').get(BitControllers.retrieve);

module.exports = BitRouter 
