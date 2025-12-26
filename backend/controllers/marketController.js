const MarketData = require("../models/MarketData");

exports.getMarketSummary = async (req, res) => {
  try {
    const data = await MarketData.find();

    const summary = {};

    data.forEach(item => {
      const change = item.currentValue - item.previousValue;
      const percentChange =
        ((change / item.previousValue) * 100).toFixed(2);

      summary[item.key] = {
        value: item.currentValue,
        change: percentChange,
        trend: change >= 0 ? "up" : "down",
        updatedAt: item.updatedAt,
        unit: item.unit,
      };
    });

    res.status(200).json(summary);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch market data" });
  }
};
