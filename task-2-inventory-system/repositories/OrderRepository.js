const Order = require("../models/Order");

class OrderRepository {
  async create(order, transaction) {
    return await Order.create(order, { transaction });
  }
}

module.exports = new OrderRepository();
