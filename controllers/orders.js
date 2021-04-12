const Orders = require('../models/orders');

exports.postConfirmed = (req,res,next)=>{
Orders.create({
   fname:req.body.fname,
   lname:req.body.lname,
   phone:req.body.phone,
   email:req.body.email,
   title:req.body.title,
   prodID: req.body.prodID
})
res.render('conf-order.ejs');
};
