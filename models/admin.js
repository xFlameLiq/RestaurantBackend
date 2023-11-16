const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("admin", {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: false,
    },
    lastname: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: false,
    },
    address: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: false,
    },
    phone: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: false,
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        is: /^[a-zA-Z0-9_-]+$/i
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  }, {
    // Other model options go here
  });
  