const Conversation = require("../models/Conversation");

/* ===== GET ALL CONVERSATIONS FOR USER ===== */
exports.getConversations = async (req, res, next) => {
  try {
    const conversations = await Conversation.find({ user: req.user.id })
      .sort({ updatedAt: -1 })
      .select("_id messages createdAt updatedAt");

    res.json(conversations);
  } catch (err) {
    next(err);
  }
};
