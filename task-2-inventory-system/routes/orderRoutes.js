const express = require("express");
const router = express.Router();
const orderController = require("../controllers/OrderController");

router.post("/order", (req, res) => orderController.placeOrder(req, res));

module.exports = router;
