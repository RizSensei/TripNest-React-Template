import React from "react";
import { Link } from "react-router-dom";

const Property_Card = () => {
  return (
    // {/* <!-- card --> */}
    <Link
      to="/property-description"
      className="p-2 rounded-xl flex flex-col sm:flex-row gap-2 border"
    >
      <div className="relative h-52 aspect-square rounded-xl bg-gray-200">
        <div className="absolute rounded-full p-2 top-2 right-2 bg-white">
          <button className="h-4 w-4 flex flex-col items-center justify-center text-red-500">
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 px-2 font-medium">
        <h1 className="text-xl font-semibold">Radisson Hotel Kathmandu</h1>
        <h1 className="underline text-xs text-emerald">Kathmandu</h1>
        <p className="text-xs">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
          quas nam impedit dicta culpa nobis quas nam impedit dicta culpa nobis!
        </p>
        <div className="mt-2 flex w-full justify-between">
          <div className="flex items-center gap-2">
            <button
              disabled
              className="p-3 rounded-lg flex flex-col items-center justify-center bg-emerald text-white font-semibold"
            >
              9.6
            </button>
            <div className="font-semibold">
              <h1 className="text-sm">Excellent</h1>
              <p className="text-xs">102 Reviews</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              disabled
              className="py-3 px-8 rounded-lg flex flex-col items-center justify-center border border-emerald text-emerald font-semibold"
            >
              Prices
            </button>
            <button
              disabled
              className="text-xl p-3 rounded-lg flex flex-col items-center justify-center border border-emerald text-emerald font-semibold"
            >
              <i className="fa-solid fa-earth-americas"></i>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Property_Card;
