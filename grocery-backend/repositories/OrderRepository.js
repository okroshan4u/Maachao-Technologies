const Order = require("../models/Order");

class OrderRepository {

  async createOrder(orderData, transaction) {
    return await Order.create(orderData, { transaction });
  }

}

module.exports = new OrderRepository();
