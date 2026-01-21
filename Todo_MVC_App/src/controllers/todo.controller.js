import { readTodos, writeTodos } from "../models/todo.model.js";

export const getAllTodos = (req, res) => {
  try {
    const todos = readTodos();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};

export const getTodoById = (req, res) => {
  try {
    const todos = readTodos();
    const todo = todos.find(
      t => t.id === Number(req.params.todoId)
    );

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todo" });
  }
};

export const createTodo = (req, res) => {
  try {
    const todos = readTodos();
    const newTodo = {
      id: Date.now(),
      ...req.body
    };

    todos.push(newTodo);
    writeTodos(todos);

    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Failed to create todo" });
  }
};

export const updateTodo = (req, res) => {
  try {
    const todos = readTodos();
    const index = todos.findIndex(
      t => t.id === Number(req.params.todoId)
    );

    if (index === -1) {
      return res.status(404).json({ error: "Todo not found" });
    }

    todos[index] = {
      ...todos[index],
      ...req.body
    };

    writeTodos(todos);
    res.status(200).json(todos[index]);
  } catch (error) {
    res.status(500).json({ error: "Failed to update todo" });
  }
};

export const deleteTodo = (req, res) => {
  try {
    const todos = readTodos();
    const index = todos.findIndex(
      t => t.id === Number(req.params.todoId)
    );

    if (index === -1) {
      return res.status(404).json({ error: "Todo not found" });
    }

    const deletedTodo = todos.splice(index, 1);
    writeTodos(todos);

    res.status(200).json({
      message: "Todo deleted",
      todo: deletedTodo[0]
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
};
