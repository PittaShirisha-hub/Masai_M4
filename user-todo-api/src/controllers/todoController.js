const supabase = require("../config/supabase");

const addTodo = async (req, res) => {
  try {
    const { title, description, userId } = req.body;

    const { error } = await supabase.from("todos").insert([
      {
        title,
        description,
        user_id: userId,
      },
    ]);

    if (error) throw error;

    res.status(201).json({ message: "Todo created successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to create todo" });
  }
};

const getUserTodos = async (req, res) => {
  try {
    const { userId } = req.params;

    const { data, error } = await supabase
      .from("todos")
      .select("*")
      .eq("user_id", userId);

    if (error) throw error;

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { todoId } = req.params;

    const { error } = await supabase
      .from("todos")
      .update(req.body)
      .eq("id", todoId);

    if (error) throw error;

    res.json({ message: "Todo updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update todo" });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { todoId } = req.params;

    const { error } = await supabase
      .from("todos")
      .delete()
      .eq("id", todoId);

    if (error) throw error;

    res.json({ message: "Todo deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
};

module.exports = {
  addTodo,
  getUserTodos,
  updateTodo,
  deleteTodo,
};
