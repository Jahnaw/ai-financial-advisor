const axios = require("axios");
const Advice = require("../models/Advice");
const Conversation = require("../models/Conversation");

/* =========================
   RULE-BASED FALLBACK
========================= */
function fallbackAdvice(question = "") {
  const q = question.toLowerCase();

  if (q.includes("budget")) {
    return `### Budgeting Basics
- Track income & expenses
- Follow 50-30-20 rule
- Reduce discretionary spends

**Next Action:** Track expenses for 30 days.`;
  }

  if (q.includes("sip") || q.includes("invest")) {
    return `### SIP Investing
- Start with diversified mutual funds
- Invest regularly
- Stay long-term

**Next Action:** Start a beginner SIP.`;
  }

  return `### Financial Health Tip
- Save consistently
- Spend mindfully
- Invest long-term

**Next Action:** Define one financial goal.`;
}

/* =========================
   CHATGPT-STYLE ADVICE
========================= */
exports.getAdvice = async (req, res, next) => {
  try {
    const { question, conversationId } = req.body;
    const userId = req.user.id;

    let conversation;

    /* ===== FIND OR CREATE CONVERSATION ===== */
    if (conversationId) {
      conversation = await Conversation.findOne({
        _id: conversationId,
        user: userId,
      });
    }

    if (!conversation) {
      conversation = await Conversation.create({
        user: userId,
        title: question.slice(0, 50), // auto title like ChatGPT
        messages: [],
      });
    }

    /* ===== ADD USER MESSAGE ===== */
    conversation.messages.push({
      role: "user",
      text: question,
    });

    const prompt = `
You are a professional financial advisor.

Rules:
- Structured response
- Headings
- Bullet points
- Clear next action

Conversation so far:
${conversation.messages
  .map((m) => `${m.role.toUpperCase()}: ${m.text}`)
  .join("\n")}

Answer the last question clearly.
`;

    let aiText = "";

    /* ===== TRY GEMINI ===== */
    try {
      const geminiRes = await axios.post(
        "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent",
        {
          contents: [{ parts: [{ text: prompt }] }],
        },
        {
          params: { key: process.env.GEMINI_API_KEY },
          headers: { "Content-Type": "application/json" },
        }
      );

      aiText =
        geminiRes?.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    } catch {
      aiText = fallbackAdvice(question);
    }

    /* ===== ADD AI MESSAGE ===== */
    conversation.messages.push({
      role: "ai",
      text: aiText,
    });

    await conversation.save();

    res.json({
      advice: aiText,
      conversationId: conversation._id,
    });
  } catch (err) {
    next(err);
  }
};
