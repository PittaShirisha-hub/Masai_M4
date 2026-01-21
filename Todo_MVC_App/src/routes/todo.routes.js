import express from "express";
import {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
} from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/", getAllTodos);
router.get("/:todoId", getTodoById);
router.post("/add", createTodo);
router.put("/update/:todoId", updateTodo);
router.delete("/delete/:todoId", deleteTodo);

export default router;
