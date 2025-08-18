import ollama from "ollama";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

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

    res.status(200).json({ compliment: response.message?.content || "No response" });
  } catch (err) {
    console.error("Ollama error:", err);
    res.status(500).json({ compliment: null, error: err.message });
  }
}
