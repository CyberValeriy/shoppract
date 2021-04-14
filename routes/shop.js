const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop-contr');
const orderController = require('../controllers/orders');
const adminController = require('../controllers/admin');

router.get('',shopController.shopHandler);

router.get('/product/:productID',shopController.productRender);

router.post('/product/buy/:productID',shopController.postBuyProduct);

router.post('/confirmed',orderController.postConfirmed);

router.get('/admin-panel',adminController.getAdmin);

router.post('/add-new-product',adminController.postAdminAddProduct);

router.post('/delete-product',adminController.postADminDeleteProduct);

module.exports = router;
