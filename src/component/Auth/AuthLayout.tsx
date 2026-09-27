import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import TripNestLogo from "../Logo/TripNestLogo";

type AuthLayoutProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  footer: ReactNode;
};

const AuthLayout = ({
  eyebrow,
  title,
  description,
  children,
  footer,
}: AuthLayoutProps) => (
  <main className="min-h-screen bg-[#fbf8f2] p-3 text-stone-900 sm:p-5 lg:p-8">
    <div className="mx-auto grid min-h-[calc(100vh-1.5rem)] max-w-[1440px] overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-[0_28px_90px_-45px_rgba(91,62,33,0.35)] sm:min-h-[calc(100vh-2.5rem)] lg:grid-cols-[1.02fr_0.98fr]">
      <aside className="relative isolate flex min-h-[270px] flex-col justify-between overflow-hidden bg-stone-900 p-6 text-white sm:min-h-[330px] sm:p-10 lg:min-h-full lg:p-14">
        <img
          src="/images/img1.jpg"
          alt="Sunrise over a mountain landscape"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-stone-950/75 via-stone-950/25 to-orange-950/75" />
        <div className="flex items-center justify-between gap-4">
          <div className="rounded-xl bg-white/95 px-4 py-2">
            <TripNestLogo />
          </div>
          <span className="hidden rounded-full border border-white/30 bg-black/15 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur sm:inline-flex">
            Nepal · 6:00 AM
          </span>
        </div>

        <div className="max-w-xl py-8 lg:py-0">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-orange-200">
            <span className="h-px w-8 bg-orange-300" />
            A stay worth waking up for
          </p>
          <h1 className="font-dynapuff text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Let the day begin <span className="text-orange-300">somewhere beautiful.</span>
          </h1>
          <p className="mt-5 max-w-md text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
            Discover a slower kind of travel, framed by mountain light and mornings you’ll remember.
          </p>
        </div>

        <div className="hidden items-end justify-between border-t border-white/25 pt-5 text-xs text-white/75 sm:flex">
          <span>Find your next horizon</span>
          <span className="flex items-center gap-2"><i className="fa-solid fa-sun text-orange-300" /> TripNest journal · 01</span>
        </div>
      </aside>

      <section className="flex items-center justify-center px-5 py-10 sm:px-10 lg:px-14">
        <div className="w-full max-w-md">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-600">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">{title}</h2>
          <p className="mt-3 text-sm leading-6 text-stone-500">{description}</p>
          <div className="mt-8">{children}</div>
          <div className="mt-7 border-t border-stone-100 pt-5">{footer}</div>
          <Link to="/" className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-stone-400 transition hover:text-orange-700">
            <i className="fa-solid fa-arrow-left" aria-hidden="true" />
            Back to TripNest
          </Link>
        </div>
      </section>
    </div>
  </main>
);

export default AuthLayout;
