const sequelize = require("../config/db");

class ProductRepository {

  async findByIdForUpdate(productId, transaction) {
    const [rows] = await sequelize.query(
      "SELECT * FROM Product WHERE id = ? FOR UPDATE",
      {
        replacements: [productId],
        transaction
      }
    );
    return rows[0];
  }

  async updateStock(productId, newStock, transaction) {
    await sequelize.query(
      "UPDATE Product SET stock = ? WHERE id = ?",
      {
        replacements: [newStock, productId],
        transaction
      }
    );
  }

}

module.exports = new ProductRepository();
