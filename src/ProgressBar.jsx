// ProgressBar.jsx
import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ stage }) => {
  const stages = [
    "Não Gostou",
    "Gostou Pouco",
    "Médio",
    "Gostou",
    "Gostou Muito",
  ];

  const progressWidth = `${(stage + 1) * 20}%`; {/* Cada estagio representa 20% da barra*/}

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: progressWidth }} />
      <div className="labels">
        {stages.map((label, index) => (
          <span key={index} className={stage === index ? "active" : ""}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
