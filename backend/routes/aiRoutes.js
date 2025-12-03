// import express from "express";

// const router = express.Router();

// // Simple AI logic (replace with OpenAI later)
// router.post("/search", async (req, res) => {
//   const { query } = req.body;

//   if (!query) {
//     return res.status(400).json({ answer: "No query provided." });
//   }

//   // SAMPLE RESPONSE (replace with RAG + LLM)
//   res.json({
//     answer: `You asked: "${query}".  
// Here you can return relevant monastery results based on MongoDB search.`,
//   });
// });

// router.post("/itinerary", async (req, res) => {
//   const { days, interests, startLocation } = req.body;

//   // SAMPLE STATIC RESPONSE (replace with real AI logic)
//   const sample = `
// Day 1:
// • Visit Rumtek Monastery near ${startLocation}
// • Focus: ${interests.join(", ")}
// • Scenic viewpoints & culture walk.

// Day 2:
// • Explore Pemayangtse Monastery
// • Learn about carved architecture and ancient texts.

// Day 3:
// • Visit Tashiding Monastery
// • Peaceful meditation and photography opportunities.
// `;

//   res.json({ itinerary: sample });
// });
// // STORY → AUDIO (MP3) – placeholder TTS implementation
// router.post("/story-audio", async (req, res) => {
//   const { text } = req.body;

//   if (!text) {
//     return res.status(400).json({ message: "No text provided" });
//   }

//   try {
//     // TODO: Plug in your TTS provider here (OpenAI, ElevenLabs, Google, etc.)

//     // Example (PSEUDO-CODE, not real):
//     // const audioBuffer = await someTTSService(text);
//     // const audioUrl = await uploadToCloudStorage(audioBuffer);
//     // return res.json({ audioUrl });

//     // For now, just send back a dummy URL (replace this with real audio)
//     return res.json({
//       audioUrl: "https://example.com/sample-monastery-story.mp3",
//     });
//   } catch (err) {
//     console.error("TTS error:", err.message);
//     return res.status(500).json({ message: "Failed to generate audio" });
//   }
// });

// export default router;
// import express from "express";
// import { generateStory, generateStoryAudio } from "../controllers/aiController.js";

// const router = express.Router();

// // --- AI STORY ---
// router.post("/story", generateStory);

// // --- AI STORY → AUDIO ---
// router.post("/story-audio", generateStoryAudio);

// // (your old sample routes kept)
// router.post("/search", (req, res) => {
//   const { query } = req.body;
//   res.json({ answer: `Search placeholder for: ${query}` });
// });

// router.post("/itinerary", (req, res) => {
//   res.json({ itinerary: "Itinerary placeholder response" });
// });

// export default router;
import express from "express";
import {
  generateStory,
  generateStoryAudio,
} from "../controllers/aiController.js";

const router = express.Router();

// AI Story
router.post("/story", generateStory);

// AI Story → MP3
router.post("/story-audio", generateStoryAudio);

// Old placeholder routes (optional)
router.post("/search", (req, res) => {
  const { query } = req.body;
  res.json({ answer: `Search placeholder for: ${query}` });
});

router.post("/itinerary", (req, res) => {
  res.json({ itinerary: "Itinerary placeholder response" });
});

export default router;
