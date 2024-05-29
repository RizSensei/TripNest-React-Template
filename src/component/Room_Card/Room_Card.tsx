import React, { useState } from "react";
import RoomCarousel from "../ImageGallery/RoomCarousel";
import ReserveRoomModal from "../Modal/ReserveRoomModal"

const Room_Card = () => {
  const [isReserveRoomModal, setIsReserveRoomModal] = useState(false);

  const toggleReserveRoomModal = () => {
    setIsReserveRoomModal(!isReserveRoomModal);
  }
  return (
    // {/* <!-- card --> */}
    <>
      <div className="bg-white border card rounded-xl overflow-hidden flex flex-col gap-2">
        <div className="h-52 bg-shade w-full"></div>
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
                onClick={() => toggleReserveRoomModal()}
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
        <ReserveRoomModal toggleReserveRoomModal={toggleReserveRoomModal}/>
      )}
    </>
  );
};

export default Room_Card;
