const router = require('express').Router();
const bitControllers = require('./controller.js');

router.get('/coin/bitcoin', bitControllers.getBitcoin);
router.get('/coin/ethereum', bitControllers.getEthereum);
router.get('/coin/ripple', bitControllers.getRipple);
router.get('/coin/litecoin', bitControllers.getLitecoin);
router.get('/coin/bitcoin-cash', bitControllers.getBitcoinCash);

module.exports = router;
