import express from "express";
import cors from "cors";
import ollama from "ollama";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// API endpoint
app.post("/api/compliment", async (req, res) => {
  const { language, level } = req.body;

  if (!language || !level) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  try {
    const response = await ollama.chat({
      model: "mistral:7b",
      messages: [
        {
          role: "system",
          content: `You are a backhanded compliment generator. 
The compliment MUST be entirely in ${language}, no other languages, do no translations, do no explanations.
Keep it under 20 words.
Make the compliment sarcastic, teasing, or slightly mocking, depending on ${level}. 
Do NOT start your response with phrases like "Here is a compliment" or "Your compliment is". 
Keep it too short and funny.`,
        },
        {
          role: "user",
          content: `Give me one short mocking compliment at ${level} level.`,
        },
      ],
    });

    console.log("Ollama response:", response);

    // Safely extract the message content
    const compliment =
      response?.message?.content ||
      response?.choices?.[0]?.message?.content ||
      "No response";

    res.json({ compliment });
  } catch (err) {
    console.error("Ollama error:", err);
    res
      .status(500)
      .json({ compliment: null, error: err.message, stack: err.stack });
  }
});

app.get("/", (req, res) => {
  res.send("FlatterMeNot server is running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
