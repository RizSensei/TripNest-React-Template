import React, { useMemo, useState } from "react";
import Layout from "../../component/Layout/Layout";
import Property_Card from "../../component/Property_Card/Property_Card";
import FilterSearch from "../../component/FilterSearch/FilterSearch";
import { properties } from "../../../public/mock/properties";

const All_Properties = () => {
  const [selectedVibes, setSelectedVibes] = useState<string[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [minimumRating, setMinimumRating] = useState(0);
  const [maximumPrice, setMaximumPrice] = useState(250);
  const [sortBy, setSortBy] = useState("recommended");

  const vibeOptions = Array.from(new Set(properties.map((property) => property.vibeCategory)));
  const regionOptions = Array.from(new Set(properties.map((property) => property.location.region.split(",")[0].trim())));

  const toggleSelection = (value: string, selected: string[], setSelected: React.Dispatch<React.SetStateAction<string[]>>) => {
    setSelected(selected.includes(value) ? selected.filter((item) => item !== value) : [...selected, value]);
  };

  const filteredProperties = useMemo(() => {
    const matchingProperties = properties.filter((property) => {
      const matchesVibe = selectedVibes.length === 0 || selectedVibes.includes(property.vibeCategory);
      const matchesRegion = selectedRegions.length === 0 || selectedRegions.includes(property.location.region.split(",")[0].trim());
      const matchesRating = property.rating >= minimumRating;
      const matchesPrice = property.pricePerNight <= maximumPrice;

      return matchesVibe && matchesRegion && matchesRating && matchesPrice;
    });

    return [...matchingProperties].sort((firstProperty, secondProperty) => {
      if (sortBy === "price-low") return firstProperty.pricePerNight - secondProperty.pricePerNight;
      if (sortBy === "price-high") return secondProperty.pricePerNight - firstProperty.pricePerNight;
      if (sortBy === "rating") return secondProperty.rating - firstProperty.rating;
      return secondProperty.reviewCount - firstProperty.reviewCount;
    });
  }, [maximumPrice, minimumRating, selectedRegions, selectedVibes, sortBy]);

  return (
    <Layout>
      {/* <div className=" my-2 rounded-md bg-white shadow-md shadow-gray-300">
        <FilterSearch/>
      </div> */}
      

      <div className="mt-0  flex gap-5">
        <div className="w-1/4 px-5 hidden lg:inline-block">
          {/* <a href="#" className="card w-full shadow-md">
            <figure>
              <img
                src="https://cdn.ttgtmedia.com/rms/onlineimages/screenshot_1_google_maps_on_desktop_f_mobile.jpg"
                alt="Map"
              />
            </figure>

            <h2 className="py-3 text-center font-semibold text-emerald">
              View Map
            </h2>
          </a> */}
          <div className="mt-5 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold">Filter By:</h1>
              <button
                type="button"
                onClick={() => {
                  setSelectedVibes([]);
                  setSelectedRegions([]);
                  setMinimumRating(0);
                  setMaximumPrice(250);
                }}
                className="text-xs font-medium text-orange-600"
              >
                Clear all
              </button>
            </div>

            {/* <!-- Property Filter --> */}
            <div className="text-sm">
              <h1 className="font-semibold text-sm">Morning mood</h1>
              <div className="flex flex-col mt-2 gap-1">
                {vibeOptions.map((vibe) => (
                  <label key={vibe} className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={selectedVibes.includes(vibe)}
                      onChange={() => toggleSelection(vibe, selectedVibes, setSelectedVibes)}
                      className="checkbox checkbox-sm emerald-checkbox"
                    />
                    {vibe}
                  </label>
                ))}
              </div>
            </div>

            {/* <!-- Amneties Filter --> */}
            <div className="text-sm">
              <h1 className="font-semibold text-sm">View regions</h1>
              <div className="flex flex-col mt-2 gap-1">
                {regionOptions.map((region) => (
                  <label key={region} className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={selectedRegions.includes(region)}
                      onChange={() => toggleSelection(region, selectedRegions, setSelectedRegions)}
                      className="checkbox checkbox-sm emerald-checkbox"
                    />
                    {region}
                  </label>
                ))}
              </div>
            </div>

            {/* <!-- Rating FIlter --> */}
            <div className="text-sm">
              <h1 className="font-semibold text-sm">Rating</h1>
              <div className="flex flex-wrap mt-2 gap-1 font-semibold">
                {[4, 4.5, 4.8].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => setMinimumRating(rating)}
                    className={`rounded-lg border-2 px-2 py-1 ${minimumRating === rating ? "border-orange-500 bg-orange-50" : ""}`}
                  >
                    {rating}+ <i className="fa-regular fa-star text-emerald"></i>
                  </button>
                ))}
              </div>
            </div>

            {/* <!-- Cities Filter --> */}
            <div className="text-sm">
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
                      type="number"
                      value={maximumPrice}
                      onChange={(event) => setMaximumPrice(Number(event.target.value) || 0)}
                      min="0"
                      placeholder="Max"
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
                  value={maximumPrice}
                  onChange={(event) => setMaximumPrice(Number(event.target.value))}
                  className="range range-xs"
                  step="25"
                />
              </div>
            </div>

            <div className="rounded-xl bg-orange-50 p-3 text-xs text-orange-800">
              Showing stays up to <span className="font-semibold">${maximumPrice}</span> per night.
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
            {/* <div className="flex items-center gap-2">
              <Link to="/"
                className="text-sm md:text-base h-max px-3 py-2 rounded-lg text-white bg-emerald transform duration-300 ease-in-out"
              >
                <i className="fa-solid fa-less-than"></i>
              </Link>
              <h1 className="text-sm font-semibold text-gray-600">
                300+ Properties
              </h1>
            </div> */}
            <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} className="select select-bordered w-full max-w-xs focus:outline-none">
              <option value="recommended" className="py-2">Recommended views</option>
              <option value="rating" className="py-2">Highest rated</option>
              <option value="price-low" className="py-2">Price: Low To High</option>
              <option value="price-high" className="py-2">Price: High To Low</option>
            </select>
          </div>
          <div className="mt-5 grid grid-cols-1 2xl:grid-cols-2 gap-5">
            {filteredProperties.map((distinct_property) => (
              <Property_Card key={distinct_property.id} property={distinct_property} />
            ))}
            {filteredProperties.length === 0 && (
              <p className="col-span-full rounded-xl border border-orange-100 bg-orange-50 p-6 text-center text-sm text-stone-600">
                No views match those filters. Try widening your morning search.
              </p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default All_Properties;
