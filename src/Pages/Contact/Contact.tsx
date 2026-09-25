import React from "react";
import Layout from "../../component/Layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-6xl py-8 md:py-12">
        <div className="mb-8 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">Talk to the people behind the view</p>
          <h1 className="mt-2 text-3xl font-bold text-stone-900">Plan a better morning</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5 rounded-3xl border border-orange-100 bg-white p-6 shadow-sm shadow-orange-100">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Call us</p>
                <p className="text-base font-semibold text-gray-900">+977-1-4221711</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Email</p>
                <p className="text-base font-semibold text-gray-900">support@tripnest.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Address</p>
                <p className="text-base font-semibold text-gray-900">Kathmandu, Nepal</p>
              </div>
            </div>
          </div>

          <form className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm shadow-orange-100">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block text-sm font-medium text-gray-700">
                Full name
                <input
                  type="text"
                  placeholder="Your name"
                    className="mt-2 w-full rounded-lg border border-orange-200 px-3 py-2.5 focus:border-orange-500 focus:outline-none"
                />
              </label>

              <label className="block text-sm font-medium text-gray-700">
                Email
                <input
                  type="email"
                  placeholder="you@example.com"
                    className="mt-2 w-full rounded-lg border border-orange-200 px-3 py-2.5 focus:border-orange-500 focus:outline-none"
                />
              </label>
            </div>

            <label className="mt-4 block text-sm font-medium text-gray-700">
              Subject
              <input
                type="text"
                placeholder="How can we help?"
                className="mt-2 w-full rounded-lg border border-orange-200 px-3 py-2.5 focus:border-orange-500 focus:outline-none"
              />
            </label>

            <label className="mt-4 block text-sm font-medium text-gray-700">
              Message
              <textarea
                rows={6}
                placeholder="Write your message..."
                className="mt-2 w-full rounded-lg border border-orange-200 px-3 py-2.5 focus:border-orange-500 focus:outline-none"
              />
            </label>

            <button className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-4 py-3 text-base font-semibold text-white transition hover:bg-orange-600">
              Send message
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
