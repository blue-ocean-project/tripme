const { Sequelize, DataTypes } = require('sequelize');

const {
  database,
  user,
  password,
  host,
  dialect,
} = require('./config/config.database');

const sequelize = new Sequelize(database, user, password, {
  host, dialect, logging: false,
});

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unqiue: true,
    primaryKey: true,
  },
});

sequelize.sync();

module.exports = { User };
