const Product = require("../models/product");
const Orders = require("../models/orders");

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
    imageURL: req.body.imageURL,
  }).then(() => {
    res.redirect("/shop");
  });
};

exports.postADminDeleteProduct = (req, res, next) => {
  Product.destroy({
    where: { title: req.body.title,description:req.body.description},
  }).then(() => {
    res.redirect("/shop/admin-panel");
  });
};

exports.postADminDeleteOrder = (req, res, next) => {
  const orderTitle = req.body.title;
  const orderPhone = req.body.phone;
  Orders.destroy({ where: { title: orderTitle, phone: orderPhone } });
  res.redirect("/shop/admin-panel");
};
