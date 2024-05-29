import React, { useState } from "react";
import Layout from "../../component/Layout/Layout";
import Room_Card from "../../component/Room_Card/Room_Card";
import FilterSearch from "../../component/FilterSearch/FilterSearch";
import Amneties_Card from "../../component/Amneties/Amneties_Card";
import Offer_Card from "../../component/Offers/Offer_Card";
import { amneties } from "../../../public/mock/amneties";

const Property_Description = () => {
  let dataPerRow = 6;
  const [next, setNext] = useState(dataPerRow);
  const handleMoreAmneties = () => {
    setNext(next + dataPerRow);
  };

  return (
    <Layout>
      <div className="py-10 2xl:px-32 w-full">
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 rounded-xl overflow-hidden">
            <div className="h-60 md:h-full row-span-2 col-span-2 bg-shade"></div>
            <div className="h-48 bg-shade"></div>
            <div className="h-48 bg-shade"></div>
            <div className="h-48 bg-shade"></div>
            <div className="relative h-48 bg-shade">
              <div className="cursor-pointer absolute px-3 py-2 rounded-md backdrop-blur-md bg-white/30 hover:bg-white/90 bottom-2 right-2 duration-300 ease-in-out transform">
                <div className="text-sm font-semibold flex gap-2 items-center justify-center w-full h-full">
                  <i className="fa-solid fa-images"></i>
                  <h1>10+</h1>
                </div>
              </div>
            </div>
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
                <div className="max-w-sm lg:max-w-2xl w-full grid grid-cols-2 lg:grid-cols-3 gap-2">
                  {amneties?.slice(0, next).map((amnety, index) => (
                    <Amneties_Card
                      key={index}
                      label={amnety.label}
                      icon={amnety.icon}
                    />
                  ))}
                </div>

                <div
                  className={`w-full flex justify-start ${
                    next >= amneties.length || amneties.length === 0
                      ? "hidden"
                      : " "
                  }`}
                >
                  <button
                    onClick={() => handleMoreAmneties()}
                    className="underline text-sm text-blue-500"
                  >
                    See all property amenities
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-1 w-full px-0 md:pl-10">
              <button className="card w-full shadow-md rounded-md overflow-hidden">
                <figure>
                  <img
                    src="https://cdn.ttgtmedia.com/rms/onlineimages/screenshot_1_google_maps_on_desktop_f_mobile.jpg"
                    alt="Map"
                    className="w-full"
                  />
                </figure>
              </button>
            </div>
          </div>

          <Offer_Card />

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
