import express from "express";
import cors from "cors";

import ollama from "ollama";

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
Make the compliment sarcastic, teasing, or slightly mocking. 
Do NOT start your response with phrases like "Here is a compliment" or "Your compliment is". 
Keep it too short and funny.`,

        },
        { role: "user", content: "Give me one so short mocking." },
      ],
    });

    console.log("Ollama response:", response);

    res.json({ compliment: response.message?.content || "No response" });
  } catch (err) {
    console.error("Ollama error:", err);
    res.status(500).json({ compliment: null, error: err.message, stack: err.stack });
  }
});


app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});


