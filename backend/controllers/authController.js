import User from "../models/User.js";
import dotenv from "dotenv";
import { generateFakeToken } from "../utils/generateFakeToken.js";

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
      const adminUser = {
        id: "admin-fixed-id",
        name: process.env.ADMIN_NAME || "Admin",
        email: process.env.ADMIN_EMAIL,
        role: "admin",
      };

      // Generate token
      const token = User.generateFakeToken("admin-fixed-id"); 
      // OR use your own generateToken function

      return res.json({
        message: "Admin login successful",
        user: adminUser,
        token,
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
