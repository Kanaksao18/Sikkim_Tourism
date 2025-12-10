// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import monasteryRoutes from "./routes/monasteryRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";

dotenv.config();

// Validate required environment variables
if (!process.env.JWT_SECRET) {
  console.error("❌ ERROR: JWT_SECRET is not defined in .env file");
  console.error("Please create a .env file with JWT_SECRET. See ENV_SETUP.md for details.");
  process.exit(1);
}

if (!process.env.MONGO_URI) {
  console.error("❌ ERROR: MONGO_URI is not defined in .env file");
  console.error("Please create a .env file with MONGO_URI. See ENV_SETUP.md for details.");
  process.exit(1);
}

// Warn about optional but recommended variables
if (!process.env.GEMINI_API_KEY) {
  console.warn("⚠️  WARNING: GEMINI_API_KEY is not defined. AI story features will not work.");
  console.warn("To enable AI features, add GEMINI_API_KEY to your .env file.");
  console.warn("Get your API key from: https://makersuite.google.com/app/apikey");
}

// Recommended: read PORT and allowed origin from env
const PORT = process.env.PORT || 5000;
const ALLOWED_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173";

const app = express();

// CORS: allow only your frontend in production (set CLIENT_ORIGIN in .env)
app.use(
  cors({
    origin: (origin, callback) => {
      // allow requests with no origin like Postman, mobile apps, curl
      if (!origin) return callback(null, true);
      // Allow localhost on any port for development
      if (ALLOWED_ORIGIN === "*" || origin === ALLOWED_ORIGIN || origin.startsWith("http://localhost:")) {
        return callback(null, true);
      }
      callback(new Error("CORS policy: origin not allowed"));
    },
    credentials: true,
  })
);

app.use(express.json({ limit: "5mb" })); // increase if you upload images

// Basic routes (keep routes mounted after middleware)
app.use("/api/monasteries", monasteryRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("Monastery API running...");
});

// start server only after DB connection
const start = async () => {
  try {
    await connectDB(); // ensure this function throws on failure
    const server = app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );

    // graceful shutdown handlers
    process.on("unhandledRejection", (err) => {
      console.error("Unhandled Rejection:", err);
      server.close(() => process.exit(1));
    });
    process.on("uncaughtException", (err) => {
      console.error("Uncaught Exception:", err);
      server.close(() => process.exit(1));
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
};

start();
