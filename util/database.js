const Sequelize = require('sequelize').Sequelize;

const sequelize = new Sequelize('shop_for_tm','root','password',{dialect: 'mysql',host:'localhost',port: 3030});

module.exports = sequelize;