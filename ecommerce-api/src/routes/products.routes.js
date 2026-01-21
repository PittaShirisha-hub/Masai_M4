import express from "express";
import fs from "fs";

const router = express.Router();
const DB_PATH = "./src/db.json";

/* Create Product */
router.post("/", (req, res) => {
  const { name, price, stock } = req.body;

  const data = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));

  const newProduct = {
    id: Date.now(),
    name,
    price,
    stock
  };

  data.products.push(newProduct);
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

  res.status(201).json(newProduct);
});

/* Get All Products */
router.get("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
  res.json(data.products);
});

export default router;
