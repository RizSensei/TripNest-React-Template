import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useWishlist, useWishlistMutation } from "../../api/queries";
import { useAuth } from "../../context/AuthContext";
import MapModal from "../Modal/MapModal";
import type { PropertySummary } from "../../api/types";

type PropertyCardProps = { property: PropertySummary; saved?: boolean };

const Property_Card = ({ property, saved = false }: PropertyCardProps) => {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const { token } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const wishlistQuery = useWishlist();
  const wishlist = useWishlistMutation();
  const image =
    property?.image ||
    property?.images?.[0]?.url ||
    property?.timesOfDay?.sunrise?.imageUrl ||
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470";
  const isSaved = saved || (wishlistQuery.data?.items || []).some((item) => item.id === property.id);

  const toggleSaved = async () => {
    if (!token) {
      navigate("/login", { state: { from: location } });
      return;
    }
    try {
      await wishlist.mutateAsync({ propertyId: property.id, saved: !isSaved });
    } catch {
      // The mutation error is rendered in the card.
    }
  };

  return (
    <>
      <div className="relative flex flex-col gap-2 rounded-xl border border-orange-100 p-2 sm:flex-row">
        <Link
          to={`/property-description/${property?.slug || property?.id}`}
          className="relative h-52 aspect-square overflow-hidden rounded-xl bg-shade"
        >
          <img src={image} alt={property?.title || property?.propertyName} className="h-full w-full object-cover" />
        </Link>
        <button
          type="button"
          onClick={toggleSaved}
          aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}
          disabled={wishlist.isPending}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-red-500 shadow"
        >
          <i className={`fa-${isSaved ? "solid" : "regular"} fa-heart`} />
        </button>
        <div className="flex flex-col gap-2 px-2 font-medium">
          <div>
            <Link to={`/property-description/${property?.slug || property?.id}`} className="text-xl font-semibold text-stone-800 hover:text-orange-600">
              {property?.propertyName || property?.title}
            </Link>
            <p className="text-xs text-orange-600">{property?.location?.town}, {property?.location?.country}</p>
          </div>
          <p className="text-xs text-stone-600">{property?.timesOfDay?.sunrise?.description || property?.vibeCategory}</p>
          <div className="mt-2 flex w-full justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500 text-sm font-semibold text-white">
                {Number(property?.rating || 0).toFixed(1)}
              </span>
              <div className="font-semibold">
                <p className="text-sm text-stone-800">{property?.vibeCategory || "Guest favorite"}</p>
                <p className="text-xs text-stone-500">{property?.reviewCount || 0} reviews</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="rounded-lg border border-orange-300 px-3 py-3 text-sm font-semibold text-orange-700">
                {property?.currency || "USD"} {property?.pricePerNight || 0}
              </span>
              <button
                type="button"
                onClick={() => setIsMapOpen(true)}
                aria-label="View property map"
                className="flex h-12 w-12 items-center justify-center rounded-lg border border-orange-300 text-lg font-semibold text-orange-700"
              >
                <i className="fa-solid fa-earth-americas" />
              </button>
            </div>
          </div>
          {wishlist.error && <p role="alert" className="text-xs text-red-600">{wishlist.error.message}</p>}
        </div>
      </div>
      {isMapOpen && <MapModal toggleMapModal={() => setIsMapOpen(false)} />}
    </>
  );
};

export default Property_Card;
