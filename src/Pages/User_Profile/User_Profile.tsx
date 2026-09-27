import { useState } from "react";
import Layout from "../../component/Layout/Layout";
import EditProfileModal from "../../component/Modal/EditProfileModal";
import {
  useBookings,
  useProfile,
  useUpdateProfile,
  useWishlist,
} from "../../api/queries";

const User_Profile = () => {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const profileQuery = useProfile();
  const updateProfile = useUpdateProfile();
  const bookingsQuery = useBookings();
  const wishlistQuery = useWishlist();
  const profile = profileQuery.data;

  const saveProfile = async (updatedProfile: {
    name: string;
    phone: string;
    favoriteHorizon: string;
  }) => {
    try {
      await updateProfile.mutateAsync(updatedProfile);
      setIsEditProfileOpen(false);
    } catch {
      // Keep the modal open so the API error remains visible.
    }
  };

  if (profileQuery.isPending) {
    return (
      <Layout>
        <p className="py-12 text-center">Loading your profile…</p>
      </Layout>
    );
  }
  if (profileQuery.error || !profile) {
    return (
      <Layout>
        <p role="alert" className="py-12 text-center text-red-700">
          {profileQuery.error?.message || "Profile could not be loaded."}
        </p>
      </Layout>
    );
  }

  const initials = (profile.name || profile.email)
    .split(" ")
    .map((part: string) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const profileForEdit = {
    name: profile.name || "",
    email: profile.email || "",
    phone: profile.phone || "",
    favoriteHorizon: profile.favoriteHorizon || "",
  };

  return (
    <Layout>
      <div className="mx-auto max-w-6xl py-8 md:py-12">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">
              Your morning map
            </p>
            <h1 className="mt-2 text-3xl font-bold text-stone-900">
              {profile.name || "Your TripNest profile"}
            </h1>
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
                <h2 className="text-xl font-semibold text-gray-900">
                  {profile.name || profile.email}
                </h2>
                <p className="text-sm text-stone-600">{profile.email}</p>
              </div>
            </div>
            <div className="mt-6 space-y-3 text-sm text-stone-700">
              <div className="flex items-center justify-between rounded-xl bg-orange-50 px-4 py-3">
                <span>Member since</span>
                <span className="font-semibold text-stone-900">
                  {profile.createdAt
                    ? new Date(profile.createdAt).toLocaleDateString()
                    : "—"}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-orange-50 px-4 py-3">
                <span>Bookings</span>
                <span className="font-semibold text-stone-900">
                  {profile.counts?.bookings ??
                    bookingsQuery.data?.items?.length ??
                    "—"}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-orange-50 px-4 py-3">
                <span>Saved stays</span>
                <span className="font-semibold text-stone-900">
                  {profile.counts?.wishlist ??
                    wishlistQuery.data?.items?.length ??
                    "—"}
                </span>
              </div>
            </div>
          </aside>
          <main className="space-y-6">
            <section className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm shadow-orange-100">
              <h2 className="text-xl font-semibold text-stone-900">
                Personal information
              </h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {[
                  ["Full name", profile.name || "—"],
                  ["Email", profile.email || "—"],
                  ["Phone", profile.phone || "—"],
                  ["Favorite horizon", profile.favoriteHorizon || "—"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl bg-orange-50 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-orange-700">
                      {label}
                    </p>
                    <p className="mt-2 text-base font-semibold text-stone-900">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </section>
            {updateProfile.error && !isEditProfileOpen && (
              <p role="alert" className="text-sm text-red-600">
                {updateProfile.error.message}
              </p>
            )}
          </main>
        </div>
      </div>
      {isEditProfileOpen && (
        <EditProfileModal
          profile={profileForEdit}
          onClose={() => setIsEditProfileOpen(false)}
          onSave={saveProfile}
          isSaving={updateProfile.isPending}
          error={updateProfile.error?.message}
        />
      )}
    </Layout>
  );
};

export default User_Profile;
