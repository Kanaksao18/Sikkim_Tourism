import User from "../models/User.js";
import dotenv from "dotenv";
import { generateAdminToken } from "../utils/generateAdminToken.js";

dotenv.config();

/* ============================================
   REGISTER USER (No Admin Allowed)
=============================================== */
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // ❌ Prevent admin registration
    if (role === "admin") {
      return res.status(403).json({
        message: "Admin account cannot be created through signup",
      });
    }

    // Check if user already exists
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Email already registered" });
    }

     if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });
    }
    // Create user (tourist by default)
    const user = await User.create({
      name,
      email,
      password,
      role: role || "tourist",
    });

    const token = user.generateToken();

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });

  } catch (err) {
    res
      .status(500)
      .json({ message: "Registration failed", error: err.message });
  }
};

/* ============================================
   LOGIN USER (Admin from .env + DB users)
=============================================== */
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res
        .status(400)
        .json({ message: "Email and password required" });

    /* --------------------------------------------
       1️⃣ CHECK ADMIN LOGIN (from .env)
    -------------------------------------------- */
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
       return res.json({
        message: "Admin login success",
        user: {
          id: "admin-fixed-id",
          name: process.env.ADMIN_NAME || "Admin",
          email: process.env.ADMIN_EMAIL,
          role: "admin",
        },
        token: generateAdminToken(),
      });
    }
    /* --------------------------------------------
       2️⃣ NORMAL USER LOGIN (from database)
    -------------------------------------------- */
    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "User not found" });

    const isMatch = await user.matchPassword(password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid password" });

    const token = user.generateToken();

    return res.json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });

  } catch (err) {
    res
      .status(500)
      .json({ message: "Login failed", error: err.message });
  }
};
