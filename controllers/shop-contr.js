const Product = require("../models/product");


exports.shopHandler = (req, res, next) => { // fetch all prods and show them...
   Product.findAll().then(data => {
      res.render("index.ejs", { products: data});
   });


};

exports.productRender = (req, res, next) => {
const prodID = req.params.productID;
   Product.findByPk(prodID).then(prod => {
      res.render('product.ejs',{product:prod});
   })

}

exports.postBuyProduct = (req,res,next) => {
   const prodID = req.params.productID;
   Product.findByPk(prodID).then(prod => {
    res.render('buy-product.ejs',{product:prod});
   });
   
};
