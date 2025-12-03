import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ===============================
//    AI STORY GENERATION
// ===============================
export const generateStory = async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ story: "No query provided." });
  }

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",  // ✅ UPDATED MODEL
    });

    const prompt = `
You are a wise Buddhist storyteller from Sikkim.
Create a peaceful, emotional, culturally rich story about: ${query}
Include Sikkim legends, Tibetan Buddhism elements, history, and emotions.
Length: 2–3 paragraphs.
    `;

    const result = await model.generateContent(prompt);
    const story = result.response.text();

    return res.json({ story });
  } catch (err) {
    console.error("STORY ERROR:", err);
    return res.status(500).json({ story: "AI failed to generate story." });
  }
};

// ===============================
// STORY → AUDIO
// ===============================
export const generateStoryAudio = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: "No text provided" });
  }

  try {
    return res.json({
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    });
  } catch (err) {
    console.error("AUDIO ERROR:", err);
    return res.status(500).json({ message: "Failed to generate audio" });
  }
};
