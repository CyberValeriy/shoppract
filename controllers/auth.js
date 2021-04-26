const Users = require("../models/users");

exports.getLogIn = (req, res) => {
  res.render("log-in.ejs");
};

exports.getSignUp = (req, res) => {
  res.render("sign-up.ejs");
};

exports.postLogIn = (req, res) => {
  Users.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if(user != null){
    if (user.password === req.body.password) {
      req.session.LoggedIn = true;
      req.session.username = user.email,
      req.session.phone = user.phone,
      req.session.lname = user.lname,  //not secure but....
      req.session.fname = user.fname,
      req.session.password = user.password,
      req.session.userID = user.id;

      res.redirect("/shop");
    } else {
      res.redirect("/");
    }
   }else{
      res.redirect('/');
   }
  });
};

exports.postSignUp = (req, res) => {
  Users.create({
     fname:req.body.fname,
     lname:req.body.lname,
     email:req.body.email,
     phone:req.body.phone,
     password:req.body.password
  }).then(res.redirect('/'));
};
