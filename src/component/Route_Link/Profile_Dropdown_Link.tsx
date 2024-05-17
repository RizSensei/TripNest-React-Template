import React from "react";
import { Link } from "react-router-dom";

const Profile_Dropdown_Link = ({ route, icon, label}) => {
  return (
    <Link
      to={`/${route}`}
      className="w-full flex justify-between items-center py-3 px-5 hover:bg-emerald hover:text-white transform duration-300 ease-in-out"
    >
      <i className={`fa-solid fa-${icon}`}></i>
      <h1>{label}</h1>
    </Link>
  );
};

export default Profile_Dropdown_Link;
