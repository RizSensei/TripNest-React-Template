import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLogin } from "../../api/queries";
import AuthLayout from "../../component/Auth/AuthLayout";

const Signin = () => {
  const login = useLogin();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await login.mutateAsync({ email, password });
      const destination = location.state?.from;
      navigate(
        `${destination?.pathname || "/"}${destination?.search || ""}${destination?.hash || ""}`,
        { replace: true, state: destination?.state },
      );
    } catch {
      // The mutation error is rendered below.
    }
  };

  return (
    <AuthLayout
      eyebrow="Welcome back"
      title="Your next morning is closer than you think."
      description="Sign in to pick up where you left off and keep your favorite stays within reach."
      footer={
        <p className="text-center text-sm text-stone-500">
          New to TripNest?{" "}
          <Link to="/register" state={location.state} className="font-semibold text-orange-700 transition hover:text-orange-500">
            Create an account
          </Link>
        </p>
      }
    >
      <form className="space-y-5" onSubmit={submit}>
        <label className="block text-sm font-semibold text-stone-700">
          Email address
          <span className="relative mt-2 block">
            <i className="fa-regular fa-envelope pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" aria-hidden="true" />
            <input
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-stone-200 bg-stone-50 py-3.5 pl-11 pr-4 text-sm font-normal text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
            />
          </span>
        </label>
        <label className="block text-sm font-semibold text-stone-700">
          Password
          <span className="relative mt-2 block">
            <i className="fa-solid fa-lock pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" aria-hidden="true" />
            <input
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-xl border border-stone-200 bg-stone-50 py-3.5 pl-11 pr-4 text-sm font-normal text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
            />
          </span>
        </label>
        {login.error && (
          <p role="alert" className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">
            <i className="fa-solid fa-circle-exclamation mr-2" aria-hidden="true" />
            {login.error.message}
          </p>
        )}
        <button
          type="submit"
          disabled={login.isPending}
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-stone-900 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-stone-900/10 transition hover:-translate-y-0.5 hover:bg-orange-700 disabled:cursor-wait disabled:opacity-60"
        >
          {login.isPending ? "Signing in…" : "Sign in"}
          {!login.isPending && <i className="fa-solid fa-arrow-right text-xs transition-transform group-hover:translate-x-1" aria-hidden="true" />}
        </button>
        <p className="text-center text-xs leading-5 text-stone-400">
          By continuing, you agree to TripNest’s terms and privacy statement.
        </p>
      </form>
    </AuthLayout>
  );
};

export default Signin;
