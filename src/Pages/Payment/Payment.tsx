import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useCreatePaymentIntent, usePaymentStatus } from "../../api/queries";
import Layout from "../../component/Layout/Layout";

const Payment = () => {
  const location = useLocation();
  const { bookingId: routeBookingId } = useParams();
  const bookingId = routeBookingId || location.state?.bookingId;
  const paymentStatus = usePaymentStatus(bookingId);
  const createPaymentIntent = useCreatePaymentIntent();
  const [requestError, setRequestError] = useState("");
  const paymentError = requestError || createPaymentIntent.error?.message;

  const startPayment = async () => {
    setRequestError("");
    try {
      await createPaymentIntent.mutateAsync(bookingId);
    } catch (error) {
      setRequestError(
        error instanceof Error ? error.message : "Unable to start payment.",
      );
    }
  };

  return (
    <Layout>
      <div className="mx-auto max-w-3xl py-8 md:py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald">
          Payment
        </p>
        <h1 className="mt-2 text-3xl font-bold text-stone-900">
          Payment status
        </h1>
        {!bookingId ? (
          <div className="mt-6 rounded-2xl border border-orange-100 bg-white p-6">
            <p className="text-stone-700">
              Select a booking from your trip history to view its payment
              status.
            </p>
            <Link
              to="/trip-history"
              className="mt-4 inline-block text-emerald underline"
            >
              Go to trip history
            </Link>
          </div>
        ) : (
          <section className="mt-6 rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
            <p className="text-sm text-stone-600">Booking ID</p>
            <p className="break-all font-semibold text-stone-900">
              {bookingId}
            </p>
            {paymentStatus.isPending && (
              <p className="mt-4 text-sm text-stone-600">
                Loading payment status…
              </p>
            )}
            {paymentStatus.error && (
              <p role="alert" className="mt-4 text-sm text-red-700">
                {paymentStatus.error.message}
              </p>
            )}
            {paymentStatus.data && (
              <p className="mt-4">
                Payment status: <strong>{paymentStatus.data.status}</strong>
              </p>
            )}
            <p className="mt-4 rounded-xl bg-amber-50 p-4 text-sm text-amber-900">
              Online payments are not available yet. No card details should be
              entered or sent from this page.
            </p>
            <button
              type="button"
              onClick={startPayment}
              disabled={createPaymentIntent.isPending}
              className="mt-5 rounded-xl bg-emerald px-4 py-3 font-semibold text-white disabled:opacity-60"
            >
              {createPaymentIntent.isPending
                ? "Checking payment setup…"
                : "Check payment setup"}
            </button>
            {paymentError && (
              <p role="alert" className="mt-3 text-sm text-red-700">
                {paymentError}
              </p>
            )}
          </section>
        )}
        <Link
          to="/trip-history"
          className="mt-5 inline-block text-sm text-gray-600 underline"
        >
          Back to trip history
        </Link>
      </div>
    </Layout>
  );
};

export default Payment;
