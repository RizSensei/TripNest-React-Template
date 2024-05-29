import React from "react";
import Layout from "../../component/Layout/Layout";
import Property_Card from "../../component/Property_Card/Property_Card";
import { saved_properties } from "../../../public/mock/saved_properties";

const M_Saved_Trips = () => {
  return (
    <Layout>
      <div className="mt-5 pb-10 pt-5 2xl:px-32 w-full">
        <div className="w-full gap-5 sm:gap-0 flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">My Saved Trips</h1>
            <div className="flex items-center gap-2 text-sm text-red-500">
              <i className="fa-solid fa-heart"></i>
              <h1>2 Saved Properties</h1>
            </div>
          </div>
          <div className="h-32 w-56">
            <a
              href="#"
              className="card w-full shadow-md rounded-md overflow-hidden"
            >
              <figure>
                <img
                  src="https://cdn.ttgtmedia.com/rms/onlineimages/screenshot_1_google_maps_on_desktop_f_mobile.jpg"
                  alt="Map"
                  className="w-full"
                />
              </figure>
            </a>
          </div>
        </div>
        <hr className="w-full my-5" />
        <div className="w-full py-2 px-20 2xl:px-0">
          <div className="flex gap-2">
            <button className="font-medium px-3 py-2 rounded-md bg-emerald text-white">
              All
            </button>
            <button className="font-medium px-3 py-2 rounded-md border border-emerald text-emerald">
              Hotels
            </button>
            <button className="font-medium px-3 py-2 rounded-md border border-emerald text-emerald">
              Apartments
            </button>
            <button className="font-medium px-3 py-2 rounded-md border border-emerald text-emerald">
              Lodges
            </button>
          </div>
          <div className="w-full mt-5 grid grid-cols-1 2xl:grid-cols-2 gap-5">
            {saved_properties?.map((distinct_property) => (
              <Property_Card property={distinct_property}/>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default M_Saved_Trips;
