import axios from "axios";

export const getMarketSummary = async () => {
  const response = await axios.get(
    "http://localhost:5000/api/market/summary"
  );
  return response.data;
};
