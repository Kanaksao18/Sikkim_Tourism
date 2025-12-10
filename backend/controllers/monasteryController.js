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
    if (!monastery) {
      return res.status(404).json({ error: "Monastery not found" });
    }
    res.json(monastery);
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({ error: "Invalid monastery ID" });
    }
    res.status(500).json({ error: "Failed to fetch monastery" });
  }
};

// CREATE (Admin Only)
export const createMonastery = async (req, res) => {
  try {
    const monastery = await Monastery.create(req.body);
    res.status(201).json(monastery);
  } catch (err) {
    console.error("Create monastery error:", err);
    // Provide more specific error messages
    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map(e => e.message).join(", ");
      return res.status(400).json({ error: `Validation error: ${errors}` });
    }
    res.status(400).json({ error: err.message || "Failed to create monastery" });
  }
};

// UPDATE
export const updateMonastery = async (req, res) => {
  try {
    const monastery = await Monastery.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!monastery) {
      return res.status(404).json({ error: "Monastery not found" });
    }
    res.json(monastery);
  } catch (err) {
    console.error("Update monastery error:", err);
    if (err.name === "CastError") {
      return res.status(400).json({ error: "Invalid monastery ID" });
    }
    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map(e => e.message).join(", ");
      return res.status(400).json({ error: `Validation error: ${errors}` });
    }
    res.status(400).json({ error: err.message || "Failed to update monastery" });
  }
};

// DELETE
export const deleteMonastery = async (req, res) => {
  try {
    const monastery = await Monastery.findByIdAndDelete(req.params.id);
    if (!monastery) {
      return res.status(404).json({ error: "Monastery not found" });
    }
    res.json({ message: "Monastery deleted successfully" });
  } catch (err) {
    console.error("Delete monastery error:", err);
    if (err.name === "CastError") {
      return res.status(400).json({ error: "Invalid monastery ID" });
    }
    res.status(400).json({ error: err.message || "Failed to delete monastery" });
  }
};
