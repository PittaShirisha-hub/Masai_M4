import express from "express";
import fs from "fs";

const router = express.Router();
const DB_PATH = "./src/db.json";

/* Create Order */
router.post("/", (req, res) => {
  const { productId, quantity } = req.body;
  const data = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));

  const product = data.products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  if (product.stock === 0 || quantity > product.stock) {
    return res.status(400).json({ error: "Insufficient stock" });
  }

  const order = {
    id: Date.now(),
    productId,
    quantity,
    totalAmount: product.price * quantity,
    status: "placed",
    createdAt: new Date().toISOString().split("T")[0]
  };

  product.stock -= quantity;
  data.orders.push(order);

  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

  res.status(201).json(order);
});

/* Get All Orders */
router.get("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
  res.json(data.orders);
});

/* Cancel Order (Soft Delete) */
router.delete("/:orderId", (req, res) => {
  const { orderId } = req.params;
  const today = new Date().toISOString().split("T")[0];

  const data = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
  const order = data.orders.find(o => o.id == orderId);

  if (!order) {
    return res.status(404).json({ error: "Order not found" });
  }

  if (order.status === "cancelled") {
    return res.status(400).json({ error: "Order already cancelled" });
  }

  if (order.createdAt !== today) {
    return res.status(400).json({ error: "Cancellation period expired" });
  }

  order.status = "cancelled";

  const product = data.products.find(p => p.id === order.productId);
  product.stock += order.quantity;

  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

  res.json({ message: "Order cancelled successfully" });
});

/* Change Order Status */
router.patch("/change-status/:orderId", (req, res) => {
  const { status } = req.body;
  const data = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));

  const order = data.orders.find(o => o.id == req.params.orderId);
  if (!order) {
    return res.status(404).json({ error: "Order not found" });
  }

  const flow = ["placed", "shipped", "delivered"];

  if (order.status === "cancelled" || order.status === "delivered") {
    return res.status(400).json({ error: "Status change not allowed" });
  }

  const currentIndex = flow.indexOf(order.status);
  if (flow[currentIndex + 1] !== status) {
    return res.status(400).json({ error: "Invalid status flow" });
  }

  order.status = status;
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

  res.json(order);
});

export default router;
