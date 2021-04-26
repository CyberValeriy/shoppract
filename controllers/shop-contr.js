const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const Product = require("../models/products");

exports.shopHandler = (req, res, next) => {
  if (req.query.filter == "ASC") {
    Product.findAll({ order: [["price", "ASC"]] }).then((data) => {
      res.render("index.ejs", { products: data,user:req.session});
    });

  } else if (req.query.filter == "DESC") {
    Product.findAll({ order: [["price", "DESC"]] }).then((data) => {
      res.render("index.ejs", { products: data ,user:req.session});
    });

  } else {
    Product.findAll().then((data) => {
      res.render("index.ejs", { products: data,user:req.session });
    });
  }
};

exports.postShop = (req, res, next) => {
  Product.findAll({
    where: {
      title: {
        [Op.like]: `%${req.body.search}%`,
      },
    },
  }).then((data) => {
    res.render("index.ejs", { products: data ,user:req.session});
  });
};

exports.productRender = (req, res, next) => {
  const prodID = req.params.productID;
  Product.findByPk(prodID).then((prod) => {
    res.render("product.ejs", { product: prod });
  });
};

