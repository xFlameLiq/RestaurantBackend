const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("aliment", {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('drink', 'food'),
      allowNull: false,
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
  }, {
    // Other model options go here
  });
  