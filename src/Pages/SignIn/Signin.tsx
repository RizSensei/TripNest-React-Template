import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLogin } from "../../api/queries";

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
    <div className="grid min-h-screen place-items-center px-5">
      <div className="flex w-full max-w-sm flex-col gap-5">
        <h1 className="text-center font-dynapuff text-5xl">
          <span className="text-emerald">T</span>rip
          <span className="text-emerald">N</span>est
        </h1>
        <form className="space-y-6" onSubmit={submit}>
          <label className="block text-sm font-medium text-gray-900">
            Email address
            <input
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-emerald"
            />
          </label>
          <label className="block text-sm font-medium text-gray-900">
            Password
            <input
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-emerald"
            />
          </label>
          {login.error && (
            <p role="alert" className="text-sm text-red-600">
              {login.error.message}
            </p>
          )}
          <button
            type="submit"
            disabled={login.isPending}
            className="flex w-full justify-center rounded-md bg-emerald px-3 py-2 text-sm font-semibold text-white hover:bg-emerald/90 disabled:opacity-60"
          >
            {login.isPending ? "Signing in…" : "Sign in"}
          </button>
        </form>
        <p className="text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link
            to="/register"
            state={location.state}
            className="font-semibold text-emerald"
          >
            Register
          </Link>
        </p>
        <Link
          to="/"
          className="mt-2 text-center text-xs text-gray-400 underline"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default Signin;
