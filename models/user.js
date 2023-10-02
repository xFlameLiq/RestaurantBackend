const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("users", {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING(30),
      allowNull: false,

      validate: {
        is: /^[a-z]+$/i
      }
    },
    lastName: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
          }
    },
    telephone: {
        type: DataTypes.STRING(),
        allowNull: false,
        validate: {
            len: [10],
            isNumeric: true,
          }
    }
  }, {
    // Other model options go here
  });
  