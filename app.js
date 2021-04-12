const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const app = express();
const ShopRouter = require('./routes/shop');

const sequelize = require('./util/database');

app.use(bodyparser.urlencoded({extended:false}));
app.set('view engine','ejs');
app.set('views','views');



app.use(express.static(path.join(__dirname,'public'))); //css and client(ejs) javascript

app.use('/shop',ShopRouter); //routes

app.use((req, res, next) => {
   res.status(404).send('<h1>GG</h1>');
});


sequelize.sync();

app.listen(3000);