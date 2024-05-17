import React, { useState } from "react";
import RoomCarousel from "../ImageGallery/RoomCarousel";

const Room_Card = () => {
  const [isReserveRoomModal, setIsReserveRoomModal] = useState(false);
  return (
    // {/* <!-- card --> */}
    <>
      <div className="bg-white border card rounded-xl overflow-hidden flex flex-col gap-2">
        <div className="h-52 bg-gray-200 w-full"></div>
        <div className="py-2 px-3 pb-3 flex flex-col gap-2">
          <h1 className="text-sm font-semibold">Two Bedroom Penthouse Suite</h1>
          <span className="text-sm flex items-center gap-3">
            <i className="fa-solid fa-user-group"></i>
            <h1>Sleeps 3</h1>
          </span>
          <h1 className="text-xs text-emerald font-semibold">
            Full Refundable
          </h1>
          <div className="mt-5 flex justify-between">
            <div className="flex flex-col">
              <h1 className="font-semibold">$1,025</h1>
              <p className="text-xs">include taxes & fees</p>
            </div>
            <div>
              <button
                onClick={() => setIsReserveRoomModal(!isReserveRoomModal)}
                className="bg-emerald text-white px-3 p-2 rounded-lg"
              >
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* modal */}
      {isReserveRoomModal && (
        <div className="inset-0 h-screen w-screen fixed bg-black bg-opacity-50 z-20">
          <div className="flex flex-col h-full w-full items-center justify-center">
            <div className="relative p-5 h-[calc(100%-5rem)] 2xl:h-[calc(100%-10rem)] bg-white w-[calc(100%-5rem)] md:w-[calc(100%-12rem)] lg:w-[calc(100%-24rem)] 2xl:w-[calc(100%-32rem)] rounded-xl overflow-y-scroll shadow-xl shadow-black">
              <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-2">
                <div className="h-full">
                  <RoomCarousel />
                </div>
                <div className="h-full flex flex-col gap-2 lg:px-10">
                  <h1 className="font-semibold text-3xl">
                    Two Bedroom Penthouse Suite
                  </h1>
                  <p className="text-xs 2xl:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    in nisi ut culpa, rem nobis iure saepe nihil ullam
                    dignissimos unde laudantium sapiente vel maiores vero
                    praesentium dolore, quasi ipsum! Vitae numquam laudantium
                    rem reprehenderit laborum aut quod voluptates cum sequi,
                    animi rerum suscipit, minus velit culpa perferendis mollitia
                    deserunt!
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
                      <span className="font-semibold">Pets:</span> Pets Not
                      Allowed
                    </h1>
                  </div>

                  <div className="mt-5 flex justify-end mb-5">
                      <button
                        className="bg-emerald text-white px-3 p-2 rounded-lg"
                      >
                        Reserve
                      </button>
                  </div>
                </div>
              </div>
              <div className="z-50 absolute top-2 right-2 h-8 w-8 rounded-full border bg-white text-red-500 hover:bg-red-500 hover:text-white duration-300 ease-in-out transform cursor-pointer">
                <button
                  onClick={() => setIsReserveRoomModal(!isReserveRoomModal)}
                  className="h-full w-full flex flex-col items-center justify-center"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Room_Card;
