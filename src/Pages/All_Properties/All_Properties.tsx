import React from "react";
import Layout from "../../component/Layout/Layout";
import Property_Card from "../../component/Property_Card/Property_Card";
import FilterSearch from "../../component/FilterSearch/FilterSearch";
import { Link } from "react-router-dom";
import properties from "../../../public/mock/properties"

const All_Properties = () => {
  return (
    <Layout>
      <div className=" my-2 rounded-md bg-white shadow-md shadow-gray-300">
        <FilterSearch/>
      </div>
      

      <div className="mt-0  flex gap-5">
        <div className="w-1/4 px-5 hidden lg:inline-block">
          <a href="#" className="card w-full shadow-md">
            <figure>
              <img
                src="https://cdn.ttgtmedia.com/rms/onlineimages/screenshot_1_google_maps_on_desktop_f_mobile.jpg"
                alt="Map"
              />
            </figure>

            <h2 className="py-3 text-center font-semibold text-emerald">
              View Map
            </h2>
          </a>
          <div className="mt-5 flex flex-col gap-5">
            <h1 className="font-semibold">Filter By:</h1>

            {/* <!-- Property Filter --> */}
            <div className="text-sm">
              <h1 className="font-semibold text-sm">Property</h1>
              <div className="flex flex-col mt-2 gap-1">
                <span className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm emerald-checkbox"
                  />
                  Hotels
                </span>
                <span className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm emerald-checkbox"
                  />
                  Apartments
                </span>
                <span className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm emerald-checkbox"
                  />
                  Lodges
                </span>
                <span className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm emerald-checkbox"
                  />
                  Resorts
                </span>
                <span className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm emerald-checkbox"
                  />
                  Cottages
                </span>
                <span className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm emerald-checkbox"
                  />
                  HomeStays
                </span>
              </div>
            </div>

            {/* <!-- Amneties Filter --> */}
            <div className="text-sm">
              <h1 className="font-semibold text-sm">Amneties</h1>
              <div className="flex flex-col mt-2 gap-1">
                <span className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm emerald-checkbox"
                  />
                  Parking
                </span>
                <span className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm emerald-checkbox"
                  />
                  Wifi included
                </span>
                <span className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm emerald-checkbox"
                  />
                  Gym
                </span>
                <span className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm emerald-checkbox"
                  />
                  Restaurant
                </span>
                <span className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm emerald-checkbox"
                  />
                  Outdoor space
                </span>
                <span className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm emerald-checkbox"
                  />
                  Bar
                </span>
              </div>
            </div>

            {/* <!-- Rating FIlter --> */}
            <div className="text-sm">
              <h1 className="font-semibold text-sm">Rating</h1>
              <div className="flex flex-wrap mt-2 gap-1 font-semibold">
                <button className="px-2 p-1 border-2 rounded-lg">
                  1 <i className="fa-regular fa-star text-emerald"></i>
                </button>
                <button className="px-2 p-1 border-2 rounded-lg">
                  2 <i className="fa-regular fa-star text-emerald"></i>
                </button>
                <button className="px-2 p-1 border-2 rounded-lg">
                  3 <i className="fa-regular fa-star text-emerald"></i>
                </button>
                <button className="px-2 p-1 border-2 rounded-lg">
                  4 <i className="fa-regular fa-star text-emerald"></i>
                </button>
                <button className="px-2 p-1 border-2 rounded-lg">
                  5 <i className="fa-regular fa-star text-emerald"></i>
                </button>
              </div>
            </div>

            {/* <!-- Cities Filter --> */}
            <div className="text-sm">
              <h1 className="font-semibold text-sm">Cities</h1>
              <div className="flex flex-col mt-2 gap-1">
                <span className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm emerald-checkbox"
                  />
                  Kathmandu
                </span>
                <span className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm emerald-checkbox"
                  />
                  Gorkha
                </span>
                <span className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm emerald-checkbox"
                  />
                  Pokahra
                </span>
                <span className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm emerald-checkbox"
                  />
                  Bhairahwa
                </span>
                <span className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm emerald-checkbox"
                  />
                  Bhaktapur
                </span>
                <span className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm emerald-checkbox"
                  />
                  Dolkha
                </span>
              </div>
            </div>

            {/* <!-- Price Filter --> */}
            <div className="text-sm">
              <h1 className="font-semibold text-sm">Price</h1>
              <div className="flex flex-col mt-2 gap-1">
                <div className="flex gap-5 mb-2">
                  <label className="form-control w-max">
                    <div className="label">
                      <span className="label-text">Min</span>
                    </div>
                    <input
                      type="text"
                      placeholder="$"
                      className="input input-bordered w-20 focus:outline-none"
                    />
                  </label>
                  <label className="form-control w-max">
                    <div className="label">
                      <span className="label-text">Max</span>
                    </div>
                    <input
                      type="text"
                      placeholder="$"
                      className="input input-bordered w-20 focus:outline-none"
                    />
                  </label>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value="500"
                  className="range range-xs"
                  step="25"
                />
              </div>
            </div>

            {/* <!-- Reserve now, pay later Filter --> */}
            <div className="text-sm">
              <h1 className="font-semibold text-sm">Payment type</h1>
              <div className="flex flex-col mt-2 gap-1">
                <span className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm emerald-checkbox"
                  />
                  Reserve now, pay later
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/4">
          <div className="flex gap-2 lg:hidden">
            <button className="w-full text-sm md:text-base h-max px-3 py-2 rounded-lg text-white bg-emerald transform duration-300 ease-in-out">
              Filter
            </button>
            <button className="w-full text-sm md:text-base h-max px-3 py-2 rounded-lg text-white bg-emerald transform duration-300 ease-in-out">
              View Map
            </button>
          </div>
          <div className="mt-5 flex items-center justify-between gap-5">
            <div className="flex items-center gap-2">
              <Link to="/"
                className="text-sm md:text-base h-max px-3 py-2 rounded-lg text-white bg-emerald transform duration-300 ease-in-out"
              >
                <i className="fa-solid fa-less-than"></i>
              </Link>
              <h1 className="text-sm font-semibold text-gray-600">
                300+ Properties
              </h1>
            </div>
            <select className="select select-bordered w-full max-w-xs focus:outline-none">
              <option disabled selected className="py-2">
                Sort By
              </option>
              <option className="py-2">Price: Low To High</option>
              <option className="py-2">Price: High To Low</option>
            </select>
          </div>
          <div className="mt-5 grid grid-cols-1 2xl:grid-cols-2 gap-5">
            {
              properties && properties.map((distinct_property) => (
                <Property_Card property={distinct_property} />
              ))
            }
            
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default All_Properties;
