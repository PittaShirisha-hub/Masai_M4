const supabase = require("../config/supabase");
const bcrypt = require("bcrypt");

const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check duplicate email
    const { data: existingUser } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (existingUser) {
      return res.status(409).json({ error: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const { error } = await supabase.from("users").insert([
      {
        name,
        email,
        password: hashedPassword,
      },
    ]);

    if (error) throw error;

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { signupUser };
