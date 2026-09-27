import { useState } from "react";
import { Link } from "react-router-dom";
import { useBookings, useCancelBooking } from "../../api/queries";
import Layout from "../../component/Layout/Layout";
import type { BookingSummary } from "../../api/types";

const tabs = [
  { label: "All", value: undefined },
  { label: "Upcoming", value: "upcoming" },
  { label: "Completed", value: "completed" },
  { label: "Cancelled", value: "cancelled" },
];

const Trip_History = () => {
  const [status, setStatus] = useState<string | undefined>();
  const bookings = useBookings(status);
  const cancelBooking = useCancelBooking();
  const trips = bookings.data?.items || [];

  const cancel = async (bookingId: string) => {
    try {
      await cancelBooking.mutateAsync(bookingId);
    } catch {
      // The mutation error is displayed above the list.
    }
  };

  return (
    <Layout>
      <div className="mx-auto max-w-6xl py-8 md:py-12">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">
            Your collected light
          </p>
          <h1 className="mt-2 text-3xl font-bold text-stone-900">
            Trip history & upcoming views
          </h1>
        </div>
        <div className="mb-6 flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              type="button"
              onClick={() => setStatus(tab.value)}
              aria-pressed={status === tab.value}
              className={`rounded-xl px-4 py-2 text-sm font-medium ${status === tab.value ? "bg-orange-500 text-white shadow-sm shadow-orange-200" : "border border-orange-300 text-orange-700"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {cancelBooking.error && (
          <p
            role="alert"
            className="mb-4 rounded-xl bg-red-50 p-4 text-sm text-red-700"
          >
            {cancelBooking.error.message}
          </p>
        )}
        {bookings.isPending && (
          <p className="py-6 text-sm text-stone-600">Loading your bookings…</p>
        )}
        {bookings.error && (
          <p
            role="alert"
            className="rounded-xl bg-red-50 p-4 text-sm text-red-700"
          >
            {bookings.error.message}
          </p>
        )}
        {!bookings.isPending && !bookings.error && trips.length === 0 && (
          <p className="rounded-xl border border-orange-100 bg-orange-50 p-6 text-stone-700">
            No bookings found for this filter.
          </p>
        )}
        <div className="space-y-5">
          {(trips as BookingSummary[]).map((trip) => {
            const property = trip.property || {};
            const cancelled = trip.status?.toUpperCase() === "CANCELLED";
            return (
              <article
                key={trip.bookingId}
                className="flex flex-col gap-4 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm shadow-orange-100 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-shade">
                    {(property.image || property.images?.[0]?.url) && (
                      <img
                        src={property.image || property.images?.[0]?.url}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-stone-900">
                      {property.propertyName || property.title || "Stay"}
                    </h2>
                    <p className="text-sm text-stone-600">
                      {property.location?.town}, {property.location?.region}
                    </p>
                    <p className="mt-1 text-sm text-stone-500">
                      {trip.checkInFormatted} –{" "}
                      {trip.checkOutFormatted}
                    </p>
                    {property.slug && (
                      <Link
                        to={`/property-description/${property.slug}`}
                        className="text-xs text-orange-700 underline"
                      >
                        View property
                      </Link>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${cancelled ? "bg-stone-100 text-stone-700" : "bg-orange-100 text-orange-700"}`}
                  >
                    {trip.status?.replaceAll("_", " ")}
                  </span>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                      Total
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      {trip.currency} {Number(trip.total).toFixed(2)}
                    </p>
                  </div>
                  {trip.paymentStatus?.toUpperCase() === "PENDING" && (
                    <Link
                      to={`/payment/${encodeURIComponent(trip.bookingId)}`}
                      className="rounded-lg border border-orange-300 px-3 py-2 text-sm text-orange-700"
                    >
                      Payment status
                    </Link>
                  )}
                  {!cancelled && trip.status?.toUpperCase() !== "COMPLETED" && (
                    <button
                      type="button"
                      disabled={cancelBooking.isPending}
                      onClick={() => cancel(trip.bookingId)}
                      className="rounded-lg border border-red-200 px-3 py-2 text-sm text-red-700 disabled:opacity-50"
                    >
                      Cancel booking
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Trip_History;
