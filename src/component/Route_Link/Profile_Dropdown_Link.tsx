import React from "react";
import { Link } from "react-router-dom";

const Profile_Dropdown_Link = ({ route, icon, label}) => {
  return (
    <Link
      to={`/${route}`}
      className="flex w-full items-center gap-3 px-5 py-3 text-sm transition duration-200 hover:bg-orange-50 hover:text-orange-700"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-stone-100 text-xs text-orange-600">
        <i className={`fa-solid fa-${icon}`}></i>
      </span>
      <h1 className="font-medium">{label}</h1>
    </Link>
  );
};

export default Profile_Dropdown_Link;
