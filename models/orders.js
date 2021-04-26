const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const order = sequelize.define('order',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull:false
  },
  quantity:{
    type: Sequelize.INTEGER,
    allowNull:false
  }
});

module.exports = order;