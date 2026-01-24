const Product = require("../models/Product");

class ProductRepository {

  async findById(productId, transaction) {
    return await Product.findByPk(productId, { transaction });
  }

  async updateStock(product, newStock, transaction) {
    product.stock = newStock;
    await product.save({ transaction });
  }

  async findAll() {
    return await Product.findAll();
  }

}

module.exports = new ProductRepository();
