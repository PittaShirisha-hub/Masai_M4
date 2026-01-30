const express = require("express");
const validateUser = require("../validations/userValidation");
const { signupUser } = require("../controllers/userController");

const router = express.Router();

router.post("/signup", validateUser, signupUser);

module.exports = router;
