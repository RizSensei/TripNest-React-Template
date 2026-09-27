import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCreateBooking, useProfile } from "../../api/queries";
import Layout from "../../component/Layout/Layout";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state;
  const profileQuery = useProfile();
  const createBooking = useCreateBooking();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guestNotes, setGuestNotes] = useState("");
  const [preferences, setPreferences] = useState("");

  useEffect(() => {
    if (!booking?.quote?.quoteId) {
      navigate("/properties", { replace: true });
    }
  }, [booking, navigate]);

  useEffect(() => {
    const profile = profileQuery.data;
    if (!profile) return;
    const [givenName = "", ...familyName] = (profile.name || "").split(" ");
    setFirstName((current) => current || givenName);
    setLastName((current) => current || familyName.join(" "));
    setEmail((current) => current || profile.email || "");
    setPhone((current) => current || profile.phone || "");
  }, [profileQuery.data]);

  if (!booking?.quote?.quoteId) return null;

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const result = await createBooking.mutateAsync({
        quoteId: booking.quote.quoteId,
        firstName,
        lastName,
        email,
        phone,
        paymentMethod: "card",
        guestNotes,
        preferences,
      });
      navigate(`/booking-confirmed/${encodeURIComponent(result.bookingId)}`, {
        state: {
          bookingId: result.bookingId,
          booking: result,
          property: booking.property,
        },
        replace: true,
      });
    } catch {
      // The mutation error is displayed in the form.
    }
  };

  const quote = booking.quote;
  const currency = quote.currency || booking.property?.currency || "";
  const money = (amount: number) => `${currency} ${Number(amount).toFixed(2)}`;

  return (
    <Layout>
      <div className="mx-auto max-w-7xl py-8 md:py-12">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald">
            Reserve the view
          </p>
          <h1 className="mt-2 text-3xl font-bold text-stone-900">
            Confirm your stay
          </h1>
        </div>
        <form
          onSubmit={submit}
          className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]"
        >
          <div className="space-y-6">
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-semibold text-stone-900">
                Guest details
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm font-medium text-gray-700">
                  First name
                  <input
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    required
                    autoComplete="given-name"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2.5"
                  />
                </label>
                <label className="text-sm font-medium text-gray-700">
                  Last name
                  <input
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    required
                    autoComplete="family-name"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2.5"
                  />
                </label>
                <label className="text-sm font-medium text-gray-700 md:col-span-2">
                  Email address
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    autoComplete="email"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2.5"
                  />
                </label>
                <label className="text-sm font-medium text-gray-700 md:col-span-2">
                  Phone number
                  <input
                    type="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    required
                    autoComplete="tel"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2.5"
                  />
                </label>
              </div>
            </section>
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-2 text-xl font-semibold text-stone-900">
                Payment method
              </h2>
              <p className="rounded-xl border border-emerald bg-emerald/5 p-4 text-sm text-stone-700">
                Card payment will be requested after your booking is created.
                Payment processing is not yet available.
              </p>
            </section>
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-semibold text-stone-900">
                Make the room yours
              </h2>
              <label className="block text-sm font-medium text-gray-700">
                Arrival notes
                <textarea
                  value={guestNotes}
                  onChange={(event) => setGuestNotes(event.target.value)}
                  rows={3}
                  placeholder="For example, your expected arrival time."
                  className="mt-2 w-full rounded-xl border border-gray-300 px-3 py-2.5"
                />
              </label>
              <label className="mt-4 block text-sm font-medium text-gray-700">
                Preferences
                <textarea
                  value={preferences}
                  onChange={(event) => setPreferences(event.target.value)}
                  rows={3}
                  placeholder="Any preferences for your stay?"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-3 py-2.5"
                />
              </label>
            </section>
          </div>

          <aside className="h-max rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-20 w-20 overflow-hidden rounded-xl bg-shade">
                {booking.property?.image && (
                  <img
                    src={booking.property.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-stone-900">
                  {booking.property?.propertyName || booking.property?.title}
                </h2>
                <p className="text-sm text-stone-600">
                  {booking.property?.location?.town} ·{" "}
                  {booking.property?.location?.region}
                </p>
                <p className="mt-1 text-sm text-amber-600">
                  ★ {booking.property?.rating || 0}
                </p>
              </div>
            </div>
            <dl className="space-y-2 rounded-xl bg-gray-50 p-4 text-sm">
              <div className="flex justify-between gap-2">
                <dt>Check-in</dt>
                <dd className="font-semibold">{booking.checkIn}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt>Check-out</dt>
                <dd className="font-semibold">{booking.checkOut}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt>Room</dt>
                <dd className="font-semibold">
                  {booking.roomName} · {booking.rooms}
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt>Guests</dt>
                <dd className="font-semibold">
                  {booking.adults} adults, {booking.children} children
                </dd>
              </div>
            </dl>
            <div className="mt-6 space-y-3 border-t border-gray-200 pt-5 text-sm">
              <div className="flex justify-between">
                <span>Room subtotal</span>
                <span>{money(quote.roomSubtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Add-ons</span>
                <span>{money(quote.addOnSubtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes</span>
                <span>{money(quote.taxes)}</span>
              </div>
              <div className="flex justify-between">
                <span>Fees</span>
                <span>{money(quote.fees)}</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-3 text-base font-bold">
                <span>Total · {quote.nights} nights</span>
                <span>{money(quote.total)}</span>
              </div>
            </div>
            {createBooking.error && (
              <p role="alert" className="mt-4 text-sm text-red-600">
                {createBooking.error.message}
              </p>
            )}
            <button
              type="submit"
              disabled={createBooking.isPending || !quote.available}
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-emerald px-4 py-3 font-semibold text-white hover:bg-emerald/90 disabled:opacity-60"
            >
              {createBooking.isPending
                ? "Creating booking…"
                : "Confirm booking"}
            </button>
            {!quote.available && (
              <p className="mt-2 text-sm text-red-600">
                These dates are no longer available.
              </p>
            )}
            <Link
              to="/properties"
              className="mt-3 inline-flex w-full justify-center text-sm text-stone-600 underline"
            >
              Back to stays
            </Link>
          </aside>
        </form>
      </div>
    </Layout>
  );
};

export default Checkout;
