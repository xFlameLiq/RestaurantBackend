const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("employee", {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
  }, {
    // Other model options go here
  });
  