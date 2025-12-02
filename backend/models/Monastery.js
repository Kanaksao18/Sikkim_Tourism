import mongoose from "mongoose";

const monasterySchema = new mongoose.Schema({
  name: { type: String, required: true },
  sect: { type: String, required: true },       // Kagyu, Nyingma, Gelug…
  difficulty: { type: String, default: "Easy Access" },
  district: { type: String, required: true },   // East Sikkim, West Sikkim…
  foundedYear: { type: Number },
  
  description: { type: String },
  tags: [String],                               

  image: { type: String, required: true },      // Cloudinary or URL

  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Monastery", monasterySchema);
