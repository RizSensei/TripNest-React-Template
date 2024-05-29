import React from "react";

const Amneties_Card = ({ icon, label }) => {
  return (
    <span className="border p-3 rounded-xl text-sm flex items-center gap-2">
      <i className={`fa-solid fa-${icon} text-emerald`}></i>
      <h1>{label}</h1>
    </span>
  );
};

export default Amneties_Card;
