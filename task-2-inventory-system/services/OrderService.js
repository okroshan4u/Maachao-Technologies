const sequelize = require("../config/db");
const productRepo = require("../repositories/ProductRepository");
const orderRepo = require("../repositories/OrderRepository");

class OrderService {

  async placeOrder(productId, quantity) {
    const transaction = await sequelize.transaction();

    try {
      // 1. Lock the product row
      const product = await productRepo.findByIdForUpdate(productId, transaction);

      if (!product) {
        throw new Error("Product not found");
      }

      // 2. Check stock AFTER lock
      if (product.stock < quantity) {
        throw new Error("Insufficient stock");
      }

      // 3. Deduct stock
      const newStock = product.stock - quantity;
      await productRepo.updateStock(productId, newStock, transaction);

      // 4. Create order
      await orderRepo.create({
        productId,
        quantity,
        status: "CONFIRMED"
      }, transaction);

      // 5. Commit
      await transaction.commit();
      return { success: true, message: "Order placed" };

    } catch (err) {
      await transaction.rollback();
      return { success: false, message: err.message };
    }
  }

}

module.exports = new OrderService();
