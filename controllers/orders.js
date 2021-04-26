const Orders = require('../models/orders');
const Products = require('../models/products');



exports.postBuyProduct = (req,res,next)=>{

Products.findOne({where:{ //adding in cart/orders(taking userId and product)
   id:req.body.prodID
}}).then(product => {
   Orders.create({
      fname:req.session.fname,
      lname:req.session.lname,
      phone:req.session.fname,
      email:req.session.email,
      title:product.title,
      price:product.price,
      quantity: 1,                    //we can save it in cookies or db...
      productId: req.body.prodID,
      userId: req.session.userID
   })
});
res.render('conf-order.ejs');
};
