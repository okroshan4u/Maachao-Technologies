const productRepo = require("../repositories/ProductRepository");

class ProductController {
  async getAllProducts(req, res) {
    const products = await productRepo.findAll();
    res.json(products);
  }
}

module.exports = new ProductController();
