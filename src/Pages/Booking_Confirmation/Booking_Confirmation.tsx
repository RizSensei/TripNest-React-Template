import { Link, useLocation, useParams } from "react-router-dom";
import { useBooking } from "../../api/queries";
import Layout from "../../component/Layout/Layout";

const Booking_Confirmation = () => {
  const location = useLocation();
  const { bookingId: routeBookingId } = useParams();
  const bookingId = routeBookingId || location.state?.bookingId;
  const bookingQuery = useBooking(bookingId);
  const booking = bookingQuery.data;

  return (
    <Layout>
      <div className="mx-auto max-w-4xl py-8 md:py-12">
        <div className="rounded-3xl border border-emerald/20 bg-white p-8 text-center shadow-sm">
          {!bookingId ? (
            <>
              <h1 className="text-3xl font-bold text-stone-900">
                Booking details unavailable
              </h1>
              <p className="mt-3 text-gray-600">
                Open this page from a booking confirmation or view your trip
                history.
              </p>
            </>
          ) : bookingQuery.isPending ? (
            <p className="py-10 text-stone-600">Loading your booking…</p>
          ) : bookingQuery.error || !booking ? (
            <p role="alert" className="py-10 text-red-700">
              {bookingQuery.error?.message || "Booking could not be loaded."}
            </p>
          ) : (
            <>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald/10 text-3xl text-emerald">
                <i className="fa-solid fa-circle-check" />
              </div>
              <h1 className="mt-6 text-3xl font-bold text-stone-900">
                Your booking has been created
              </h1>
              <p className="mx-auto mt-3 max-w-xl text-gray-600">
                Booking status:{" "}
                <strong>{booking.status?.replaceAll("_", " ")}</strong>. Payment
                is not yet confirmed.
              </p>
              <div className="mt-8 grid gap-4 text-left md:grid-cols-3">
                <div className="rounded-2xl bg-gray-50 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Booking ID
                  </p>
                  <p className="mt-2 break-all text-sm font-semibold text-gray-900">
                    {booking.bookingId}
                  </p>
                </div>
                <div className="rounded-2xl bg-gray-50 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Check-in
                  </p>
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    {new Date(booking.dates?.checkIn).toLocaleDateString()}
                  </p>
                </div>
                <div className="rounded-2xl bg-gray-50 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Total
                  </p>
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    {booking.currency} {Number(booking.total).toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5 text-left">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-stone-900">
                      {booking.property?.propertyName ||
                        booking.property?.title}
                    </h2>
                    <p className="text-sm text-stone-600">
                      {booking.property?.location?.town} ·{" "}
                      {booking.property?.location?.region}
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald/10 px-3 py-1 text-xs font-semibold text-emerald">
                    {booking.room?.name}
                  </span>
                </div>
                <div className="mt-5 grid gap-4 text-sm text-gray-700 md:grid-cols-2">
                  <div className="flex justify-between">
                    <span>Guests</span>
                    <span className="font-medium text-gray-900">
                      {booking.guests?.adults} adults,{" "}
                      {booking.guests?.children} children
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment status</span>
                    <span className="font-medium text-gray-900">
                      {booking.paymentStatus || "PENDING"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  to={`/payment/${encodeURIComponent(bookingId)}`}
                  state={{ bookingId }}
                  className="inline-flex items-center justify-center rounded-xl bg-emerald px-5 py-3 font-semibold text-white transition hover:bg-emerald/90"
                >
                  Continue to payment
                </Link>
                <Link
                  to="/trip-history"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition hover:border-emerald hover:text-emerald"
                >
                  View trip history
                </Link>
              </div>
            </>
          )}
          <Link
            to="/"
            className="mt-5 inline-block text-sm text-gray-500 underline"
          >
            Back to home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Booking_Confirmation;
