const Product = require('../models/product');

exports.getAdmin = (req,res,next)=>{
   res.render('admin-panel');
}

exports.postAdminAddProduct = (req,res,next)=>{
Product.create({
   title:req.body.title.toUpperCase().trim(),
   description:req.body.description.toUpperCase(),
   price:req.body.price,
   imageURL:req.body.imageURL
}).then(()=>{

   res.redirect('/shop');

});
};

exports.postADminDeleteProduct = (req,res,next)=>{
Product.destroy({where:{title:req.body.title.toUpperCase().trim()}}).then(()=>{

res.redirect('/shop')
});

};