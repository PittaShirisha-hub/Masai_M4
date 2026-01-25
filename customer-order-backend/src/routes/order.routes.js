import express from 'express';
import {
  createOrder,
  getOrders,
  updateOrder,
  deleteOrder
} from '../controllers/order.controller.js';

const router = express.Router();

router.post('/add-order', createOrder);
router.get('/get-my-orders/:customerId', getOrders);
router.put('/update-order/:orderId', updateOrder);
router.delete('/delete-order/:orderId', deleteOrder);

export default router;
