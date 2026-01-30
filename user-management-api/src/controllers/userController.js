import supabase from "../config/supabase.js";
import bcrypt from "bcrypt";

// CREATE USER
export const createUser = async (req, res) => {
  try {
    const { name, email, password, age, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const { data, error } = await supabase
      .from("users")
      .insert([
        { name, email, password: hashedPassword, age, role }
      ])
      .select();

    if (error) {
      if (error.code === "23505") {
        return res.status(409).json({ error: "Email already exists" });
      }
      return res.status(500).json({ error: error.message });
    }

    res.status(201).json({ message: "User created", user: data[0] });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// GET ALL USERS
export const getAllUsers = async (req, res) => {
  const { data, error } = await supabase
    .from("users")
    .select("id, name, email, age, role, created_at");

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
};

// GET USER BY ID
export const getUserById = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("users")
    .select("id, name, email, age, role, created_at")
    .eq("id", id)
    .single();

  if (!data) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(data);
};

// UPDATE USER
export const updateUser = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("users")
    .update(req.body)
    .eq("id", id)
    .select();

  if (!data || data.length === 0) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json({ message: "User updated", user: data[0] });
};

// DELETE USER
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  const { data } = await supabase
    .from("users")
    .delete()
    .eq("id", id)
    .select();

  if (!data || data.length === 0) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json({ message: "User deleted successfully" });
};
