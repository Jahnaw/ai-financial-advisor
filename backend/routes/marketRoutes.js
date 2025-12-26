const express = require("express");
const router = express.Router();
const { getMarketSummary } = require("../controllers/marketController");

router.get("/summary", getMarketSummary);

module.exports = router;
