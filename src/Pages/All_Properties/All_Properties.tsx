import { useMemo, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import Layout from "../../component/Layout/Layout";
import Property_Card from "../../component/Property_Card/Property_Card";
import { useProperties, usePropertyFilters } from "../../api/queries";
import type { PropertySummary } from "../../api/types";

const PAGE_SIZE = 20;

const All_Properties = () => {
  const [selectedVibes, setSelectedVibes] = useState<string[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [minimumRating, setMinimumRating] = useState(0);
  const [maximumPrice, setMaximumPrice] = useState(1000);
  const [sortBy, setSortBy] = useState("recommended");
  const [page, setPage] = useState(1);
  const filters = useMemo(
    () => ({
      vibe: selectedVibes,
      region: selectedRegions,
      minRating: minimumRating || undefined,
      maxPrice: maximumPrice < 1000 ? maximumPrice : undefined,
      sort: sortBy,
      page,
      pageSize: PAGE_SIZE,
    }),
    [maximumPrice, minimumRating, page, selectedRegions, selectedVibes, sortBy],
  );
  const propertiesQuery = useProperties(filters);
  const filtersQuery = usePropertyFilters();
  const properties = (propertiesQuery.data?.items || []) as PropertySummary[];
  const regions = (filtersQuery.data?.regions ||
    propertiesQuery.data?.filters?.regions ||
    []) as string[];
  const vibes = (filtersQuery.data?.vibeCategories ||
    propertiesQuery.data?.filters?.vibes ||
    []) as string[];
  const totalPages = Math.max(
    1,
    Math.ceil((propertiesQuery.data?.total || 0) / PAGE_SIZE),
  );

  const toggleValue = (
    value: string,
    selected: string[],
    setSelected: Dispatch<SetStateAction<string[]>>,
  ) => {
    setPage(1);
    setSelected(
      selected.includes(value)
        ? selected.filter((item) => item !== value)
        : [...selected, value],
    );
  };

  const clearFilters = () => {
    setSelectedVibes([]);
    setSelectedRegions([]);
    setMinimumRating(0);
    setMaximumPrice(1000);
    setSortBy("recommended");
    setPage(1);
  };

  return (
    <Layout>
      <div className="mt-5 flex flex-col gap-5 lg:flex-row">
        <aside className="w-full px-5 lg:w-1/4">
          <div className="mt-5 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold">Filter by</h1>
              <button
                type="button"
                onClick={clearFilters}
                className="text-xs font-medium text-orange-600"
              >
                Clear all
              </button>
            </div>
            <fieldset className="text-sm">
              <legend className="font-semibold">Morning mood</legend>
              <div className="mt-2 flex flex-col gap-1">
                {vibes.map((vibe: string) => (
                  <label key={vibe} className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={selectedVibes.includes(vibe)}
                      onChange={() =>
                        toggleValue(vibe, selectedVibes, setSelectedVibes)
                      }
                      className="checkbox checkbox-sm emerald-checkbox"
                    />
                    {vibe}
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset className="text-sm">
              <legend className="font-semibold">View regions</legend>
              <div className="mt-2 flex flex-col gap-1">
                {regions.map((region: string) => (
                  <label key={region} className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={selectedRegions.includes(region)}
                      onChange={() =>
                        toggleValue(region, selectedRegions, setSelectedRegions)
                      }
                      className="checkbox checkbox-sm emerald-checkbox"
                    />
                    {region}
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset className="text-sm">
              <legend className="font-semibold">Minimum rating</legend>
              <div className="mt-2 flex flex-wrap gap-1 font-semibold">
                {(filtersQuery.data?.ratingOptions || [3, 4, 4.5]).map(
                  (rating: number) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => {
                        setMinimumRating(minimumRating === rating ? 0 : rating);
                        setPage(1);
                      }}
                      className={`rounded-lg border-2 px-2 py-1 ${minimumRating === rating ? "border-orange-500 bg-orange-50" : ""}`}
                    >
                      {rating}+{" "}
                      <i className="fa-regular fa-star text-emerald" />
                    </button>
                  ),
                )}
              </div>
            </fieldset>
            <label className="text-sm">
              <span className="font-semibold">Maximum price per night</span>
              <input
                type="number"
                value={maximumPrice}
                onChange={(event) => {
                  setMaximumPrice(
                    Math.min(
                      1000,
                      Math.max(0, Number(event.target.value) || 0),
                    ),
                  );
                  setPage(1);
                }}
                min="0"
                max="1000"
                className="input input-bordered mt-2 w-full focus:outline-none"
              />
              <input
                type="range"
                min="0"
                max="1000"
                value={maximumPrice}
                onChange={(event) => {
                  setMaximumPrice(Number(event.target.value));
                  setPage(1);
                }}
                className="range range-xs mt-2"
                step="25"
              />
            </label>
            <div className="rounded-xl bg-orange-50 p-3 text-xs text-orange-800">
              Showing stays up to{" "}
              <span className="font-semibold">${maximumPrice}</span> per night.
            </div>
          </div>
        </aside>
        <section className="w-full lg:w-3/4">
          <div className="mt-5 flex items-center justify-between gap-5">
            <p className="text-sm font-semibold text-stone-600">
              {propertiesQuery.data
                ? `${propertiesQuery.data.total} stays`
                : "Browse stays"}
            </p>
            <select
              value={sortBy}
              onChange={(event) => {
                setSortBy(event.target.value);
                setPage(1);
              }}
              className="select select-bordered w-full max-w-xs focus:outline-none"
              aria-label="Sort properties"
            >
              <option value="recommended">Recommended views</option>
              <option value="rating">Highest rated</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
            </select>
          </div>
          {propertiesQuery.isPending && (
            <p className="mt-6 text-sm text-stone-600">Loading stays…</p>
          )}
          {propertiesQuery.error && (
            <p
              role="alert"
              className="mt-6 rounded-xl bg-red-50 p-4 text-sm text-red-700"
            >
              {propertiesQuery.error.message}
            </p>
          )}
          {filtersQuery.error && (
            <p
              role="alert"
              className="mt-3 rounded-xl bg-red-50 p-4 text-sm text-red-700"
            >
              Property filter options could not be loaded:{" "}
              {filtersQuery.error.message}
            </p>
          )}
          {!propertiesQuery.isPending &&
            !propertiesQuery.error &&
            properties.length === 0 && (
              <p className="mt-6 rounded-xl border border-orange-100 bg-orange-50 p-6 text-center text-sm text-stone-600">
                No views match those filters. Try widening your morning search.
              </p>
            )}
          <div className="mt-5 grid grid-cols-1 gap-5 2xl:grid-cols-2">
            {properties.map((property) => (
              <Property_Card key={property.id} property={property} />
            ))}
          </div>
          {propertiesQuery.data && totalPages > 1 && (
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                type="button"
                disabled={page <= 1}
                onClick={() => setPage(page - 1)}
                className="rounded-lg border px-4 py-2 disabled:opacity-40"
              >
                Previous
              </button>
              <span className="text-sm text-stone-600">
                Page {page} of {totalPages}
              </span>
              <button
                type="button"
                disabled={page >= totalPages}
                onClick={() => setPage(page + 1)}
                className="rounded-lg border px-4 py-2 disabled:opacity-40"
              >
                Next
              </button>
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
};

export default All_Properties;
