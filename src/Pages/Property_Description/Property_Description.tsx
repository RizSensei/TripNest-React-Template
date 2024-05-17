import React from "react";
import Layout from "../../component/Layout/Layout";
import Room_Card from "../../component/Room_Card/Room_Card";
import FilterSearch from "../../component/FilterSearch/FilterSearch";

const Property_Description = () => {
  return (
    <Layout>
      <div className="py-10 2xl:px-32 w-full">
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 rounded-xl overflow-hidden">
            <div className="h-60 md:h-full row-span-2 col-span-2 bg-gray-200"></div>
            <div className="h-48 bg-gray-200"></div>
            <div className="h-48 bg-gray-200"></div>
            <div className="h-48 bg-gray-200"></div>
            <div className="h-48 bg-gray-200"></div>
          </div>

          <div className="flex w-full justify-between">
            <section>
              <h1 className="text-3xl font-bold">Radisson Hotel Kathmandu</h1>
              <h1 className="text-emerald text-sm font-medium">
                Tripureshwor,Kathmandu
              </h1>
              <p className="flex gap-1 mt-1">
                <i className="fa-solid fa-star text-amber-600"></i>
                <i className="fa-solid fa-star text-amber-600"></i>
                <i className="fa-solid fa-star text-amber-600"></i>
                <i className="fa-solid fa-star text-amber-600"></i>
              </p>
            </section>
            <section className="flex items-center gap-2">
              <button className="text-xl h-max px-3 py-2 rounded-md flex flex-col items-center justify-center text-red-500">
                <i className="fa-regular fa-heart"></i>
              </button>
              <a
                href="#reserve-a-room"
                className="h-max font-medium px-3 py-2 rounded-md text-white bg-emerald flex flex-col items-center justify-center"
              >
                Reserve a room
              </a>
            </section>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full">
            <div className="flex flex-col gap-2 col-span-2">
              <p className="text-sm text-gray-700 text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis laboriosam eaque quaerat assumenda a exercitationem
                nihil neque ab cumque voluptatum, ipsa in ut aliquid, fugit
                veniam, molestiae fuga quae! Temporibus, soluta quod? Laboriosam
                ipsa praesentium veritatis dignissimos id molestiae incidunt
                fugiat. Voluptatem incidunt possimus natus praesentium,
                reiciendis qui ratione laudantium dolor ad esse aut ex
                aspernatur voluptatibus. Sint quibusdam consequuntur temporibus
                nam, libero illum? Non consequatur quisquam voluptatum quia
                vitae ipsa magnam facere doloribus molestias ut nisi, commodi
                beatae molestiae quas facilis, reprehenderit nobis. Illo
                reprehenderit, asperiores similique enim necessitatibus modi
                repellat, neque rerum eos, corporis sit. Dignissimos, tempora
                maiores?
              </p>

              <div className="flex items-center gap-2 mt-2">
                <button
                  disabled
                  className="p-3 rounded-lg flex flex-col items-center justify-center bg-emerald text-white font-semibold"
                >
                  9.6
                </button>
                <div className="font-semibold">
                  <h1 className="text-sm">Excellent</h1>
                  <p className="text-xs text-emerald">102 Reviews</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-5">
                <h1 className="text-lg font-semibold">Popular Amneties</h1>
                <div className="max-w-sm w-full grid grid-cols-2 gap-2">
                  <span className="text-sm flex items-center gap-2">
                    <i className="fa-solid fa-paw text-emerald"></i>
                    <h1>Pet friendly</h1>
                  </span>
                  <span className="text-sm flex items-center gap-2">
                    <i className="fa-solid fa-bowl-food text-emerald"></i>
                    <h1>Breakfast available</h1>
                  </span>
                  <span className="text-sm flex items-center gap-2">
                    <i className="fa-solid fa-square-parking text-emerald"></i>
                    <h1>Parking available</h1>
                  </span>
                  <span className="text-sm flex items-center gap-2">
                    <i className="fa-solid fa-snowflake text-emerald"></i>
                    <h1>Air conditioning</h1>
                  </span>
                  <span className="text-sm flex items-center gap-2">
                    <i className="fa-solid fa-person-swimming text-emerald"></i>
                    <h1>Swimming Pool</h1>
                  </span>
                  <span className="text-sm flex items-center gap-2">
                    <i className="fa-solid fa-computer text-emerald"></i>
                    <h1>24/7 front desk</h1>
                  </span>
                </div>
                <a href="#" className="underline text-sm text-blue-500">
                  See all property amenities
                </a>
              </div>
            </div>
            <div className="col-span-1 w-full px-0 md:pl-10">
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

          <div className="bg-emerald text-white text-3xl w-full py-10 flex flex-col items-center justify-center rounded-md shadow shadow-gray-200">
            <p className="font-dynapuff">
              <a href="./signin.html" className="underline">
                Sign in
              </a>{" "}
              to get 10% Off /-
            </p>
          </div>

          <div id="reserve-a-room" className="mt-5">
            <h1 className="flex text-xl font-bold">Choose your room</h1>

            <div className="rounded-md bg-white shadow-md shadow-gray-300">
              <FilterSearch />
            </div>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <Room_Card />
              <Room_Card />
              <Room_Card />
              <Room_Card />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Property_Description;
