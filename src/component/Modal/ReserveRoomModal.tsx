import React from "react";
import Modal_Layout from "./Modal_Layout";
import RoomCarousel from "../ImageGallery/RoomCarousel";

const ReserveRoomModal = ({ toggleReserveRoomModal }) => {
  return (
    <Modal_Layout position='centre'>
      <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="h-full">
          <RoomCarousel />
        </div>
        <div className="h-full flex flex-col gap-2 lg:px-10">
          <h1 className="font-semibold text-3xl">
            Two Bedroom Penthouse Suite
          </h1>
          <p className="text-xs 2xl:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed in nisi
            ut culpa, rem nobis iure saepe nihil ullam dignissimos unde
            laudantium sapiente vel maiores vero praesentium dolore, quasi
            ipsum! Vitae numquam laudantium rem reprehenderit laborum aut quod
            voluptates cum sequi, animi rerum suscipit, minus velit culpa
            perferendis mollitia deserunt!
          </p>

          <div className="flex flex-col gap-2 mt-5">
            <h1 className="font-semibold">In your private bathroom:</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 gap-2 text-xs 2xl:text-sm">
              <section className="flex items-center gap-2">
                <i className="fa-solid fa-check"></i>
                <h1>Free toiletries</h1>
              </section>
              <section className="flex items-center gap-2">
                <i className="fa-solid fa-check"></i>
                <h1>Free toiletries</h1>
              </section>
              <section className="flex items-center gap-2">
                <i className="fa-solid fa-check"></i>
                <h1>Free toiletries</h1>
              </section>
              <section className="flex items-center gap-2">
                <i className="fa-solid fa-check"></i>
                <h1>Free toiletries</h1>
              </section>
              <section className="flex items-center gap-2">
                <i className="fa-solid fa-check"></i>
                <h1>Free toiletries</h1>
              </section>
              <section className="flex items-center gap-2">
                <i className="fa-solid fa-check"></i>
                <h1>Free toiletries</h1>
              </section>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-5">
            <h1 className="font-semibold">In your private bathroom:</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 gap-2 text-xs 2xl:text-sm">
              <section className="flex items-center gap-2">
                <i className="fa-solid fa-check"></i>
                <h1>Desk</h1>
              </section>
              <section className="flex items-center gap-2">
                <i className="fa-solid fa-check"></i>
                <h1>Tea/Coffee maker</h1>
              </section>
              <section className="flex items-center gap-2">
                <i className="fa-solid fa-check"></i>
                <h1>Books, DVDs or music for children</h1>
              </section>
              <section className="flex items-center gap-2">
                <i className="fa-solid fa-check"></i>
                <h1>Air conditioning</h1>
              </section>
              <section className="flex items-center gap-2">
                <i className="fa-solid fa-check"></i>
                <h1>Ironing facilities</h1>
              </section>
              <section className="flex items-center gap-2">
                <i className="fa-solid fa-check"></i>
                <h1>Socket near the bed</h1>
              </section>
              <section className="flex items-center gap-2">
                <i className="fa-solid fa-check"></i>
                <h1>Desk</h1>
              </section>
              <section className="flex items-center gap-2">
                <i className="fa-solid fa-check"></i>
                <h1>Tea/Coffee maker</h1>
              </section>
              <section className="flex items-center gap-2">
                <i className="fa-solid fa-check"></i>
                <h1>Books, DVDs or music for children</h1>
              </section>
              <section className="flex items-center gap-2">
                <i className="fa-solid fa-check"></i>
                <h1>Air conditioning</h1>
              </section>
              <section className="flex items-center gap-2">
                <i className="fa-solid fa-check"></i>
                <h1>Ironing facilities</h1>
              </section>
              <section className="flex items-center gap-2">
                <i className="fa-solid fa-check"></i>
                <h1>Socket near the bed</h1>
              </section>
            </div>
          </div>

          <div className="text-sm mt-5">
            <h1>
              <span className="font-semibold">Smoking:</span> No Smoking
            </h1>
          </div>

          <div className="text-sm mt-5">
            <h1>
              <span className="font-semibold">Pets:</span> Pets Not Allowed
            </h1>
          </div>

          <div className="mt-5 flex justify-end mb-5">
            <button className="bg-emerald text-white px-3 p-2 rounded-lg">
              Reserve
            </button>
          </div>
        </div>
      </div>
      <div className="z-50 absolute top-2 right-2 h-8 w-8 rounded-full border bg-white text-red-500 hover:bg-red-500 hover:text-white duration-300 ease-in-out transform cursor-pointer">
        <button
          onClick={() => toggleReserveRoomModal()}
          className="h-full w-full flex flex-col items-center justify-center"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </Modal_Layout>
  );
};

export default ReserveRoomModal;
