const sequelize = require("../config/db");
const productRepo = require("../repositories/ProductRepository");
const orderRepo = require("../repositories/OrderRepository");

class OrderService {

  async placeOrder(productId, quantity) {
    const transaction = await sequelize.transaction();

    try {
      // 1. Check if product exists
      const product = await productRepo.findById(productId, transaction);
      if (!product) {
        throw new Error("Product not found");
      }

      // 2. Check stock
      if (product.stock < quantity) {
        throw new Error("Insufficient stock");
      }

      // 3. Calculate total price
      const totalPrice = product.price * quantity;

      // 4. Reduce stock
      const newStock = product.stock - quantity;
      await productRepo.updateStock(product, newStock, transaction);

      // 5. Create order
      await orderRepo.createOrder({
        productId,
        quantity,
        totalPrice
      }, transaction);

      // 6. Commit everything
      await transaction.commit();

      return { success: true, message: "Order placed successfully" };

    } catch (error) {
      await transaction.rollback();
      return { success: false, message: error.message };
    }
  }

}

module.exports = new OrderService();
