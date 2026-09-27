import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  useCreateQuote,
  useCreateReview,
  useProperty,
  useReviews,
  useWishlist,
  useWishlistMutation,
  useBookings,
} from "../../api/queries";
import { useAuth } from "../../context/AuthContext";
import Layout from "../../component/Layout/Layout";
import type {
  AddOn,
  BookingSummary,
  PropertyReview,
  PropertySummary,
  RoomType,
} from "../../api/types";

const dateAfter = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
};

const Property_Description = () => {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { token } = useAuth();
  const propertyQuery = useProperty(slug);
  const property = propertyQuery.data as PropertySummary | undefined;
  const reviewsQuery = useReviews(property?.id, {
    page: 1,
    pageSize: 10,
    sort: "recent",
  });
  const wishlistQuery = useWishlist();
  const wishlistMutation = useWishlistMutation();
  const quoteMutation = useCreateQuote();
  const reviewMutation = useCreateReview();
  const bookingsQuery = useBookings();
  const [checkIn, setCheckIn] = useState(dateAfter(1));
  const [checkOut, setCheckOut] = useState(dateAfter(4));
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [roomTypeId, setRoomTypeId] = useState("");
  const [addOnIds, setAddOnIds] = useState<string[]>([]);
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewBody, setReviewBody] = useState("");
  const [bookingId, setBookingId] = useState("");
  const [activeView, setActiveView] = useState("sunrise");
  const roomTypes: RoomType[] = property?.roomTypes || [];
  const chosenRoomId = roomTypeId || roomTypes[0]?.id || "";
  const selectedRoom = roomTypes.find((room) => room.id === chosenRoomId);
  const viewKeys = useMemo(
    () => (property?.timesOfDay ? Object.keys(property.timesOfDay) : []),
    [property],
  );
  const selectedView =
    property?.timesOfDay?.[activeView] || property?.timesOfDay?.[viewKeys[0]];
  const saved = ((wishlistQuery.data?.items || []) as PropertySummary[]).some(
    (item) => item.id === property?.id,
  );
  const reviewEligibleBookings = (
    (bookingsQuery.data?.items || []) as BookingSummary[]
  ).filter(
    (booking) =>
      booking.property?.id === property?.id &&
      booking.status !== "CANCELLED" &&
      new Date(booking.checkOut).getTime() < Date.now(),
  );

  const toggleWishlist = async () => {
    if (!property) return;
    if (!token) {
      navigate("/login", { state: { from: location } });
      return;
    }
    try {
      await wishlistMutation.mutateAsync({
        propertyId: property.id,
        saved: !saved,
      });
    } catch {
      // The mutation error is shown beside the wishlist action.
    }
  };

  const requestQuote = async () => {
    if (!property) return;
    if (!token) {
      navigate("/login", { state: { from: location } });
      return;
    }
    try {
      const quote = await quoteMutation.mutateAsync({
        propertyId: property.id,
        checkIn,
        checkOut,
        adults,
        children,
        rooms,
        ...(chosenRoomId ? { roomTypeId: chosenRoomId } : {}),
        addOnIds,
      });
      navigate("/checkout", {
        state: {
          quote,
          property,
          checkIn,
          checkOut,
          adults,
          children,
          rooms,
          roomTypeId: chosenRoomId,
          roomName: selectedRoom?.name || "Room",
        },
      });
    } catch {
      // Quote errors, including unavailable dates, are displayed below.
    }
  };

  const submitReview = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!property) return;
    try {
      await reviewMutation.mutateAsync({
        propertyId: property.id,
        rating: reviewRating,
        title: reviewTitle,
        body: reviewBody,
        bookingId,
      });
      setReviewTitle("");
      setReviewBody("");
      setBookingId("");
    } catch {
      // The mutation error is rendered in the review form.
    }
  };

  if (!slug) return <Navigate to="/properties" replace />;
  if (propertyQuery.isPending) {
    return (
      <Layout>
        <p className="py-12 text-center">Loading property…</p>
      </Layout>
    );
  }
  if (propertyQuery.error || !property) {
    return (
      <Layout>
        <div className="py-12 text-center">
          <p role="alert" className="text-red-700">
            {propertyQuery.error?.message || "Property not found."}
          </p>
          <Link
            to="/properties"
            className="mt-4 inline-block text-orange-600 underline"
          >
            Browse properties
          </Link>
        </div>
      </Layout>
    );
  }

  const roomHighlights = property.roomHighlights ?? [];
  const amenities = property.amenities ?? [];
  const photo =
    selectedView?.imageUrl || property.image || property.images?.[0]?.url;

  return (
    <Layout>
      <main className="w-full pb-20 pt-8 2xl:px-20">
        <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
              {property.vibeCategory}
            </p>
            <h1 className="mt-2 text-3xl font-bold text-stone-900 md:text-5xl">
              {property.title}
            </h1>
            <p className="mt-2 text-sm text-stone-600">
              {property.propertyName} · {property.location?.town},{" "}
              {property.location?.region}
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm text-stone-600">
            <span className="text-amber-500">
              <i className="fa-solid fa-star" />{" "}
              <strong className="text-stone-800">{property.rating}</strong>
            </span>
            <span>{property.reviewCount} reviews</span>
            <button
              type="button"
              onClick={toggleWishlist}
              disabled={wishlistMutation.isPending}
              aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${saved ? "border-orange-500 bg-orange-500 text-white" : "border-orange-200 text-orange-600 hover:bg-orange-50"}`}
            >
              <i className={`fa-${saved ? "solid" : "regular"} fa-heart`} />
            </button>
          </div>
        </div>
        {wishlistMutation.error && (
          <p role="alert" className="mb-3 text-sm text-red-600">
            {wishlistMutation.error.message}
          </p>
        )}

        <section className="relative overflow-hidden rounded-[1.75rem] bg-stone-900 shadow-2xl shadow-orange-200/60">
          <div className="relative h-[28rem] md:h-[38rem]">
            {photo && (
              <img
                src={photo}
                alt={`${property.title} ${selectedView?.timeLabel || ""}`}
                className="h-full w-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/20" />
            {viewKeys.length > 0 && (
              <div className="absolute right-4 top-4 flex rounded-full border border-white/30 bg-stone-950/35 p-1 backdrop-blur-md">
                {viewKeys.map((key: string) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveView(key)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold capitalize ${activeView === key ? "bg-orange-500 text-white" : "text-white/80 hover:bg-white/15"}`}
                  >
                    {key.replace(/([A-Z])/g, " $1")}
                  </button>
                ))}
              </div>
            )}
            {selectedView && (
              <div className="absolute bottom-5 left-5 max-w-md rounded-2xl border border-white/30 bg-stone-950/45 p-4 text-white backdrop-blur-md">
                <p className="text-lg font-semibold">
                  {selectedView.timeLabel}
                </p>
                <p className="mt-1 text-sm text-white/80">
                  {selectedView.description}
                </p>
              </div>
            )}
          </div>
        </section>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <section className="grid gap-3 sm:grid-cols-2">
              {[
                [
                  "Elevation",
                  property.elevationMeters
                    ? `${property.elevationMeters.toLocaleString()} m`
                    : "—",
                ],
                ["Visible peaks", property.peakVisible || "—"],
                ["Orientation", property.orientation || "—"],
                ["Atmosphere", property.skyClarity || "—"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-orange-100 bg-orange-50 p-4"
                >
                  <p className="text-xs uppercase tracking-widest text-orange-700">
                    {label}
                  </p>
                  <p className="mt-1 font-semibold text-stone-900">{value}</p>
                </div>
              ))}
            </section>
            {property.host && (
              <section className="rounded-2xl border border-orange-100 bg-orange-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-700">
                  Your host
                </p>
                <div className="mt-4 flex items-center gap-4">
                  {property.host.avatarUrl ? (
                    <img
                      src={property.host.avatarUrl}
                      alt={
                        property.host.name
                          ? `${property.host.name}, your host`
                          : "Your host"
                      }
                      className="h-16 w-16 rounded-full object-cover"
                    />
                  ) : (
                    <div
                      aria-hidden="true"
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-orange-200 text-xl font-semibold text-orange-800"
                    >
                      {property.host.name?.[0]?.toUpperCase() || "H"}
                    </div>
                  )}
                  <div>
                    <h2 className="text-xl font-bold text-stone-900">
                      {property.host.name || "Your host"}
                    </h2>
                    {property.host.role && (
                      <p className="mt-1 text-sm text-stone-600">
                        {property.host.role}
                      </p>
                    )}
                  </div>
                </div>
                {property.host.quote && (
                  <blockquote className="mt-4 border-l-2 border-orange-300 pl-4 text-sm leading-6 text-stone-700">
                    “{property.host.quote}”
                  </blockquote>
                )}
              </section>
            )}
            {roomHighlights.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-stone-900">
                  Room highlights
                </h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {roomHighlights.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-orange-100 px-3 py-2 text-sm text-orange-800"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {amenities.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-stone-900">Amenities</h2>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {amenities.map((item) => (
                    <li key={item} className="text-sm text-stone-700">
                      <i className="fa-solid fa-check mr-2 text-emerald" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {(property.policies?.houseRules?.length ||
              property.policies?.cancellation) && (
              <section className="rounded-2xl border border-orange-100 bg-white p-6">
                <h2 className="text-2xl font-bold text-stone-900">Policies</h2>
                {property.policies.cancellation && (
                  <div className="mt-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-orange-700">
                      Cancellation
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-stone-700">
                      {property.policies.cancellation}
                    </p>
                  </div>
                )}
                {property.policies.houseRules &&
                  property.policies.houseRules.length > 0 && (
                    <div className="mt-5">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-orange-700">
                        House rules
                      </h3>
                      <ul className="mt-2 space-y-2">
                        {property.policies.houseRules.map((rule: string) => (
                          <li
                            key={rule}
                            className="flex gap-2 text-sm leading-6 text-stone-700"
                          >
                            <i
                              className="fa-solid fa-check mt-1 text-emerald"
                              aria-hidden="true"
                            />
                            <span>{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
              </section>
            )}
            <section>
              <h2 className="text-2xl font-bold text-stone-900">
                Guest reviews
              </h2>
              {reviewsQuery.isPending && (
                <p className="mt-3 text-sm text-stone-500">Loading reviews…</p>
              )}
              {reviewsQuery.error && (
                <p role="alert" className="mt-3 text-sm text-red-600">
                  {reviewsQuery.error.message}
                </p>
              )}
              <div className="mt-4 space-y-4">
                {((reviewsQuery.data?.items || []) as PropertyReview[]).map(
                  (review) => (
                    <article
                      key={review.id}
                      className="rounded-xl border border-orange-100 p-4"
                    >
                      <div className="flex justify-between gap-4">
                        <h3 className="font-semibold text-stone-900">
                          {review.title}
                        </h3>
                        <span className="whitespace-nowrap text-amber-600">
                          ★ {review.rating}/5
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-stone-700">
                        {review.body}
                      </p>
                      <p className="mt-2 text-xs text-stone-500">
                        {review.author} ·{" "}
                        {new Date(review.createdAt).toLocaleDateString()}
                      </p>
                    </article>
                  ),
                )}
                {!reviewsQuery.isPending &&
                  !reviewsQuery.error &&
                  reviewsQuery.data?.items?.length === 0 && (
                    <p className="text-sm text-stone-500">No reviews yet.</p>
                  )}
              </div>
              {token && reviewEligibleBookings.length > 0 && (
                <form
                  onSubmit={submitReview}
                  className="mt-5 space-y-3 rounded-xl bg-orange-50 p-4"
                >
                  <h3 className="font-semibold text-stone-900">
                    Share a review
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <select
                      value={bookingId}
                      onChange={(event) => setBookingId(event.target.value)}
                      required
                      className="rounded-lg border p-2"
                      aria-label="Select completed stay"
                    >
                      <option value="">Select a completed stay</option>
                      {reviewEligibleBookings.map((booking) => (
                        <option
                          key={booking.bookingId}
                          value={booking.bookingId}
                        >
                          {booking.bookingId}
                        </option>
                      ))}
                    </select>
                    <select
                      value={reviewRating}
                      onChange={(event) =>
                        setReviewRating(Number(event.target.value))
                      }
                      className="rounded-lg border p-2"
                      aria-label="Rating"
                    >
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <option key={rating} value={rating}>
                          {rating} stars
                        </option>
                      ))}
                    </select>
                  </div>
                  <input
                    value={reviewTitle}
                    onChange={(event) => setReviewTitle(event.target.value)}
                    required
                    maxLength={120}
                    placeholder="Review title"
                    className="w-full rounded-lg border p-2"
                  />
                  <textarea
                    value={reviewBody}
                    onChange={(event) => setReviewBody(event.target.value)}
                    required
                    rows={3}
                    placeholder="Tell travelers about your stay"
                    className="w-full rounded-lg border p-2"
                  />
                  {reviewMutation.error && (
                    <p role="alert" className="text-sm text-red-600">
                      {reviewMutation.error.message}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={reviewMutation.isPending}
                    className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white disabled:opacity-60"
                  >
                    {reviewMutation.isPending ? "Submitting…" : "Submit review"}
                  </button>
                </form>
              )}
            </section>
          </div>

          <aside className="h-max rounded-3xl border border-orange-100 bg-white p-6 shadow-xl shadow-orange-100/70 lg:sticky lg:top-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
              The stay at a glance
            </p>
            <div className="mt-5 rounded-2xl bg-stone-900 p-4 text-white">
              <p className="text-sm font-semibold">
                {property.location?.town}, {property.location?.country}
              </p>
              <p className="mt-1 text-xs text-white/70">
                {property.location?.region}
              </p>
            </div>
            <p className="mt-5 text-3xl font-bold text-stone-900">
              {property.currency} {property.pricePerNight}
              <span className="text-sm font-medium text-stone-500">
                {" "}
                / night
              </span>
            </p>
            <div className="mt-5 space-y-4 border-t border-orange-100 pt-5">
              <div className="grid grid-cols-2 gap-3">
                <label className="text-xs font-semibold text-stone-600">
                  Check-in
                  <input
                    type="date"
                    value={checkIn}
                    min={dateAfter(0)}
                    onChange={(event) => setCheckIn(event.target.value)}
                    className="mt-1 w-full rounded-lg border border-orange-200 px-2 py-2 text-sm"
                  />
                </label>
                <label className="text-xs font-semibold text-stone-600">
                  Check-out
                  <input
                    type="date"
                    value={checkOut}
                    min={checkIn}
                    onChange={(event) => setCheckOut(event.target.value)}
                    className="mt-1 w-full rounded-lg border border-orange-200 px-2 py-2 text-sm"
                  />
                </label>
              </div>
              <label className="block text-xs font-semibold text-stone-600">
                Room type
                <select
                  value={chosenRoomId}
                  onChange={(event) => setRoomTypeId(event.target.value)}
                  required
                  className="mt-1 w-full rounded-lg border border-orange-200 px-2 py-2 text-sm"
                >
                  {roomTypes.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name} · {property.currency} {room.pricePerNight}
                      /night
                    </option>
                  ))}
                </select>
              </label>
              <div className="grid grid-cols-3 gap-3">
                <label className="text-xs font-semibold text-stone-600">
                  Adults
                  <input
                    type="number"
                    min="1"
                    value={adults}
                    onChange={(event) => setAdults(Number(event.target.value))}
                    className="mt-1 w-full rounded-lg border border-orange-200 px-2 py-2 text-sm"
                  />
                </label>
                <label className="text-xs font-semibold text-stone-600">
                  Children
                  <input
                    type="number"
                    min="0"
                    value={children}
                    onChange={(event) =>
                      setChildren(Number(event.target.value))
                    }
                    className="mt-1 w-full rounded-lg border border-orange-200 px-2 py-2 text-sm"
                  />
                </label>
                <label className="text-xs font-semibold text-stone-600">
                  Rooms
                  <input
                    type="number"
                    min="1"
                    value={rooms}
                    onChange={(event) => setRooms(Number(event.target.value))}
                    className="mt-1 w-full rounded-lg border border-orange-200 px-2 py-2 text-sm"
                  />
                </label>
              </div>
              {property.addOns?.length > 0 && (
                <fieldset className="space-y-2">
                  <legend className="text-xs font-semibold text-stone-600">
                    Optional add-ons
                  </legend>
                  {(property.addOns as AddOn[]).map((addOn) => (
                    <label
                      key={addOn.id}
                      className="flex items-center justify-between gap-2 text-sm"
                    >
                      <span>
                        <input
                          type="checkbox"
                          checked={addOnIds.includes(addOn.id)}
                          onChange={(event) =>
                            setAddOnIds((current) =>
                              event.target.checked
                                ? [...current, addOn.id]
                                : current.filter((id) => id !== addOn.id),
                            )
                          }
                          className="mr-2"
                        />
                        {addOn.name}
                      </span>
                      <span>
                        {property.currency} {addOn.price}
                      </span>
                    </label>
                  ))}
                </fieldset>
              )}
              {quoteMutation.error && (
                <p role="alert" className="text-sm text-red-600">
                  {quoteMutation.error.message}
                </p>
              )}
              <button
                type="button"
                onClick={requestQuote}
                disabled={
                  quoteMutation.isPending ||
                  !checkIn ||
                  !checkOut ||
                  checkOut <= checkIn ||
                  adults < 1 ||
                  rooms < 1
                }
                className="flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600 disabled:opacity-60"
              >
                {quoteMutation.isPending
                  ? "Checking availability…"
                  : token
                    ? "Check availability & reserve"
                    : "Sign in to reserve"}
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
            {property.policies?.cancellation && (
              <p className="mt-4 text-xs text-stone-500">
                {property.policies.cancellation}
              </p>
            )}
          </aside>
        </div>
      </main>
    </Layout>
  );
};

export default Property_Description;
