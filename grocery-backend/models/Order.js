const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Order = sequelize.define("Order", {
  productId: { type: DataTypes.INTEGER, allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false },
  totalPrice: { type: DataTypes.DECIMAL(10,2), allowNull: false }
}, {
  tableName: "Order",
  timestamps: false
});

module.exports = Order;
