const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Product = sequelize.define("Product", {
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  stock: { type: DataTypes.INTEGER, allowNull: false }
}, {
  tableName: "Product",
  timestamps: false
});

module.exports = Product;
