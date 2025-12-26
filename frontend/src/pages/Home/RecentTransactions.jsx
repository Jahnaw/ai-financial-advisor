import React from "react";
import {
  FiShoppingCart,
  FiHome,
  FiCreditCard,
  FiActivity
} from "react-icons/fi";
import "./RecentTransactions.css";

const iconMap = {
  food: <FiShoppingCart />,
  rent: <FiHome />,
  subscription: <FiCreditCard />,
  default: <FiActivity />
};

export default function RecentTransactions({ expenses }) {
  return (
    <div className="transactions">
      <h3>Recent Transactions</h3>

      {expenses.length === 0 ? (
        <div className="empty-state">
          <p>No transactions yet</p>
          <span>Start tracking expenses to see insights</span>
        </div>
      ) : (
        <ul>
          {expenses.slice(0, 6).map((e, i) => (
            <li key={i}>
              <div className="txn-left">
                <div className="icon">
                  {iconMap[e.category] || iconMap.default}
                </div>
                <div>
                  <p className="title">{e.title || "Expense"}</p>
                  <span className="date">
                    {new Date(e.createdAt || Date.now()).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="amount">₹{e.amount}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
