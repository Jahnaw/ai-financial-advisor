import React, { useEffect, useState } from "react";
import { requestAdvice, fetchConversations } from "../../api/aiApi";
import ReactMarkdown from "react-markdown";
import "./AiAdvisorPage.css";

export default function AiAdvisorPage() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [conversationId, setConversationId] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showHistory, setShowHistory] = useState(false);
  const [activeConversation, setActiveConversation] = useState(null);

  /* ===== LOAD HISTORY ON PAGE LOAD ===== */
  useEffect(() => {
    fetchConversations()
      .then((res) => {
        const chats = res.data;
        setConversations(chats);

        // Auto-open latest chat (ChatGPT behavior)
        if (chats.length > 0) {
          setActiveConversation(chats[0]);
          setMessages(chats[0].messages);
          setConversationId(chats[0]._id);
        }
      })
      .catch((err) => {
        console.error("Conversation fetch failed", err);
      });
  }, []);

  /* ===== ASK AI ===== */
  const ask = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    setError(null);
    setLoading(true);

    const userMsg = { role: "user", text: question };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const res = await requestAdvice({
        question,
        conversationId,
      });

      const aiMsg = { role: "ai", text: res.data.advice };

      setMessages((prev) => [...prev, aiMsg]);
      setConversationId(res.data.conversationId);
      setQuestion("");
    } catch (err) {
      setError("AI error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  /* ===== START NEW CHAT ===== */
  const startNewChat = () => {
    setMessages([]);
    setConversationId(null);
    setActiveConversation(null);
  };

  return (
    <div className="ai-page">
      {/* HEADER */}
      <div className="ai-header">
        <div>
          <h2 className="ai-title">
            <span className="ai-title-gradient">AI</span>{" "}
            <span className="ai-title-text">Financial Advisor</span>
          </h2>

          <p className="ai-subtitle">
            Smart guidance for better money decisions.
          </p>
        </div>

        <button className="btn-cta" onClick={startNewChat}>
          New Chat
        </button>
      </div>

      {/* CHAT */}
      <div className="chat-container">
        {messages.length === 0 && (
          <div className="chat-empty">
            <p>Ask anything about your finances.</p>
            <ul>
              <li>How should I plan my budget?</li>
              <li>Is SIP good for beginners?</li>
              <li>How can I save more money?</li>
            </ul>
          </div>
        )}

        {messages.map((m, idx) => (
          <div key={idx} className={`chat-message ${m.role}`}>
            <div className="chat-bubble markdown">
              {m.role === "ai" ? (
                <ReactMarkdown>{m.text}</ReactMarkdown>
              ) : (
                m.text
              )}
            </div>
          </div>
        ))}
      </div>

      {error && <div className="ai-error">{error}</div>}

      {/* INPUT */}
      <form className="chat-input-bar" onSubmit={ask}>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask about budgeting, SIPs, savings…"
          rows={2}
        />
        <button className="btn-cta" type="submit" disabled={loading}>
          {loading ? "Thinking…" : "Ask AI"}
        </button>
      </form>

      {conversations.length > 0 && (
        <div className="previous-chats">
          <button
            className="previous-toggle"
            onClick={() => setShowHistory(!showHistory)}
          >
            Previous Chats
            <span className={`chevron ${showHistory ? "open" : ""}`}>⌄</span>
          </button>

          {showHistory && (
            <div className="previous-list">
              {conversations.map((c) => (
                <div
                  key={c._id}
                  className={`previous-card ${
                    activeConversation?._id === c._id ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveConversation(c);
                    setMessages(c.messages);
                    setConversationId(c._id);
                  }}
                >
                  {c.title || c.messages?.[0]?.text || "Untitled Chat"}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
