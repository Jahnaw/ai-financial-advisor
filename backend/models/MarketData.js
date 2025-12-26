const mongoose = require("mongoose");

const marketDataSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true, // e.g. NIFTY_50, GOLD_PRICE
    },
    currentValue: {
      type: Number,
      required: true,
    },
    previousValue: {
      type: Number,
      required: true,
    },
    unit: {
      type: String, // index points, INR/gram, %
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MarketData", marketDataSchema);
