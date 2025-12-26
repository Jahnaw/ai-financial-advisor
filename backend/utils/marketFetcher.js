const axios = require("axios");
const MarketData = require("../models/MarketData");

async function updateGold() {
  try {
    const response = await axios.get(
      "https://query1.finance.yahoo.com/v8/finance/chart/GC=F"
    );

    const result = response.data.chart.result[0];
    const goldUSD = result.meta.regularMarketPrice;

    // Convert USD/ounce → INR/gram (approx)
    const usdToInr = 83; // safe average for MVP
    const pricePerGram = (goldUSD * usdToInr) / 31.1035;

    const existing = await MarketData.findOne({ key: "GOLD_PRICE" });
    if (!existing) return;

    existing.previousValue = existing.currentValue;
    existing.currentValue = Number(pricePerGram.toFixed(2));

    await existing.save();
    console.log("✅ Gold price updated (Yahoo)");
  } catch (error) {
    console.error("❌ Gold update failed", error.message);
  }
}

// -------- NIFTY PROXY --------
async function updateNifty() {
  try {
    const apiKey = process.env.ALPHA_VANTAGE_KEY;

    const response = await axios.get("https://www.alphavantage.co/query", {
      params: {
        function: "GLOBAL_QUOTE",
        symbol: "NIFTYBEES.BSE",
        apikey: apiKey,
      },
    });

    const quote = response.data["Global Quote"];
    if (!quote) return;

    const newValue = Number(quote["05. price"]);

    const existing = await MarketData.findOne({ key: "NIFTY_50" });
    if (!existing) return;

    existing.previousValue = existing.currentValue;
    existing.currentValue = newValue;

    await existing.save();
    console.log("✅ NIFTY trend updated");
  } catch (error) {
    console.error("❌ NIFTY update failed", error.message);
  }
}

async function updateMarketData() {
  await updateGold();
  await updateNifty();
}

module.exports = updateMarketData;
