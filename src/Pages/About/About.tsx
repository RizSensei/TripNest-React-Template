import React from "react";
import Layout from "../../component/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-6xl py-8 md:py-12">
        <div className="mb-8 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">The story behind the window</p>
            <h1 className="mt-2 text-3xl font-bold text-stone-900">TripNest starts at 6:00 AM</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm shadow-orange-100">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-xl text-orange-600">
              <i className="fa-solid fa-map-location-dot"></i>
            </div>
            <h2 className="text-xl font-semibold text-stone-900">The room is the viewpoint</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              We curate rooms around the view from the bed, balcony, or window, not just a list of facilities.
            </p>
          </div>

          <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm shadow-orange-100">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-xl text-orange-600">
              <i className="fa-solid fa-shield-heart"></i>
            </div>
            <h2 className="text-xl font-semibold text-stone-900">Local stories, honestly told</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Meet the Sherpa hosts, botanists, and heritage keepers who make each morning feel rooted in its region.
            </p>
          </div>

          <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm shadow-orange-100">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-xl text-orange-600">
              <i className="fa-solid fa-route"></i>
            </div>
            <h2 className="text-xl font-semibold text-stone-900">A softer way to book</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Preview sunrise, compare room highlights, and reserve the view that makes you want to set an early alarm.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-orange-100/70 p-8 text-center">
          <h2 className="text-2xl font-bold text-stone-900">Our mission</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-700">
            We want to make Nepal&apos;s first light easier to find, feel, and remember by putting the morning view at the center of the stay.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
