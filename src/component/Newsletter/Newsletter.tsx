import { useState } from "react";
import type { FormEvent } from "react";
import { useNewsletterMutation } from "../../api/queries";

const Newsletter = () => {
  const subscribe = useNewsletterMutation();
  const [subscribedEmail, setSubscribedEmail] = useState("");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = String(new FormData(form).get("email") || "");
    try {
      await subscribe.mutateAsync({ email, consent: true });
      setSubscribedEmail(email);
      form.reset();
    } catch {
      setSubscribedEmail("");
    }
  };

  return (
    <div className="rounded-xl py-20">
      <form onSubmit={submit} className="flex flex-col items-center justify-center gap-6 px-5">
        <h2 className="text-3xl font-bold text-emerald">Stay in the know</h2>
        <p className="text-center text-sm font-medium">
          Sign up to get TripNest promotions, travel experiences, and information about memorable stays.
        </p>
        <div className="flex w-full max-w-lg flex-col gap-2 sm:flex-row">
          <label className="input input-bordered flex flex-1 items-center gap-2">
            <i className="fa-regular fa-envelope opacity-70" />
            <input name="email" type="email" required className="grow" placeholder="Email address" aria-label="Email address" />
          </label>
          <button type="submit" disabled={subscribe.isPending} className="rounded-md bg-emerald px-8 py-2 text-white disabled:opacity-60">
            {subscribe.isPending ? "Subscribing…" : "Subscribe"}
          </button>
        </div>
        <label className="flex items-start gap-2 text-xs font-medium">
          <input type="checkbox" required className="mt-0.5" />
          I agree to receive TripNest marketing emails and understand I can opt out anytime.
        </label>
        {subscribedEmail && <p role="status" className="text-sm text-emerald-700">Subscribed: {subscribedEmail}</p>}
        {subscribe.error && <p role="alert" className="text-sm text-red-700">{subscribe.error.message}</p>}
      </form>
    </div>
  );
};

export default Newsletter;
