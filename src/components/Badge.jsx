import React from "react";

const Badge = ({ label, type = "track" }) => {
  return (
    <div>
      <span className={`badge badge-${type}`}>{label}</span>
    </div>
  );
};

export default Badge;
