require("dotenv").config();
const express = require("express");

const userRoutes = require("./routes/userRoutes");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

app.use(express.json());

app.use("/", userRoutes);
app.use("/", todoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
