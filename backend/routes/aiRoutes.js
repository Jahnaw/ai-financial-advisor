const router = require("express").Router();
const { body } = require("express-validator");
const aiController = require("../controllers/aiController");
const conversationController = require("../controllers/conversationController");
const auth = require("../middleware/authMiddleware");

router.post(
  "/advice",
  auth,
  [body("question").isString().notEmpty()],
  aiController.getAdvice
);

router.get("/conversations", auth, conversationController.getConversations);

module.exports = router;
