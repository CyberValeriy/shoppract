const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const app = express();
const shopRouter = require('./routes/shop');
const authRouter = require('./routes/auth');
const profileRouter = require('./routes/profile');
const multer = require('multer');
const session = require('express-session');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const database = require('./util/database');

const Users = require('./models/users');
const Orders = require('./models/orders');
const Products = require('./models/products');
// const Sessions = require('./models/products');



const sequelize = require('./util/database');


const fileStorage = multer.diskStorage({
   destination: (req,file,cb)=>{
      cb(null,'images');
   },
   filename: (req,file,cb)=>{
      cb(null,Math.random().toString() + '-' + file.originalname.trim().replace("\\","/"));
   }
});

const fileFilter = (req,file,cb)=>{
   if(file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg'){
      cb(null,true);
   }else{
      cb(null,false);
   }
}

app.use(multer({storage: fileStorage, fileFilter: fileFilter }).single('image'));
app.use(bodyparser.urlencoded({extended:false}));
app.set('view engine','ejs');
app.set('views','views');



app.use(express.static(path.join(__dirname,'public')));
app.use('/images',express.static(path.join(__dirname,'images')));

// const sessionStore = new SequelizeStore({
//    db:database,
//    expiration: 7 * 24 * 60 * 60 * 1000               ..storing session in database
// });

app.use(session({
   secret:'my secret',
   resave: false,
   saveUninitialized:false,
   name:"Orders Company S1",
   unset:"destroy",
   cookie:{
      maxAge:345600   //4 days
   }
   
   // store:sessionStore
}));



app.use('/shop',shopRouter);
app.use('/profiles',profileRouter);
app.use('/',authRouter);

app.use((req, res, next) => {
   res.status(404).send('<h1>GG</h1>');
});

Orders.belongsTo(Users,{constraints:true,onDelete: 'CASCADE'});
Orders.belongsTo(Products,{constraints:true,onDelete: 'CASCADE'});
Users.hasMany(Orders);


// sessionStore.sync();
sequelize.sync();

app.listen(3000);