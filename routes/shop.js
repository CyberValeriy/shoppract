const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop-contr');
const orderController = require('../controllers/orders');

router.get('',shopController.shopHandler);

router.get('/product/:productID',shopController.productRender);

router.post('/product/buy/:productID',shopController.postBuyProduct);

router.post('/confirmed',orderController.postConfirmed);

module.exports = router;
