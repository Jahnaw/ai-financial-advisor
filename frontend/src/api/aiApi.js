import axiosClient from "./axiosClient";

export const requestAdvice = (payload) =>
  axiosClient.post("/api/ai/advice", payload);

export const fetchConversations = () =>
  axiosClient.get("/api/ai/conversations");
