const supabase = require("../config/supabase");

exports.addVehicle = async (req, res) => {
  const { role, name, registration_number, allowed_passengers, rate_per_km, owner_id } = req.body;

  if (role !== "owner") {
    return res.status(403).json({ message: "Only owners can add vehicles" });
  }

  const { data, error } = await supabase.from("vehicles").insert([{
    name,
    registration_number,
    allowed_passengers,
    rate_per_km,
    owner_id
  }]).select();

  if (error) return res.status(400).json({ error: error.message });

  res.status(201).json(data[0]);
};

exports.assignDriver = async (req, res) => {
  const { driver_id } = req.body;

  const { data, error } = await supabase
    .from("vehicles")
    .update({ driver_id })
    .eq("id", req.params.id)
    .select();

  if (error) return res.status(400).json({ error: error.message });

  res.json(data[0]);
};

exports.getVehicle = async (req, res) => {
  const { data, error } = await supabase
    .from("vehicles")
    .select("*")
    .eq("id", req.params.id)
    .single();

  if (error) return res.status(404).json({ message: "Vehicle not found" });

  res.json(data);
};
