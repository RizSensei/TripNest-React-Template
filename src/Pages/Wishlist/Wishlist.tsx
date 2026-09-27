import Layout from "../../component/Layout/Layout";
import Property_Card from "../../component/Property_Card/Property_Card";
import { useWishlist } from "../../api/queries";
import type { PropertySummary } from "../../api/types";

const Wishlist = () => {
  const wishlist = useWishlist();
  const items = wishlist.data?.items || [];

  return (
    <Layout>
      <div className="mx-auto max-w-6xl py-8 md:py-12">
        <div className="mb-8 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">
              Saved horizons
            </p>
            <h1 className="mt-2 text-3xl font-bold text-stone-900">
              Your morning shortlist
            </h1>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
            <i className="fa-solid fa-heart" />
            <span>
              {items.length} saved {items.length === 1 ? "place" : "places"}
            </span>
          </div>
        </div>
        {wishlist.isPending && (
          <p className="py-6 text-sm text-stone-600">Loading your wishlist…</p>
        )}
        {wishlist.error && (
          <p
            role="alert"
            className="rounded-xl bg-red-50 p-4 text-sm text-red-700"
          >
            {wishlist.error.message}
          </p>
        )}
        {!wishlist.isPending && !wishlist.error && items.length === 0 && (
          <p className="rounded-xl border border-orange-100 bg-orange-50 p-6 text-stone-700">
            Save a property to keep it here for later.
          </p>
        )}
        <div className="grid gap-5 md:grid-cols-2">
          {(items as PropertySummary[]).map((item) => (
            <Property_Card key={item.id} property={item} saved />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Wishlist;
