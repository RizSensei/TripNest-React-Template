import React from "react";
import { Link, useLocation } from "react-router-dom";
import Layout from "../../component/Layout/Layout";

const Checkout = () => {
  const location = useLocation();
  const booking = location.state as
    | {
        checkIn?: string;
        checkOut?: string;
        guestCount?: string;
        roomCount?: string;
        selectedRoom?: string;
      }
    | undefined;
  const roomLabels: Record<string, string> = {
    "panorama-suite": "Panorama suite",
    "view-twin-room": "View twin room",
    "family-lodge-room": "Family lodge room",
  };
  const formatDate = (date: string) =>
    new Date(`${date}T00:00:00`).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  const checkIn = booking?.checkIn ? formatDate(booking.checkIn) : "12 Aug 2026";
  const checkOut = booking?.checkOut ? formatDate(booking.checkOut) : "15 Aug 2026";
  const guests = booking?.guestCount || "2";
  const rooms = booking?.roomCount || "1";
  const roomName = booking?.selectedRoom
    ? roomLabels[booking.selectedRoom] || booking.selectedRoom
    : "Deluxe King Room";

  return (
    <Layout>
      <div className="mx-auto max-w-7xl py-8 md:py-12">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald">
            Reserve the view
          </p>
          <h1 className="mt-2 text-3xl font-bold text-stone-900">Wake up somewhere unforgettable</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-6">
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-stone-900">Who is catching the first light?</h2>
                <span className="rounded-full bg-emerald/10 px-3 py-1 text-xs font-semibold text-emerald">
                  {rooms} {rooms === "1" ? "room" : "rooms"} · {guests} {guests === "1" ? "guest" : "guests"}
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="block text-sm font-medium text-gray-700">
                  First name
                  <input
                    type="text"
                    defaultValue="Aarav"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2.5 text-gray-900 focus:border-emerald focus:outline-none"
                  />
                </label>

                <label className="block text-sm font-medium text-gray-700">
                  Last name
                  <input
                    type="text"
                    defaultValue="Sharma"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2.5 text-gray-900 focus:border-emerald focus:outline-none"
                  />
                </label>

                <label className="block text-sm font-medium text-gray-700 md:col-span-2">
                  Email address
                  <input
                    type="email"
                    defaultValue="aarav@example.com"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2.5 text-gray-900 focus:border-emerald focus:outline-none"
                  />
                </label>

                <label className="block text-sm font-medium text-gray-700 md:col-span-2">
                  Phone number
                  <input
                    type="tel"
                    defaultValue="+977 9841 234567"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2.5 text-gray-900 focus:border-emerald focus:outline-none"
                  />
                </label>
              </div>
            </section>

            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="mb-5 text-xl font-semibold text-stone-900">How would you like to reserve?</h2>

              <div className="space-y-3">
                {[
                  "Credit / Debit Card",
                  "Esewa / Mobile wallet",
                  "Bank transfer",
                  "Cash on arrival",
                ].map((method, index) => (
                  <label
                    key={method}
                    className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 ${
                      index === 0 ? "border-emerald bg-emerald/5" : "border-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment-method"
                        defaultChecked={index === 0}
                        className="h-4 w-4 accent-emerald"
                      />
                      <span className="font-medium text-gray-800">{method}</span>
                    </div>
                    <i className="fa-solid fa-shield-halved text-sm text-emerald"></i>
                  </label>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="mb-5 text-xl font-semibold text-stone-900">Make the room yours</h2>
              <textarea
                rows={4}
                placeholder="Tell us about your preferences, such as room type, early check-in, or accessibility needs."
                className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-gray-900 focus:border-emerald focus:outline-none"
              />
            </section>
          </div>

          <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-20 w-20 overflow-hidden rounded-xl bg-shade">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80"
                  alt="Hotel"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-stone-900">Namche Ridge Lodge</h3>
                <p className="text-sm text-stone-600">Namche Bazaar · East-Facing Dawn</p>
                <div className="mt-1 flex items-center gap-1 text-amber-500">
                  <i className="fa-solid fa-star text-xs"></i>
                  <i className="fa-solid fa-star text-xs"></i>
                  <i className="fa-solid fa-star text-xs"></i>
                  <i className="fa-solid fa-star text-xs"></i>
                  <span className="ml-1 text-xs font-medium text-gray-700">4.8</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Check-in</span>
                <span className="font-semibold text-gray-900">{checkIn}</span>
              </div>
              <div className="mt-2 flex justify-between text-sm text-gray-600">
                <span>Check-out</span>
                <span className="font-semibold text-gray-900">{checkOut}</span>
              </div>
              <div className="mt-2 flex justify-between text-sm text-gray-600">
                <span>Guests</span>
                <span className="font-semibold text-gray-900">{guests} guests</span>
              </div>
            </div>

            <div className="mt-6 space-y-4 border-t border-gray-200 pt-5">
              <div className="flex justify-between text-sm text-gray-600">
                <span>{roomName} · {rooms} {rooms === "1" ? "room" : "rooms"}</span>
                <span className="font-medium text-gray-900">NPR 12,500</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Taxes & fees</span>
                <span className="font-medium text-gray-900">NPR 2,215</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Service fee</span>
                <span className="font-medium text-gray-900">NPR 1,050</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-4 text-base font-bold text-gray-900">
                <span>Total</span>
                <span>NPR 15,765</span>
              </div>
            </div>

            <Link
              to="/payment"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-emerald px-4 py-3 text-base font-semibold text-white transition hover:bg-emerald/90"
            >
              Continue to payment
            </Link>

            <Link
              to="/property-description"
              className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-gray-300 px-4 py-3 text-base font-medium text-gray-700 transition hover:border-emerald hover:text-emerald"
            >
              Back to room selection
            </Link>
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
