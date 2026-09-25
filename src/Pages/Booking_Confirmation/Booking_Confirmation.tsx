import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../component/Layout/Layout";

const Booking_Confirmation = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-4xl py-8 md:py-12">
        <div className="rounded-3xl border border-emerald/20 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald/10 text-3xl text-emerald">
            <i className="fa-solid fa-circle-check"></i>
          </div>

          <h1 className="mt-6 text-3xl font-bold text-stone-900">Your sunrise is reserved</h1>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            The view is waiting. Your mock reservation is confirmed and your morning itinerary is on the way.
          </p>

          <div className="mt-8 grid gap-4 text-left md:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Booking ID</p>
              <p className="mt-2 text-lg font-semibold text-gray-900">TN-48592</p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Check-in</p>
              <p className="mt-2 text-lg font-semibold text-gray-900">12 Aug 2026</p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Total paid</p>
              <p className="mt-2 text-lg font-semibold text-gray-900">NPR 15,765</p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5 text-left">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-stone-900">Namche Ridge Lodge</h2>
                <p className="text-sm text-stone-600">Namche Bazaar · Ama Dablam & Mt. Everest</p>
              </div>
              <span className="rounded-full bg-emerald/10 px-3 py-1 text-xs font-semibold text-emerald">
                Deluxe King Room
              </span>
            </div>

            <div className="mt-5 grid gap-4 text-sm text-gray-700 md:grid-cols-2">
              <div className="flex justify-between">
                <span>Guests</span>
                <span className="font-medium text-gray-900">2 Adults</span>
              </div>
              <div className="flex justify-between">
                <span>Nights</span>
                <span className="font-medium text-gray-900">3</span>
              </div>
              <div className="flex justify-between">
                <span>Cancellation</span>
                <span className="font-medium text-gray-900">Free until 48h before</span>
              </div>
              <div className="flex justify-between">
                <span>Contact</span>
                <span className="font-medium text-gray-900">+977-1-4221711</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/trip-history"
              className="inline-flex items-center justify-center rounded-xl bg-emerald px-5 py-3 text-base font-semibold text-white transition hover:bg-emerald/90"
            >
              View trip history
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-5 py-3 text-base font-semibold text-gray-700 transition hover:border-emerald hover:text-emerald"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Booking_Confirmation;
