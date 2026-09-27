import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCurrentUser, useLogout } from "../../api/queries";
import { useAuth } from "../../context/AuthContext";
import Profile_Dropdown_Link from "../Route_Link/Profile_Dropdown_Link";
import TripNestLogo from "../Logo/TripNestLogo";

const Navbar = () => {
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);
  const { token } = useAuth();
  const currentUser = useCurrentUser();
  const logout = useLogout();
  const navigate = useNavigate();
  const user = currentUser.data;
  const userName = user?.name || user?.email || "Your account";

  const signOut = async () => {
    try {
      await logout.mutateAsync();
      navigate("/");
    } catch {
      // Keep the session active when the server rejects logout.
    }
  };

  return (
    <nav className="relative flex w-full items-center justify-between border border-x-0 border-t-0 border-orange-100 py-4">
      <div className="flex items-center gap-4">
        <TripNestLogo />
        <div className="hidden h-8 w-px bg-orange-200 lg:block" />
        <div className="hidden items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-700 lg:flex">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-100 text-orange-600">
            <i className="fa-solid fa-sun" />
          </span>
          <span>Wake up somewhere unforgettable</span>
        </div>
      </div>

      <section className="flex items-center gap-2 text-sm font-semibold">
        <div className="hidden items-center gap-1 md:flex">
          <Link to="/about" className="rounded-full px-3 py-2 text-stone-700 transition hover:bg-orange-50 hover:text-orange-600">About</Link>
          <Link to="/faq" className="rounded-full px-3 py-2 text-stone-700 transition hover:bg-orange-50 hover:text-orange-600">FAQ</Link>
          <Link to="/contact" className="rounded-full px-3 py-2 text-stone-700 transition hover:bg-orange-50 hover:text-orange-600">Contact</Link>
        </div>
        {token ? (
          <div className="relative">
            <button
              onClick={() => setIsProfileDropdown((open) => !open)}
              id="profile-dropdown"
              aria-expanded={isProfileDropdown}
              aria-haspopup="menu"
              className="flex items-center gap-2 rounded-full border border-orange-200 bg-white py-1.5 pl-1.5 pr-3 text-stone-700 shadow-sm shadow-orange-100 transition hover:border-orange-400 hover:bg-orange-50"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-800 text-xs font-bold text-white">
                {userName[0]?.toUpperCase() || "U"}
              </span>
              <span className="hidden max-w-36 truncate sm:inline">{userName}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] text-orange-500 transition-transform ${isProfileDropdown ? "rotate-180" : ""}`} />
            </button>
            {isProfileDropdown && (
              <div
                id="profile-dropdown-content"
                role="menu"
                className="absolute right-0 top-12 z-20 w-64 overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-xl shadow-stone-200/50"
              >
                <div className="border-b border-orange-100 bg-orange-50 px-5 py-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600">Your TripNest account</p>
                  <p className="mt-1 truncate text-lg font-semibold text-stone-800">{userName}</p>
                </div>
                {currentUser.error && <p role="alert" className="px-5 pt-3 text-xs text-red-600">{currentUser.error.message}</p>}
                <div className="flex w-full flex-col py-2 text-stone-600">
                  <Profile_Dropdown_Link icon="user" label="My Profile" route="user-profile" />
                  <Profile_Dropdown_Link icon="heart" label="Wishlist" route="wishlist" />
                  <Profile_Dropdown_Link icon="history" label="Trip History" route="trip-history" />
                  <button
                    type="button"
                    onClick={signOut}
                    disabled={logout.isPending}
                    className="flex items-center gap-3 px-5 py-3 text-left text-sm hover:bg-orange-50"
                  >
                    <i className="fa-solid fa-right-from-bracket w-4" />
                    {logout.isPending ? "Signing out…" : "Sign out"}
                  </button>
                  {logout.error && <p role="alert" className="px-5 pb-2 text-xs text-red-600">{logout.error.message}</p>}
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="rounded-full bg-orange-500 px-4 py-2 text-white shadow-sm shadow-orange-200 transition hover:bg-orange-600">
            Sign in
          </Link>
        )}
      </section>
    </nav>
  );
};

export default Navbar;
