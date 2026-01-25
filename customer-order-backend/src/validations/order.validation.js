export const validateCreateOrder = (req, res, next) => {
  const { product_name, quantity, price, customerId } = req.body;

  // Check required fields
  if (!product_name || !quantity || !price || !customerId) {
    return res.status(400).json({
      error: 'product_name, quantity, price, and customerId are required'
    });
  }

  // Validate quantity
  if (typeof quantity !== 'number' || quantity <= 0) {
    return res.status(400).json({
      error: 'quantity must be a positive number'
    });
  }

  // Validate price
  if (typeof price !== 'number' || price <= 0) {
    return res.status(400).json({
      error: 'price must be a positive number'
    });
  }

  next();
};
