import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../component/Layout/Layout";

const Payment = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-5xl py-8 md:py-12">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald">
            The final glow
          </p>
          <h1 className="mt-2 text-3xl font-bold text-stone-900">Confirm your morning escape</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div>
              <h2 className="text-xl font-semibold text-stone-900">Payment details</h2>
              <div className="mt-4 grid gap-4">
                <label className="block text-sm font-medium text-gray-700">
                  Cardholder name
                  <input
                    type="text"
                    defaultValue="Aarav Sharma"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2.5 text-gray-900 focus:border-emerald focus:outline-none"
                  />
                </label>

                <label className="block text-sm font-medium text-gray-700">
                  Card number
                  <input
                    type="text"
                    defaultValue="4242 4242 4242 4242"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2.5 text-gray-900 focus:border-emerald focus:outline-none"
                  />
                </label>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Expiry date
                    <input
                      type="text"
                      defaultValue="08/29"
                      className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2.5 text-gray-900 focus:border-emerald focus:outline-none"
                    />
                  </label>

                  <label className="block text-sm font-medium text-gray-700">
                    CVC
                    <input
                      type="text"
                      defaultValue="123"
                      className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2.5 text-gray-900 focus:border-emerald focus:outline-none"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-dashed border-emerald/40 bg-emerald/5 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">Secure payment</p>
                  <p className="text-xs text-gray-500">Encrypted and protected</p>
                </div>
                <i className="fa-solid fa-lock text-emerald"></i>
              </div>
            </div>
          </div>

          <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-stone-900">Your view summary</h2>

            <div className="mt-5 space-y-4 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Property</span>
                <span className="font-medium text-stone-900">Namche Ridge Lodge</span>
              </div>
              <div className="flex justify-between">
                <span>Dates</span>
                <span className="font-medium text-gray-900">12 - 15 Aug</span>
              </div>
              <div className="flex justify-between">
                <span>Room type</span>
                <span className="font-medium text-gray-900">Deluxe King</span>
              </div>
              <div className="flex justify-between">
                <span>Guests</span>
                <span className="font-medium text-gray-900">2 Adults</span>
              </div>
            </div>

            <div className="mt-6 space-y-3 border-t border-gray-200 pt-5 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Room total</span>
                <span className="font-medium text-gray-900">NPR 12,500</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes & fees</span>
                <span className="font-medium text-gray-900">NPR 2,215</span>
              </div>
              <div className="flex justify-between">
                <span>Service fee</span>
                <span className="font-medium text-gray-900">NPR 1,050</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-3 text-base font-bold text-gray-900">
                <span>Amount to pay</span>
                <span>NPR 15,765</span>
              </div>
            </div>

            <Link
              to="/booking-confirmed"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-emerald px-4 py-3 text-base font-semibold text-white transition hover:bg-emerald/90"
            >
              Pay now
            </Link>

            <Link
              to="/checkout"
              className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-gray-300 px-4 py-3 text-base font-medium text-gray-700 transition hover:border-emerald hover:text-emerald"
            >
              Back to checkout
            </Link>
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
