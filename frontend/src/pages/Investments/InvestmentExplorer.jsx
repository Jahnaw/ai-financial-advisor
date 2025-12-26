import React, { useEffect, useState } from "react";
import InvestmentCard from "../../components/InvestmentCard";
import { getMarketSummary } from "../../api/marketApi";
import "./InvestmentExplorer.css";

export default function InvestmentExplorer() {
  const [marketData, setMarketData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchMarket = async () => {
    try {
      setRefreshing(true);
      const data = await getMarketSummary();
      setMarketData(data);
    } catch (error) {
      console.error("Failed to fetch market data", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchMarket();
  }, []);

  if (loading) {
    return <p className="loading-text">Fetching live market data...</p>;
  }

  return (
    <div className="invest-page">
      <div className="investment-header">
        <h1 className="invest-title">
          <span className="invest-title-gradient">Market</span>
          <span className="invest-title-text"> Insights</span>
        </h1>

        <p className="invest-subtitle">
          Live snapshot of today’s market movements
        </p>
      </div>

      <div className="invest-live-row">
        <span className="live-indicator">
          <span className="live-dot" />
          Updated today at{" "}
          {marketData?.NIFTY_50?.updatedAt
            ? new Date(marketData.NIFTY_50.updatedAt).toLocaleTimeString()
            : "--"}
        </span>

        <button
          className="refresh-btn invest-refresh"
          onClick={fetchMarket}
          disabled={refreshing}
        >
          ⟳ Refresh
        </button>
      </div>

      <div className="invest-grid primary-grid">
        {[
          {
            title: "SIP – Large Cap Funds",
            risk: "Medium",
            duration: "5+ years",
            returns: (
              <span
                className={
                  marketData.NIFTY_50.trend === "up" ? "trend-up" : "trend-down"
                }
              >
                {marketData.NIFTY_50.trend === "up" ? "▲" : "▼"}{" "}
                {marketData.NIFTY_50.change}% today
              </span>
            ),
          },
          {
            title: "Gold ETF",
            risk: "Medium",
            duration: "3+ years",
            returns: (
              <span className="gold-price">
                ₹{marketData.GOLD_PRICE.value}/gram
              </span>
            ),
          },
        ].map((it, i) => (
          <InvestmentCard key={i} data={it} />
        ))}
      </div>
    </div>
  );
}
