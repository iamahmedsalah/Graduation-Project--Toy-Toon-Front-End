var express = require('express');
var router = express.Router();


/* GET cart page. */
router.get('/', (req, res, next) => {
    res.render('cart');
});

module.exports = router;
