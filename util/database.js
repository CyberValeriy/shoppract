const Sequelize = require('sequelize').Sequelize;

const sequelize = new Sequelize('shop_db','root','password',{dialect: 'mysql',host:'localhost'});

module.exports = sequelize;