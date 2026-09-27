import { useState } from "react";
import type { FormEvent } from "react";
import { useContactMutation } from "../../api/queries";
import Layout from "../../component/Layout/Layout";

const Contact = () => {
  const contact = useContactMutation();
  const [sent, setSent] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    try {
      await contact.mutateAsync({
        name: String(formData.get("name") || ""),
        email: String(formData.get("email") || ""),
        subject: String(formData.get("subject") || ""),
        message: String(formData.get("message") || ""),
      });
      form.reset();
      setSent(true);
    } catch {
      setSent(false);
    }
  };

  return (
    <Layout>
      <div className="mx-auto max-w-6xl py-8 md:py-12">
        <div className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">
            Talk to the people behind the view
          </p>
          <h1 className="mt-2 text-3xl font-bold text-stone-900">
            Plan a better morning
          </h1>
        </div>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5 rounded-3xl border border-orange-100 bg-white p-6 shadow-sm shadow-orange-100">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <i className="fa-solid fa-phone" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Call us
                </p>
                <p className="font-semibold text-gray-900">+977-1-4221711</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <i className="fa-solid fa-envelope" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Email
                </p>
                <p className="font-semibold text-gray-900">
                  support@tripnest.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <i className="fa-solid fa-location-dot" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Address
                </p>
                <p className="font-semibold text-gray-900">Kathmandu, Nepal</p>
              </div>
            </div>
          </div>
          <form
            onSubmit={submit}
            className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm shadow-orange-100"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block text-sm font-medium text-gray-700">
                Full name
                <input
                  name="name"
                  required
                  autoComplete="name"
                  className="mt-2 w-full rounded-lg border border-orange-200 px-3 py-2.5"
                />
              </label>
              <label className="block text-sm font-medium text-gray-700">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 w-full rounded-lg border border-orange-200 px-3 py-2.5"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm font-medium text-gray-700">
              Subject
              <input
                name="subject"
                required
                className="mt-2 w-full rounded-lg border border-orange-200 px-3 py-2.5"
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-gray-700">
              Message
              <textarea
                name="message"
                required
                rows={6}
                className="mt-2 w-full rounded-lg border border-orange-200 px-3 py-2.5"
              />
            </label>
            {sent && (
              <p role="status" className="mt-4 text-sm text-emerald-700">
                Your message has been sent. Thank you for contacting us.
              </p>
            )}
            {contact.error && (
              <p role="alert" className="mt-4 text-sm text-red-700">
                {contact.error.message}
              </p>
            )}
            <button
              type="submit"
              disabled={contact.isPending}
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-4 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:opacity-60"
            >
              {contact.isPending ? "Sending…" : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
