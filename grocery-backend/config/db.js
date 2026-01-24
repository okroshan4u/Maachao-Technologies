const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("grocery_db", "root", "Password", {
  host: "localhost",
  dialect: "mysql",
  logging: false
});

module.exports = sequelize;
