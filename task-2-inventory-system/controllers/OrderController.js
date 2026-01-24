const orderService = require("../services/OrderService");

class OrderController {
  async placeOrder(req, res) {
    const { productId, quantity } = req.body;

    const result = await orderService.placeOrder(productId, quantity);

    if (result.success) {
      res.json(result);
    } else {
      res.status(400).json(result);
    }
  }
}

module.exports = new OrderController();
