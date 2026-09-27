import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRegister } from "../../api/queries";

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
    <div className="grid min-h-screen place-items-center px-5">
      <div className="flex w-full max-w-sm flex-col gap-5">
        <h1 className="text-center font-dynapuff text-5xl">
          <span className="text-emerald">T</span>rip
          <span className="text-emerald">N</span>est
        </h1>
        <form className="space-y-5" onSubmit={submit}>
          <label className="block text-sm font-medium text-gray-900">
            Name <span className="font-normal text-gray-500">(optional)</span>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              autoComplete="name"
              className="mt-2 block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-emerald"
            />
          </label>
          <label className="block text-sm font-medium text-gray-900">
            Email address
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              required
              className="mt-2 block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-emerald"
            />
          </label>
          <label className="block text-sm font-medium text-gray-900">
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="new-password"
              minLength={8}
              required
              className="mt-2 block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-emerald"
            />
          </label>
          <label className="block text-sm font-medium text-gray-900">
            Confirm password
            <input
              type="password"
              value={confirmation}
              onChange={(event) => setConfirmation(event.target.value)}
              autoComplete="new-password"
              minLength={8}
              required
              className="mt-2 block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-emerald"
            />
          </label>
          {errorMessage && (
            <p role="alert" className="text-sm text-red-600">
              {errorMessage}
            </p>
          )}
          <button
            type="submit"
            disabled={register.isPending}
            className="flex w-full justify-center rounded-md bg-emerald px-3 py-2 text-sm font-semibold text-white hover:bg-emerald/90 disabled:opacity-60"
          >
            {register.isPending ? "Creating account…" : "Register"}
          </button>
        </form>
        <p className="text-center text-sm text-gray-500">
          Already registered?{" "}
          <Link
            to="/login"
            state={location.state}
            className="font-semibold text-emerald"
          >
            Sign in
          </Link>
        </p>
        <Link to="/" className="text-center text-xs text-gray-400 underline">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default Register;
