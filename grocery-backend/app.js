const express = require("express");
const sequelize = require("./config/db");

const productController = require("./controllers/ProductController");
const orderController = require("./controllers/OrderController");

const app = express();
app.use(express.json());

// ONLY TWO ROUTES (as per task)
app.get("/products", (req, res) => productController.getAllProducts(req, res));
app.post("/orders", (req, res) => orderController.placeOrder(req, res));

// DB connect
sequelize.authenticate()
  .then(() => console.log("MySQL Connected"))
  .catch(err => console.log(err));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
