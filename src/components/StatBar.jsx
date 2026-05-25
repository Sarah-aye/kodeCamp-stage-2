import React from "react";

const StatBar = ({ score, label = "Score" }) => {
  const red = "#f44336";
  const green = "#4caf50";
  const orange = "#ff9800";

  const backgroundColor = `${score >= 80 && score <= 100 ? green : score >= 60 && score <= 79 ? orange : red}`;

  return (
    <div>
      {label}:
      <span
        style={{
          width: `${score}%`,
          backgroundColor,
          height: "20px",
          display: "inline-block",
        }}
      ></span>
      {score}%
    </div>
  );
};

export default StatBar;
