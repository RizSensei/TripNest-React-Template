import React from "react";
import TripNestLogo from "../Logo/TripNestLogo";

const Footer = () => {
  return (
    <div className="mt-10 pb-2">
      <div className="flex flex-col items-center justify-center gap-5">
        <TripNestLogo />

        <p className="font-medium text-sm">
          © 2024 TripNest . All Right Reserved . Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
