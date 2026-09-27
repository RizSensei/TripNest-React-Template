import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../component/Layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="mx-auto flex min-h-[60vh] max-w-4xl items-center justify-center py-12">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald">
            404
          </p>
          <h1 className="mt-3 text-5xl font-bold text-gray-900">
            Page not found
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            The page you’re looking for does not exist or has been moved.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl bg-emerald px-5 py-3 text-base font-semibold text-white transition hover:bg-emerald/90"
            >
              Go home
            </Link>
            <Link
              to="/properties"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-5 py-3 text-base font-semibold text-gray-700 transition hover:border-emerald hover:text-emerald"
            >
              Browse stays
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
