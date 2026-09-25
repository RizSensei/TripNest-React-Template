import React from "react";
import { Link } from "react-router-dom";
import TripNestLogo from "../Logo/TripNestLogo";

const Footer = () => {
  return (
    <div className="mt-10 pb-6">
      <div className="flex flex-col items-center justify-center gap-5">
        <TripNestLogo />

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
          <Link to="/about" className="hover:text-emerald">About</Link>
          <Link to="/contact" className="hover:text-emerald">Contact</Link>
          <Link to="/faq" className="hover:text-emerald">FAQ</Link>
          <Link to="/trip-history" className="hover:text-emerald">Trips</Link>
        </div>

        <p className="font-medium text-sm">
          © 2024 TripNest . All Right Reserved . Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
