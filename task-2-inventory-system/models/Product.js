const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Product = sequelize.define("Product", {
  name: DataTypes.STRING,
  stock: DataTypes.INTEGER
}, {
  tableName: "Product",
  timestamps: false
});

module.exports = Product;
