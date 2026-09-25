import React, { useState } from "react";
import { Link } from "react-router-dom";
import MapModal from "../Modal/MapModal";

const Property_Card = ({ property }) => {
  const [isMapOpen, setIsMapOpen] = useState(false);

  const toggleMapModal = () => {
    setIsMapOpen(!isMapOpen);
  };

  const image = property?.timesOfDay?.sunrise?.imageUrl || "https://images.unsplash.com/photo-1501785888041-af3ef285b470";

  return (
    <>
      <div className="flex flex-col gap-2 rounded-xl border p-2 sm:flex-row">
        <Link
          to={`/property-description/${property?.slug || property?.id}`}
          className="relative h-52 aspect-square overflow-hidden rounded-xl bg-shade"
          state={{ property }}
        >
          <img src={image} alt={property?.propertyName} className="h-full w-full object-cover" />
          <div className="absolute right-2 top-2 rounded-full bg-white p-2">
            <button className="flex h-4 w-4 items-center justify-center text-red-500">
              <i className="fa-regular fa-heart"></i>
            </button>
          </div>
        </Link>

        <div className="flex flex-col gap-2 px-2 font-medium">
          <div>
            <h1 className="text-xl font-semibold text-stone-800">{property?.propertyName}</h1>
            <h1 className="text-xs text-orange-600 underline">
              {property?.location?.town}, {property?.location?.country}
            </h1>
          </div>

          <p className="text-xs text-stone-600">{property?.timesOfDay?.sunrise?.description}</p>

          <div className="mt-2 flex w-full justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                disabled
                className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500 text-sm font-semibold text-white"
              >
                {property?.rating?.toFixed(2) || "4.9"}
              </button>
              <div className="font-semibold">
                <h1 className="text-sm text-stone-800">Excellent</h1>
                <p className="text-xs text-stone-500">{property?.reviewCount || 0} Reviews</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                disabled
                className="rounded-lg border border-orange-300 px-4 py-3 text-sm font-semibold text-orange-700"
              >
                ${property?.pricePerNight || 0}
              </button>
              <button
                onClick={() => toggleMapModal()}
                className="flex h-12 w-12 items-center justify-center rounded-lg border border-orange-300 text-lg font-semibold text-orange-700"
              >
                <i className="fa-solid fa-earth-americas"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMapOpen && <MapModal toggleMapModal={toggleMapModal} />}
    </>
  );
};

export default Property_Card;
