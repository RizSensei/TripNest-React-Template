import React, { useState } from "react";
import { Link } from "react-router-dom";

const FilterSearch = () => {
  const [isTravellerDropdown, setIsTravellerDropdown] = useState(false);
  return (
    
      <div className="p-10 w-full grid grid-cols-1 md:grid-cols-4 gap-2">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M10 1c4.963 0 9 4.037 9 9s-9 10-9 10-9-5.037-9-10S5.037 1 10 1zm0 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
            </svg>
          </div>
          <input
            type="text"
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5 focus:outline-none"
            placeholder="Location"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fill-rule="evenodd"
                d="M5 3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V3zm0 2v1h10V5H5zM3 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8H3z"
              />
            </svg>
          </div>
          <input
            type="text"
            readOnly
            name="daterange"
            id="input-group-2"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5 focus:outline-none"
            placeholder="Check in -- Check out"
          />
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:outline-none"
            placeholder="Travellers"
            onClick={() => setIsTravellerDropdown(!isTravellerDropdown)}
            readOnly
          />

          {isTravellerDropdown && (
            <div className="absolute top-[42px] z-10 w-full rounded-md border bg-white px-5 py-3 text-sm shadow">
              <div className="flex flex-col gap-2">
                {/* <!-- adults --> */}
                <div className="flex items-center justify-between">
                  <h1 className="font-medium">Adults</h1>
                  <div className="flex overflow-hidden rounded-md border font-semibold">
                    <button className="flex flex-col items-center justify-center px-3 py-2">
                      -
                    </button>
                    <input
                      type="text"
                      readOnly
                      className="w-10 p-2 px-3 focus:outline-none"
                      value="1"
                    />
                    <button className="flex flex-col items-center justify-center px-3 py-2">
                      +
                    </button>
                  </div>
                </div>
                {/* <!-- children --> */}
                <div className="flex items-center justify-between">
                  <h1 className="font-medium">Children</h1>
                  <div className="flex overflow-hidden rounded-md border font-semibold">
                    <button className="flex flex-col items-center justify-center px-3 py-2">
                      -
                    </button>
                    <input
                      type="text"
                      readOnly
                      className="w-10 p-2 px-3 focus:outline-none"
                      value="0"
                    />
                    <button className="flex flex-col items-center justify-center px-3 py-2">
                      +
                    </button>
                  </div>
                </div>
                {/* <!-- rooms --> */}
                <div className="flex items-center justify-between">
                  <h1 className="font-medium">Rooms</h1>
                  <div className="flex overflow-hidden rounded-md border font-semibold">
                    <button className="flex flex-col items-center justify-center px-3 py-2">
                      -
                    </button>
                    <input
                      type="text"
                      readOnly
                      className="w-10 p-2 px-3 focus:outline-none"
                      value="1"
                    />
                    <button className="flex flex-col items-center justify-center px-3 py-2">
                      +
                    </button>
                  </div>
                </div>
                <hr className="mt-2 w-full" />
                {/* <!-- travellig with pets? --> */}
                <div className="flex items-center justify-between">
                  <h1 className="text-xs font-medium">Travelling with pets?</h1>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input type="checkbox" className="toggle toggle-xs" />
                    </label>
                  </div>
                </div>

                <button onClick={() => setIsTravellerDropdown(!isTravellerDropdown)} className="bg-emerald rounded-md px-7 py-2 text-white">
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

        <Link to="/properties"
          className="text-center text-sm md:text-base h-max px-3 py-2 rounded-lg text-white bg-emerald transform duration-300 ease-in-out"
        >
          Search
        </Link>
      </div>
  );
};

export default FilterSearch;
