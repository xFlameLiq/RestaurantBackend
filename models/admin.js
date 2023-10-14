const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("admin", {
    // Model attributes are defined here
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,

      validate: {
        is: /^[a-z]+$/i
      }
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
    }
  }, {
    // Other model options go here
  });
  