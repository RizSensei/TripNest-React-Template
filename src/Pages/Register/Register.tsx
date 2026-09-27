import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRegister } from "../../api/queries";
import AuthLayout from "../../component/Auth/AuthLayout";

const Register = () => {
  const register = useRegister();
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [validationError, setValidationError] = useState("");
  const errorMessage = validationError || register.error?.message;

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmation) {
      setValidationError("Passwords do not match.");
      return;
    }
    setValidationError("");
    try {
      await register.mutateAsync({ name: name || undefined, email, password });
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
      eyebrow="Make room for wonder"
      title="Meet the mornings you’ll talk about."
      description="Create your account and start collecting stays with a view worth waking up for."
      footer={
        <p className="text-center text-sm text-stone-500">
          Already have an account?{" "}
          <Link to="/login" state={location.state} className="font-semibold text-orange-700 transition hover:text-orange-500">
            Sign in
          </Link>
        </p>
      }
    >
      <form className="space-y-4" onSubmit={submit}>
        <label className="block text-sm font-semibold text-stone-700">
          Your name <span className="font-normal text-stone-400">· optional</span>
          <span className="relative mt-2 block">
            <i className="fa-regular fa-user pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" aria-hidden="true" />
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              autoComplete="name"
              placeholder="How should we address you?"
              className="w-full rounded-xl border border-stone-200 bg-stone-50 py-3 pl-11 pr-4 text-sm font-normal text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
            />
          </span>
        </label>
        <label className="block text-sm font-semibold text-stone-700">
          Email address
          <span className="relative mt-2 block">
            <i className="fa-regular fa-envelope pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" aria-hidden="true" />
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-xl border border-stone-200 bg-stone-50 py-3 pl-11 pr-4 text-sm font-normal text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
            />
          </span>
        </label>
        <label className="block text-sm font-semibold text-stone-700">
          Password
          <span className="relative mt-2 block">
            <i className="fa-solid fa-lock pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" aria-hidden="true" />
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="new-password"
              minLength={8}
              placeholder="At least 8 characters"
              required
              className="w-full rounded-xl border border-stone-200 bg-stone-50 py-3 pl-11 pr-4 text-sm font-normal text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
            />
          </span>
        </label>
        <label className="block text-sm font-semibold text-stone-700">
          Confirm password
          <span className="relative mt-2 block">
            <i className="fa-solid fa-shield-halved pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" aria-hidden="true" />
            <input
              type="password"
              value={confirmation}
              onChange={(event) => setConfirmation(event.target.value)}
              autoComplete="new-password"
              minLength={8}
              placeholder="Enter your password again"
              required
              className="w-full rounded-xl border border-stone-200 bg-stone-50 py-3 pl-11 pr-4 text-sm font-normal text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
            />
          </span>
        </label>
        {errorMessage && (
          <p role="alert" className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">
            <i className="fa-solid fa-circle-exclamation mr-2" aria-hidden="true" />
            {errorMessage}
          </p>
        )}
        <button
          type="submit"
          disabled={register.isPending}
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-stone-900 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-stone-900/10 transition hover:-translate-y-0.5 hover:bg-orange-700 disabled:cursor-wait disabled:opacity-60"
        >
          {register.isPending ? "Creating your account…" : "Create account"}
          {!register.isPending && <i className="fa-solid fa-arrow-right text-xs transition-transform group-hover:translate-x-1" aria-hidden="true" />}
        </button>
        <p className="text-center text-xs leading-5 text-stone-400">
          By joining, you agree to TripNest’s terms and privacy statement.
        </p>
      </form>
    </AuthLayout>
  );
};

export default Register;
