import React, { useState } from "react";
import Modal_Layout from "./Modal_Layout";

type ProfileDetails = {
  name: string;
  email: string;
  phone: string;
  favoriteHorizon: string;
};

type EditProfileModalProps = {
  profile: ProfileDetails;
  onClose: () => void;
  onSave: (profile: ProfileDetails) => void;
};

const EditProfileModal = ({ profile, onClose, onSave }: EditProfileModalProps) => {
  const [draftProfile, setDraftProfile] = useState(profile);

  const updateField = (field: keyof ProfileDetails, value: string) => {
    setDraftProfile((currentProfile) => ({
      ...currentProfile,
      [field]: value,
    }));
  };

  return (
    <Modal_Layout position="centre">
      <div className="mx-auto max-w-2xl">
        <div className="flex items-start justify-between border-b border-orange-100 pb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
              Your morning map
            </p>
            <h2 className="mt-2 text-2xl font-bold text-stone-900">
              Edit profile
            </h2>
            <p className="mt-1 text-sm text-stone-500">
              Keep your traveler details up to date.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close edit profile"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-200 text-stone-500 transition hover:border-orange-400 hover:bg-orange-50 hover:text-orange-600"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>

        <form
          className="mt-6 space-y-5"
          onSubmit={(event) => {
            event.preventDefault();
            onSave(draftProfile);
          }}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm font-semibold text-stone-700">
              Full name
              <input
                type="text"
                value={draftProfile.name}
                onChange={(event) => updateField("name", event.target.value)}
                required
                className="mt-2 w-full rounded-xl border border-orange-200 px-4 py-3 font-normal text-stone-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </label>
            <label className="text-sm font-semibold text-stone-700">
              Email address
              <input
                type="email"
                value={draftProfile.email}
                onChange={(event) => updateField("email", event.target.value)}
                required
                className="mt-2 w-full rounded-xl border border-orange-200 px-4 py-3 font-normal text-stone-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </label>
            <label className="text-sm font-semibold text-stone-700">
              Phone number
              <input
                type="tel"
                value={draftProfile.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                required
                className="mt-2 w-full rounded-xl border border-orange-200 px-4 py-3 font-normal text-stone-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </label>
            <label className="text-sm font-semibold text-stone-700">
              Favorite horizon
              <input
                type="text"
                value={draftProfile.favoriteHorizon}
                onChange={(event) => updateField("favoriteHorizon", event.target.value)}
                required
                className="mt-2 w-full rounded-xl border border-orange-200 px-4 py-3 font-normal text-stone-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </label>
          </div>

          <div className="flex justify-end gap-3 border-t border-orange-100 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-orange-200 px-5 py-2.5 text-sm font-semibold text-stone-700 transition hover:border-orange-400 hover:bg-orange-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-orange-200 transition hover:bg-orange-600"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </Modal_Layout>
  );
};

export default EditProfileModal;
