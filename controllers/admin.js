const Product = require("../models/products");
const Orders = require("../models/orders");
const fs = require("fs");
const path = require('path');

exports.getAdmin = (req, res, next) => {
  Orders.findAll().then((orders) => {
    Product.findAll().then((products) => {
      res.render("admin-panel", { orders: orders, products: products });
    });
  });
};

exports.postAdminAddProduct = (req, res, next) => {
  Product.create({
    title: req.body.title.toUpperCase().trim(),
    description: req.body.description.toUpperCase(),
    price: req.body.price,
    imagepath: `\\${req.file.path}`
  }).then(() => {
    res.redirect("/shop/admin-panel");
  });
};

exports.postADminDeleteProduct = (req, res, next) => {
  Product.destroy({ where: { title: req.body.title, description: req.body.description }})
.then(() => {
      const pathString = path.join(__dirname,'../',req.body.imagepath); //deleting image from folder
      fs.unlink(pathString, (err) => {
        if (err) console.log(err);
    });
 })
.then(() => {
      res.redirect("/shop/admin-panel");
    });
};


exports.postADminDeleteOrder = (req, res, next) => {
  const orderTitle = req.body.title;
  const orderId = req.body.orderId;
  Orders.destroy({ where: { title: orderTitle, id: orderId } });
  res.redirect("/shop/admin-panel");
};
