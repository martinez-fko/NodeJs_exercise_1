const { DataTypes, Sequelize } = require('sequelize');

//* ==== Connecting to a database =====
const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'root',
  port: 5432,
  database: 'check',
  logging: false,
});

module.exports = { db, DataTypes };
