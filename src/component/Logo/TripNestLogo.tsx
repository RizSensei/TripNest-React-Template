import React from "react";
import { Link } from "react-router-dom";

const TripNestLogo = () => {
  return (
    <Link to="/" className="flex flex-col items-start leading-none">
      <span className="text-3xl font-dynapuff tracking-tight">
        <span className="text-amber-500">T</span>rip
        <span className="text-amber-500">N</span>est
      </span>
      <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-orange-700">
        The 6:00 AM View
      </span>
    </Link>
  );
};

export default TripNestLogo;
