import Monastery from "../models/Monastery.js";

// GET ALL (featured + filters)
export const getMonasteries = async (req, res) => {
  try {
    const { district, sect, tag, limit } = req.query;

    const filter = {};
    if (district) filter.district = district;
    if (sect) filter.sect = sect;
    if (tag) filter.tags = { $in: [tag] };

    const monasteries = await Monastery.find(filter)
      .limit(limit ? parseInt(limit) : 50)
      .sort({ createdAt: -1 });

    res.json(monasteries);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch monasteries" });
  }
};

// GET ONE
export const getMonastery = async (req, res) => {
  try {
    const monastery = await Monastery.findById(req.params.id);
    res.json(monastery);
  } catch (err) {
    res.status(404).json({ error: "Monastery not found" });
  }
};

// CREATE (Admin Only)
export const createMonastery = async (req, res) => {
  try {
    const monastery = await Monastery.create(req.body);
    res.status(201).json(monastery);
  } catch (err) {
    res.status(400).json({ error: "Failed to create monastery" });
  }
};

// UPDATE
export const updateMonastery = async (req, res) => {
  try {
    const monastery = await Monastery.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(monastery);
  } catch {
    res.status(400).json({ error: "Failed to update monastery" });
  }
};

// DELETE
export const deleteMonastery = async (req, res) => {
  try {
    await Monastery.findByIdAndDelete(req.params.id);
    res.json({ message: "Monastery deleted" });
  } catch {
    res.status(400).json({ error: "Failed to delete monastery" });
  }
};
