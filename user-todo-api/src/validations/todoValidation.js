const todoValidation = (req, res, next) => {
  const { title, userId } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({ error: "Todo title is required" });
  }

  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }

  next();
};

module.exports = todoValidation;
