import React from "react";
import Layout from "../../component/Layout/Layout";
import { properties } from "../../../public/mock/properties";

const tripHistory = [
  {
    name: properties[0].propertyName,
    location: `${properties[0].location.town}, ${properties[0].location.region}`,
    status: "Confirmed",
    date: "12 Aug 2026 · 3 nights",
    price: "NPR 15,765",
  },
  {
    name: properties[2].propertyName,
    location: `${properties[2].location.town}, ${properties[2].location.region}`,
    status: "Completed",
    date: "18 May 2026 · 2 nights",
    price: "NPR 9,500",
  },
  {
    name: properties[1].propertyName,
    location: `${properties[1].location.town}, ${properties[1].location.region}`,
    status: "Completed",
    date: "03 Mar 2026 · 4 nights",
    price: "NPR 18,200",
  },
];

const Trip_History = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-6xl py-8 md:py-12">
        <div className="mb-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">Your collected light</p>
            <h1 className="mt-2 text-3xl font-bold text-stone-900">Trip history & upcoming views</h1>
        </div>

        <div className="mb-6 flex flex-wrap gap-3">
          {[
            "All",
            "Upcoming",
            "Completed",
            "Canceled",
          ].map((tab, index) => (
            <button
              key={tab}
              className={`rounded-xl px-4 py-2 text-sm font-medium ${
                index === 0
                  ? "bg-orange-500 text-white shadow-sm shadow-orange-200"
                  : "border border-orange-300 text-orange-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="space-y-5">
          {tripHistory.map((trip) => (
            <div
              key={trip.name}
              className="flex flex-col gap-4 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm shadow-orange-100 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 overflow-hidden rounded-xl bg-shade">
                  <img
                    src={properties.find((property) => property.propertyName === trip.name)?.timesOfDay.sunrise.imageUrl}
                    alt={trip.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-stone-900">{trip.name}</h2>
                  <p className="text-sm text-stone-600">{trip.location}</p>
                  <p className="mt-1 text-sm text-stone-500">{trip.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    trip.status === "Confirmed"
                      ? "bg-orange-100 text-orange-700"
                      : "bg-stone-100 text-stone-700"
                  }`}
                >
                  {trip.status}
                </span>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Total</p>
                  <p className="text-lg font-bold text-gray-900">{trip.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Trip_History;
