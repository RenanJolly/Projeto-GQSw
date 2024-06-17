const sequelize = require('../config/database');
const Reservation = require('./reservation');

sequelize.sync();

module.exports = {
  Reservation
};
