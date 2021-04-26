const Users = require("../models/users");
const Orders = require("../models/orders");

exports.getUser = (req, res) => {
   if(req.url.slice(6) != req.session.userID){ 
      res.send("no-you can't do that!");
      return
   }
  Users.findOne({
    where: {    
      id: req.session.userID,
    },
  }).then((user) => {
    if (user.password == req.session.password) { 
      Orders.findAll({
        where: {
          userId: user.id,
        },
      }).then((orders) => {
        res.render("profile.ejs", { profile: user, orders: orders }); //fetching all data and get users/oreders for profile
      });
    }
  });
};

exports.postDeleteOrder = (req,res)=>{
   if(!req.body.userId == req.session.userID){
      res.redirect('/');
      return
   }
   Orders.destroy({where:{
      userId: req.body.userId,
      productId: req.body.productId,
      id: req.body.orderid
   }}).then(()=>{
      res.redirect(`/profiles/user/${req.body.userId}`);
   })
}

exports.postLogOut = (req,res)=>{
   req.session.destroy((err)=>{
      console.log(err);
      res.redirect('/')
   });
}

