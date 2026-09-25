import React from "react";
import Layout from "../../component/Layout/Layout";
import { properties } from "../../../public/mock/properties";

const wishlistItems = properties.slice(0, 3);

const Wishlist = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-6xl py-8 md:py-12">
        <div className="mb-8 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">Saved horizons</p>
            <h1 className="mt-2 text-3xl font-bold text-stone-900">Your morning shortlist</h1>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
            <i className="fa-solid fa-heart"></i>
            <span>3 saved places</span>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {wishlistItems.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm shadow-orange-100">
              <div className="h-52 bg-shade">
                <img
                  src={item.timesOfDay.sunrise.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-stone-900">{item.title}</h2>
                  <button className="text-orange-500">
                    <i className="fa-solid fa-heart"></i>
                  </button>
                </div>

                <p className="mt-2 text-sm text-stone-600">{item.propertyName} · {item.location.town}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-700">
                    {item.vibeCategory}
                  </span>
                  <span className="text-sm font-bold text-orange-700">${item.pricePerNight} / night</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Wishlist;
