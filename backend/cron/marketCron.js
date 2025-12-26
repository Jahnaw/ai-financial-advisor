const cron = require("node-cron");
const updateMarketData = require("../utils/marketFetcher");

// Runs every day at 9 AM IST
cron.schedule("0 9 * * *", async () => {
  console.log("⏰ Running daily market update...");
  await updateMarketData();
});
