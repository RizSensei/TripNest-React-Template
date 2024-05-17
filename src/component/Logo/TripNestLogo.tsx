import React from "react";
import { Link } from "react-router-dom";

const TripNestLogo = () => {
  return (
    <Link to='/' className="text-3xl font-dynapuff">
      <span className="text-emerald">T</span>rip
      <span className="text-emerald">N</span>est
    </Link>
  );
};

export default TripNestLogo;
