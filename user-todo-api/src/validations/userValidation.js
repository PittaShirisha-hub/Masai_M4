const validateUser = (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || name.trim() === "") {
    return res.status(400).json({ error: "Name is required" });
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: "Valid email is required" });
  }

  if (!password || password.length < 8) {
    return res
      .status(400)
      .json({ error: "Password must be at least 8 characters" });
  }

  next();
};

module.exports = validateUser;
