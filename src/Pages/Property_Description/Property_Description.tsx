import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { properties } from "../../../public/mock/properties";
import Layout from "../../component/Layout/Layout";

const viewOptions: Array<{
  key: keyof (typeof properties)[number]["timesOfDay"];
  label: string;
  icon: string;
}> = [
  { key: "sunrise", label: "6:00 AM", icon: "fa-sun" },
  { key: "midday", label: "12:00 PM", icon: "fa-cloud-sun" },
  { key: "goldenHour", label: "5:30 PM", icon: "fa-mountain-sun" },
];

const roomOptions = [
  { value: "panorama-suite", label: "Panorama suite", detail: "1 king bed · 2 guests" },
  { value: "view-twin-room", label: "View twin room", detail: "2 twin beds · 2 guests" },
  { value: "family-lodge-room", label: "Family lodge room", detail: "2 beds · 4 guests" },
];

const Property_Description = () => {
  const { slug } = useParams();
  const selectedProperty =
    properties.find((property) => property.slug === slug) || properties[0];
  const [activeViewKey, setActiveViewKey] =
    useState<keyof (typeof properties)[number]["timesOfDay"]>("sunrise");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [isSaved, setIsSaved] = useState(false);
  const [checkIn, setCheckIn] = useState("2026-10-12");
  const [checkOut, setCheckOut] = useState("2026-10-15");
  const [guestCount, setGuestCount] = useState("2");
  const [roomCount, setRoomCount] = useState("1");
  const [selectedRoom, setSelectedRoom] = useState(roomOptions[0].value);
  const activeView = selectedProperty.timesOfDay[activeViewKey];

  const addOns = [
    {
      name: "Sunrise Walled-City Walk",
      detail:
        "A guided stroll through 14th-century Lo Manthang before the streets wake up.",
      icon: "fa-person-walking",
    },
    {
      name: "Ancient Sky Cave Tour",
      detail:
        "A private exploration of the cliffside caves visible from your window.",
      icon: "fa-dungeon",
    },
  ];

  const toggleAddOn = (name: string) => {
    setSelectedAddOns((currentAddOns) =>
      currentAddOns.includes(name)
        ? currentAddOns.filter((addOn) => addOn !== name)
        : [...currentAddOns, name],
    );
  };

  return (
    <Layout>
      <main className="w-full pb-36 pt-8 2xl:px-20">
        <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
              {selectedProperty.vibeCategory}
            </p>
            <h1 className="mt-2 text-3xl font-bold text-stone-900 md:text-5xl">
              {selectedProperty.title}
            </h1>
            <p className="mt-2 text-sm text-stone-600">
              {selectedProperty.propertyName} · {selectedProperty.location.town}
              , {selectedProperty.location.region}
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm text-stone-600">
            <span className="flex items-center gap-1 text-amber-500">
              <i className="fa-solid fa-star" />
              <strong className="text-stone-800">
                {selectedProperty.rating.toFixed(2)}
              </strong>
            </span>
            <span>{selectedProperty.reviewCount} view notes</span>
            <button
              type="button"
              onClick={() => setIsSaved(!isSaved)}
              aria-label={
                isSaved ? "Remove from saved views" : "Save this view"
              }
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${isSaved ? "border-orange-500 bg-orange-500 text-white" : "border-orange-200 text-orange-600 hover:bg-orange-50"}`}
            >
              <i className={`fa-${isSaved ? "solid" : "regular"} fa-heart`} />
            </button>
          </div>
        </div>

        <section className="relative overflow-hidden rounded-[1.75rem] bg-stone-900 shadow-2xl shadow-orange-200/60">
          <div className="relative h-[28rem] md:h-[38rem]">
            <img
              src={activeView.imageUrl}
              alt={`${selectedProperty.title} at ${activeView.timeLabel}`}
              className="h-full w-full object-cover transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/20" />

            <div className="absolute left-4 right-4 top-4 flex flex-col gap-3 md:left-8 md:right-8 md:flex-row md:items-start md:justify-between">
              <div className="rounded-2xl border border-white/30 bg-stone-950/35 p-4 text-white backdrop-blur-md">
                <p className="text-[10px] uppercase tracking-[0.25em] text-orange-200">
                  Window perspective
                </p>
                <p className="mt-1 text-lg font-semibold">
                  {activeView.timeLabel}
                </p>
                <p className="mt-1 max-w-xs text-xs leading-5 text-white/80">
                  {activeView.description}
                </p>
              </div>
              <div className="flex rounded-full border border-white/30 bg-stone-950/35 p-1 backdrop-blur-md">
                {viewOptions.map((view) => (
                  <button
                    key={view.key}
                    type="button"
                    onClick={() => setActiveViewKey(view.key)}
                    className={`flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold transition md:px-4 ${activeViewKey === view.key ? "bg-orange-500 text-white" : "text-white/80 hover:bg-white/15"}`}
                  >
                    <i className={`fa-solid ${view.icon}`} />
                    <span>{view.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="absolute bottom-5 left-4 right-4 grid gap-2 md:bottom-8 md:left-8 md:right-8 md:grid-cols-4">
              {[
                [
                  "Elevation",
                  selectedProperty.elevationFormatted,
                  "fa-arrow-up",
                ],
                ["Key peaks", selectedProperty.peakVisible, "fa-mountain"],
                ["Orientation", selectedProperty.orientation, "fa-compass"],
                ["Atmosphere", selectedProperty.skyClarity, "fa-wind"],
              ].map(([label, value, icon]) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/20 bg-stone-950/45 p-3 text-white backdrop-blur-md"
                >
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-orange-200">
                    <i className={`fa-solid ${icon}`} />
                    {label}
                  </div>
                  <p className="mt-1 text-sm font-semibold leading-5">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <section>
              <p className="max-w-3xl text-lg leading-8 text-stone-700">
                {activeView.description} Stay inside the frame of Upper
                Mustang&apos;s red-clay canyons, where ancient cave dwellings
                and distant snowcaps turn the first light into an experience.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-orange-800">
                <span className="rounded-full bg-orange-100 px-3 py-2">
                  High-Desert Plateau
                </span>
                <span className="rounded-full bg-orange-100 px-3 py-2">
                  Direct morning sun
                </span>
                <span className="rounded-full bg-orange-100 px-3 py-2">
                  Local host welcome
                </span>
              </div>
            </section>

            <section className="rounded-3xl border border-orange-100 bg-orange-50 p-6 md:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-start">
                <img
                  src={selectedProperty.host.avatarUrl}
                  alt={selectedProperty.host.name}
                  className="h-20 w-20 rounded-2xl object-cover"
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
                    Meet your host
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-stone-900">
                    {selectedProperty.host.name}
                  </h2>
                  <p className="text-sm text-stone-600">
                    {selectedProperty.host.role}
                  </p>
                  <p className="mt-4 text-lg italic leading-7 text-stone-700">
                    &quot;{selectedProperty.host.quote}&quot;
                  </p>
                  <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-orange-700">
                    <i className="fa-solid fa-mug-hot" /> A glass of hot local
                    Mustang apple cider on arrival
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="mb-4 flex items-end justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
                    Room & window experience
                  </p>
                  <h2 className="mt-1 text-2xl font-bold text-stone-900">
                    Comfort at 3,840 m
                  </h2>
                </div>
                <i className="fa-solid fa-bed text-2xl text-orange-400" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {selectedProperty.roomHighlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex gap-3 rounded-2xl border border-orange-100 bg-white p-4 shadow-sm shadow-orange-100"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                      <i className="fa-solid fa-check" />
                    </span>
                    <p className="text-sm font-medium leading-6 text-stone-700">
                      {highlight}
                    </p>
                  </div>
                ))}
                <div className="flex gap-3 rounded-2xl border border-orange-100 bg-white p-4 shadow-sm shadow-orange-100">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    <i className="fa-solid fa-mug-hot" />
                  </span>
                  <p className="text-sm font-medium leading-6 text-stone-700">
                    Mustangi breakfast with salt-butter tea, buckwheat bread,
                    and wild yak cheese delivered to bed.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
                Cultural & trail add-ons
              </p>
              <h2 className="mt-1 text-2xl font-bold text-stone-900">
                Step beyond the window
              </h2>
              <div className="mt-4 space-y-3">
                {addOns.map((addOn) => {
                  const isSelected = selectedAddOns.includes(addOn.name);
                  return (
                    <button
                      key={addOn.name}
                      type="button"
                      onClick={() => toggleAddOn(addOn.name)}
                      className={`flex w-full items-center justify-between gap-4 rounded-2xl border p-4 text-left transition ${isSelected ? "border-orange-500 bg-orange-50" : "border-stone-200 bg-white hover:border-orange-300"}`}
                    >
                      <span className="flex items-start gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-orange-600">
                          <i className={`fa-solid ${addOn.icon}`} />
                        </span>
                        <span>
                          <strong className="block text-sm text-stone-900">
                            {addOn.name}
                          </strong>
                          <span className="mt-1 block text-xs leading-5 text-stone-600">
                            {addOn.detail}
                          </span>
                        </span>
                      </span>
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${isSelected ? "border-orange-500 bg-orange-500 text-white" : "border-stone-300 text-transparent"}`}
                      >
                        <i className="fa-solid fa-check text-xs" />
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>
          </div>

          <aside className="h-max rounded-3xl border border-orange-100 bg-white p-6 shadow-xl shadow-orange-100/70 lg:sticky lg:top-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
              The stay at a glance
            </p>
            <div className="mt-5 flex items-center gap-3 rounded-2xl bg-stone-900 p-4 text-white">
              <i className="fa-solid fa-location-dot text-orange-300" />
              <div>
                <p className="text-sm font-semibold">
                  {selectedProperty.location.town}
                </p>
                <p className="text-xs text-white/60">
                  {selectedProperty.location.country} ·{" "}
                  {selectedProperty.elevationFormatted}
                </p>
              </div>
            </div>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-stone-500">Peak visibility</dt>
                <dd className="text-right font-semibold text-stone-800">
                  {selectedProperty.peakVisible}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-stone-500">Light direction</dt>
                <dd className="text-right font-semibold text-stone-800">
                  {selectedProperty.orientation}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-stone-500">View rating</dt>
                <dd className="font-semibold text-stone-800">
                  {selectedProperty.rating} / 5
                </dd>
              </div>
            </dl>
            <div className="mt-6 border-t border-orange-100 pt-5">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                From
              </p>
              <p className="mt-1 text-3xl font-bold text-stone-900">
                ${selectedProperty.pricePerNight}
                <span className="text-sm font-medium text-stone-500">
                  {" "}
                  / night
                </span>
              </p>
              <p className="mt-2 text-xs text-stone-500">
                Includes the window experience, room highlights, and host
                welcome.
              </p>
            </div>
            <div className="mt-5 space-y-4 border-t border-orange-100 pt-5">
              <div className="grid grid-cols-2 gap-3">
                <label className="text-xs font-semibold text-stone-600">
                  Check-in
                  <input
                    type="date"
                    value={checkIn}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(event) => setCheckIn(event.target.value)}
                    className="mt-1 w-full rounded-lg border border-orange-200 px-2 py-2 text-sm font-semibold text-stone-800 focus:border-orange-500 focus:outline-none"
                  />
                </label>
                <label className="text-xs font-semibold text-stone-600">
                  Check-out
                  <input
                    type="date"
                    value={checkOut}
                    min={checkIn}
                    onChange={(event) => setCheckOut(event.target.value)}
                    className="mt-1 w-full rounded-lg border border-orange-200 px-2 py-2 text-sm font-semibold text-stone-800 focus:border-orange-500 focus:outline-none"
                  />
                </label>
              </div>
              <label className="block text-xs font-semibold text-stone-600">
                Room type
                <select
                  value={selectedRoom}
                  onChange={(event) => setSelectedRoom(event.target.value)}
                  className="mt-1 w-full rounded-lg border border-orange-200 px-2 py-2 text-sm font-semibold text-stone-800 focus:border-orange-500 focus:outline-none"
                >
                  {roomOptions.map((room) => (
                    <option key={room.value} value={room.value}>
                      {room.label} · {room.detail}
                    </option>
                  ))}
                </select>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="text-xs font-semibold text-stone-600">
                  Rooms
                  <select
                    value={roomCount}
                    onChange={(event) => setRoomCount(event.target.value)}
                    className="mt-1 w-full rounded-lg border border-orange-200 px-2 py-2 text-sm font-semibold text-stone-800 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="1">1 room</option>
                    <option value="2">2 rooms</option>
                    <option value="3">3 rooms</option>
                  </select>
                </label>
                <label className="text-xs font-semibold text-stone-600">
                  Guests
                  <select
                    value={guestCount}
                    onChange={(event) => setGuestCount(event.target.value)}
                    className="mt-1 w-full rounded-lg border border-orange-200 px-2 py-2 text-sm font-semibold text-stone-800 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="1">1 guest</option>
                    <option value="2">2 guests</option>
                    <option value="3">3 guests</option>
                    <option value="4">4 guests</option>
                    <option value="5">5 guests</option>
                    <option value="6">6 guests</option>
                    <option value="7">7 guests</option>
                    <option value="8">8 guests</option>
                    <option value="9">9 guests</option>
                    <option value="10">10 guests</option>
                  </select>
                </label>
              </div>
              <Link
                to="/checkout"
                state={{ checkIn, checkOut, guestCount, roomCount, selectedRoom }}
                className="flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600"
              >
                Reserve This View <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </Layout>
  );
};

export default Property_Description;
