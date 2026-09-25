import React, { useState } from "react";
import Layout from "../../component/Layout/Layout";
import EditProfileModal from "../../component/Modal/EditProfileModal";
import { properties } from "../../../public/mock/properties";

const User_Profile = () => {
  const nextView = properties[0];
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [profile, setProfile] = useState({
    name: "Rijan Sharma",
    email: "rijan@example.com",
    phone: "+977 9851 234567",
    favoriteHorizon: nextView.peakVisible,
  });

  const initials = profile.name
    .split(" ")
    .map((namePart) => namePart[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Layout>
      <div className="mx-auto max-w-6xl py-8 md:py-12">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">Your morning map</p>
            <h1 className="mt-2 text-3xl font-bold text-stone-900">Rijan&apos;s TripNest</h1>
          </div>
          <button
            type="button"
            onClick={() => setIsEditProfileOpen(true)}
            className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-orange-200 transition hover:bg-orange-600"
          >
            Edit profile
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.5fr]">
          <aside className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm shadow-orange-100">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-stone-900 text-xl font-bold text-white">
                {initials}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{profile.name}</h2>
                <p className="text-sm text-stone-600">Sunrise collector · Nepal</p>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm text-stone-700">
              <div className="flex items-center justify-between rounded-xl bg-orange-50 px-4 py-3">
                <span>Chasing since</span>
                <span className="font-semibold text-stone-900">Jan 2024</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-orange-50 px-4 py-3">
                <span>Views experienced</span>
                <span className="font-semibold text-stone-900">12</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-orange-50 px-4 py-3">
                <span>Saved vistas</span>
                <span className="font-semibold text-stone-900">8</span>
              </div>
            </div>
          </aside>

          <main className="space-y-6">
            <section className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm shadow-orange-100">
              <h2 className="text-xl font-semibold text-stone-900">Personal information</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-orange-50 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-orange-700">Full name</p>
                  <p className="mt-2 text-base font-semibold text-stone-900">{profile.name}</p>
                </div>
                <div className="rounded-xl bg-orange-50 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-orange-700">Email</p>
                  <p className="mt-2 text-base font-semibold text-stone-900">{profile.email}</p>
                </div>
                <div className="rounded-xl bg-orange-50 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-orange-700">Phone</p>
                  <p className="mt-2 text-base font-semibold text-stone-900">{profile.phone}</p>
                </div>
                <div className="rounded-xl bg-orange-50 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-orange-700">Favorite horizon</p>
                  <p className="mt-2 text-base font-semibold text-stone-900">{profile.favoriteHorizon}</p>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm shadow-orange-100">
              <h2 className="text-xl font-semibold text-stone-900">Next sunrise</h2>
              <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-orange-200 bg-orange-50 p-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm text-orange-700">Your next window</p>
                  <h3 className="text-lg font-semibold text-stone-900">{nextView.title}</h3>
                  <p className="text-sm text-stone-600">{nextView.propertyName} · {nextView.location.town} · {nextView.elevationFormatted}</p>
                </div>
                <button className="rounded-full border border-orange-400 bg-white px-4 py-2.5 text-sm font-semibold text-orange-700 transition hover:bg-orange-500 hover:text-white">
                  View itinerary
                </button>
              </div>
            </section>
          </main>
        </div>
      </div>
      {isEditProfileOpen && (
        <EditProfileModal
          profile={profile}
          onClose={() => setIsEditProfileOpen(false)}
          onSave={(updatedProfile) => {
            setProfile(updatedProfile);
            setIsEditProfileOpen(false);
          }}
        />
      )}
    </Layout>
  );
};

export default User_Profile;
