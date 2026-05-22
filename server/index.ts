import "dotenv/config";
import cors from "cors";
import express from "express";
import { GoogleGenAI } from "@google/genai";

const app = express();

const PORT = Number(process.env.PORT ?? 8787);
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  throw new Error("Missing GEMINI_API_KEY in .env");
}

const ai = new GoogleGenAI({
  apiKey: GEMINI_API_KEY,
});

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:4173",
  "http://localhost:5174",
  "https://your-vercel-domain.vercel.app",
  "https://your-custom-domain.com",
];

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
  })
);

app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/travel-chat", async (req, res) => {
  try {
    const message = String(req.body?.message ?? "").trim();

    if (!message) {
      return res.status(400).json({
        error: "Message is required.",
      });
    }

    if (message.length > 1200) {
      return res.status(400).json({
        error: "Message is too long. Please keep it under 1200 characters.",
      });
    }

    const prompt = `
You are Traveluxe AI Travel Planner.

Your job:
- Help users plan trips.
- Answer only travel planning questions.
- Keep the answer clean, short, practical, premium, and easy to read.
- Use simple headings and bullets.
- Do not write huge paragraphs.
- If important details are missing, still give a useful starter answer.
- Always ask one smart follow-up question at the end.
- Always provide 3 short clickable follow-up suggestions based on the user's message.
- Suggestions must be action-style prompts the user can click.
- Keep suggestions short, max 8 words each.

Important:
Return ONLY valid JSON.
Do not use markdown fences.
Do not add extra text outside JSON.

User message:
${message}

Return this exact JSON shape:
{
  "reply": "Trip Summary:\\n- ...\\n\\nSuggested Plan:\\n- Day 1: ...\\n- Day 2: ...\\n- Day 3: ...\\n\\nStay Ideas:\\n- ...\\n\\nFood & Experiences:\\n- ...\\n\\nTravel Tips:\\n- ...",
  "followUpQuestion": "One useful follow-up question here?",
  "suggestions": [
    "Make it budget friendly",
    "Add luxury hotels",
    "Extend to 7 days"
  ]
}
`;

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: prompt,
    });

    const rawText = result.text?.trim();

    if (!rawText) {
      return res.json({
        reply:
          "I can help you plan your trip. Please share your destination, travel dates, budget, and travel style.",
        followUpQuestion: "Where would you like to travel?",
        suggestions: [
          "Plan a Goa trip",
          "Suggest honeymoon places",
          "Find budget destinations",
        ],
      });
    }

    let parsedResponse: {
      reply?: string;
      followUpQuestion?: string;
      suggestions?: string[];
    };

    try {
      const cleanedText = rawText
        .replace(/^```json/i, "")
        .replace(/^```/i, "")
        .replace(/```$/i, "")
        .trim();

      parsedResponse = JSON.parse(cleanedText);
    } catch {
      parsedResponse = {
        reply: rawText,
        followUpQuestion: "Would you like me to customize this plan further?",
        suggestions: [
          "Make it budget friendly",
          "Add luxury hotels",
          "Extend to 7 days",
        ],
      };
    }

    const reply =
      typeof parsedResponse.reply === "string" && parsedResponse.reply.trim()
        ? parsedResponse.reply.trim()
        : "I can help you plan your trip. Please share your destination, dates, budget, and travel style.";

    const followUpQuestion =
      typeof parsedResponse.followUpQuestion === "string" &&
      parsedResponse.followUpQuestion.trim()
        ? parsedResponse.followUpQuestion.trim()
        : "Would you like me to customize this plan further?";

    const suggestions = Array.isArray(parsedResponse.suggestions)
      ? parsedResponse.suggestions
          .filter((item) => typeof item === "string")
          .map((item) => item.trim())
          .filter(Boolean)
          .slice(0, 3)
      : [];

    return res.json({
      reply,
      followUpQuestion,
      suggestions:
        suggestions.length > 0
          ? suggestions
          : ["Make it budget friendly", "Add luxury hotels", "Extend to 7 days"],
    });
  } catch (error) {
    console.error("Gemini error:", error);

    return res.status(500).json({
      error: "AI assistant is temporarily unavailable. Please try again shortly.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`AI server running on http://localhost:${PORT}`);
});