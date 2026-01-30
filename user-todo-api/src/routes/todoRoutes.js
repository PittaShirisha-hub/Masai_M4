const express = require("express");
const validateTodo = require("../validations/todoValidation");
const {
  addTodo,
  getUserTodos,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

const router = express.Router();

router.post("/add-todo", validateTodo, addTodo);
router.get("/get-my-todo/:userId", getUserTodos);
router.put("/update-todo/:todoId", updateTodo);
router.delete("/delete-todo/:todoId", deleteTodo);

module.exports = router;
