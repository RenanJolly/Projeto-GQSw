const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Reservation = sequelize.define('Reservation', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false
  },
  guests: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Reservation;
