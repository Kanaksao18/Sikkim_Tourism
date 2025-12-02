import express from "express";
import {
  getMonasteries,
  getMonastery,
  createMonastery,
  updateMonastery,
  deleteMonastery
} from "../controllers/monasteryController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public
router.get("/", getMonasteries);
router.get("/:id", getMonastery);

// Admin Protected Routes
router.post("/", protect, adminOnly, createMonastery);
router.put("/:id", protect, adminOnly, updateMonastery);
router.delete("/:id", protect, adminOnly, deleteMonastery);

export default router;
