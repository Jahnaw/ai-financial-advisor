import "./HealthScoreCard.css";

export default function HealthScoreCard({ score }) {
  const status =
    score >= 70 ? "Excellent" : score >= 40 ? "Moderate" : "Critical";

  return (
    <div className="health-card">
      <span className="health-label">Financial Health</span>
      <div className="health-score">{score}</div>
      <p className={`health-status ${status.toLowerCase()}`}>{status}</p>

      <div className="scale">
        <span>0</span>
        <span>100</span>
      </div>
    </div>
  );
}
