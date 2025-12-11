import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Recommended stable model for fast content generation
const GENERATION_MODEL = "gemini-2.5-flash"; 

//     AI STORY GENERATION
 
export const generateStory = async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ story: "No query provided." });
  }

  try {
    // Get the generative model instance
    const model = genAI.getGenerativeModel({
      model: GENERATION_MODEL, 
    });

    const prompt = `
You are a wise Buddhist storyteller from Sikkim.
Create a peaceful, emotional, culturally rich story about: ${query}
Include Sikkim legends, Tibetan Buddhism elements, history, and emotions.
Length: 2–3 paragraphs.
    `;

    // Generate content
    const result = await model.generateContent(prompt);
    const story = result.response.text();

    return res.json({ story });
  } catch (err) {
    // Log detailed error and return a generic 500
    console.error("STORY ERROR:", err);
    return res.status(500).json({ story: "AI failed to generate story. Check backend logs for API errors." });
  }
};


 
export const generateStoryAudio = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: "No text provided" });
  }

  try {
    // Placeholder: Return a fixed audio link
    return res.json({
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      message: "Audio placeholder returned. Integrate Google Cloud TTS for real audio generation."
    });
    
    // To implement real audio, you would use a separate Google Cloud TTS SDK here.
    
  } catch (err) {
    console.error("AUDIO ERROR:", err);
    return res.status(500).json({ message: "Failed to generate audio" });
  }
};