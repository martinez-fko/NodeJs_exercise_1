const { db, DataTypes } = require('../utils/database.util');

//* ==== Model Registrations =====
const Registration = db.define('registration', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  entranceTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  exitTime: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'working',
  },
});

module.exports = { Registration };
