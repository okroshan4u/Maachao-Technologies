const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Order = sequelize.define("Order", {
  productId: DataTypes.INTEGER,
  quantity: DataTypes.INTEGER,
  status: DataTypes.STRING
}, {
  tableName: "Order",
  timestamps: false
});

module.exports = Order;
