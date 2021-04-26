const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop-contr');
const orderController = require('../controllers/orders');
const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');
// const cors = require('cors');

router.get('',isAuth,shopController.shopHandler);

router.post('',isAuth,shopController.postShop);

router.get('/product/:productID',isAuth,shopController.productRender);

router.post('/product/buy/:productID',isAuth,orderController.postBuyProduct);

router.get('/admin-panel',adminController.getAdmin);//admin

router.post('/add-new-product',adminController.postAdminAddProduct);//admin

router.post('/delete-product',adminController.postADminDeleteProduct);//admin

router.post('/delete-order/',adminController.postADminDeleteOrder); //admin


module.exports = router;
