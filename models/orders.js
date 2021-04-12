const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Orders = sequelize.define('order',{
   id: {
     type: Sequelize.INTEGER,
     autoIncrement: true,
     allowNull: false,
     primaryKey: true
   },
   fname: Sequelize.STRING,
   lname: Sequelize.STRING,
   email: Sequelize.STRING,
   phone: Sequelize.STRING,
   title: Sequelize.STRING,
 });

 module.exports = Orders;