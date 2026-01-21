import express from "express";
import fs from "fs";

const router = express.Router();
const DB_PATH = "./src/db.json";

/* All Orders */
router.get("/allorders", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));

  const orders = [];
  data.orders.forEach(o => orders.push(o));

  res.json({ count: orders.length, orders });
});

/* Cancelled Orders */
router.get("/cancelled-orders", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));

  const cancelled = data.orders.filter(o => o.status === "cancelled");
  res.json({ count: cancelled.length, cancelled });
});

/* Shipped Orders */
router.get("/shipped", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));

  const shipped = data.orders.filter(o => o.status === "shipped");
  res.json({ count: shipped.length, shipped });
});

/* Revenue by Product */
router.get("/total-revenue/:productId", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
  const product = data.products.find(p => p.id == req.params.productId);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  const revenue = data.orders
    .filter(o => o.productId == product.id && o.status !== "cancelled")
    .reduce((sum, o) => sum + o.quantity * product.price, 0);

  res.json({ productId: product.id, totalRevenue: revenue });
});

/* Overall Revenue */
router.get("/alltotalrevenue", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));

  const revenue = data.orders
    .filter(o => o.status !== "cancelled")
    .reduce((sum, o) => {
      const product = data.products.find(p => p.id === o.productId);
      return sum + o.quantity * product.price;
    }, 0);

  res.json({ totalRevenue: revenue });
});

export default router;
