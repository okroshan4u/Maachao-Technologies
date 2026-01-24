const express = require("express");
const sequelize = require("./config/db");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
app.use(express.json());

// ONLY ONE API
app.use("/", orderRoutes);

// DB check
sequelize.authenticate()
  .then(() => console.log("Inventory DB connected"))
  .catch(err => console.log(err));

app.listen(4000, () => {
  console.log("Task-2 server running on port 4000");
});
