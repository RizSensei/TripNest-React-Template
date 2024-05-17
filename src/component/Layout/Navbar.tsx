import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile_Dropdown_Link from "../Route_Link/Profile_Dropdown_Link";
import TripNestLogo from "../Logo/TripNestLogo";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);

  return (
    <nav className="w-full py-5 flex justify-between border border-x-0 border-t-0">
      <TripNestLogo/>
      <section className="font-semibold flex gap-2 text-sm">
        <div className="flex border border-emerald overflow-hidden rounded-md divide-x">
          <button className="px-3 py-2 bg-emerald text-white">NPR</button>
          <button className="px-3 py-2">USD</button>
        </div>
        {isAuthenticated ? (
          <div className="relative h-full">
            <button
              onClick={() => setIsProfileDropdown(!isProfileDropdown)}
              id="profile-dropdown"
              className="h-full font-medium px-4 rounded-md text-white bg-emerald flex gap-1 justify-center items-center"
            >
              Rijan
            </button>
            {isProfileDropdown && (
              <div
                id="profile-dropdown-content"
                className="absolute top-12 right-0 w-56 z-10 border shadow-sm bg-white rounded-md overflow-hidden"
              >
                <div className="w-full flex items-end flex-col text-gray-600">
                <Profile_Dropdown_Link icon="user" label="My Profile" route=""/>
                <Profile_Dropdown_Link icon="heart" label="My Saved Trips" route="my-saved-trips"/>
                <Profile_Dropdown_Link icon="gear" label="Settings" route=""/>
                <Profile_Dropdown_Link icon="right-from-bracket" label="Sign Out" route="login"/>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="px-3 py-2 rounded-md text-white bg-emerald"
          >
            Sign in
          </Link>
        )}
      </section>
    </nav>
  );
};

export default Navbar;
