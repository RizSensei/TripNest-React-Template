import Layout from "../../component/Layout/Layout";
import { Link } from "react-router-dom";
import Newsletter from "../../component/Newsletter/Newsletter";
import { useProperties } from "../../api/queries";
import type { PropertySummary } from "../../api/types";

const Home = () => {
  const propertiesQuery = useProperties({
    page: 1,
    pageSize: 5,
    sort: "recommended",
  });
  const featuredProperties = (propertiesQuery.data?.items || []) as PropertySummary[];

  return (
    <Layout>
      <div className="relative mt-2 flex h-[65vh] flex-col items-center justify-center overflow-hidden rounded-3xl text-white shadow-lg shadow-orange-100">
        <img
          src="./images/img1.jpg"
          alt="Sunrise mountain view"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-orange-950/60" />
        <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center px-6 text-center">
          <p className="mb-4 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-orange-100 backdrop-blur-sm">
            Nepal, seen at sunrise
          </p>
          <h1 className="font-dynapuff text-4xl md:text-6xl lg:text-7xl">
            The 6:00 AM View
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-orange-50 md:text-lg">
            Wake up to Himalayan light, cliffside balconies, lake reflections,
            and mountain mornings you actually want to remember.
          </p>
        </div>
        {/* <div className="absolute -bottom-16 w-[calc(100%-2rem)] rounded-2xl bg-white text-black shadow-xl shadow-orange-100 md:w-[calc(100%-5rem)] lg:w-[calc(100%-10rem)]">
          <FilterSearch />
        </div> */}
      </div>

      <div className="h-28" />

      <div className="h-full w-full">
        <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
              Morning deck
            </p>
            <h1 className="mt-2 text-2xl font-bold text-stone-800 md:text-3xl">
              Discover the view before the day begins
            </h1>
          </div>
          <Link
            to="/properties"
            className="w-max rounded-xl border border-orange-300 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700 transition hover:bg-orange-500 hover:text-white"
          >
            Explore stays
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 2xl:gap-5">
          {featuredProperties.map((property) => (
            <Link
              key={property.id}
              to={`/property-description/${property.slug}`}
              className="group relative h-[220px] overflow-hidden rounded-2xl bg-gradient-to-br from-orange-300 to-orange-600"
            >
              {(property.image || property.images?.[0]?.url) && (
                <img
                  src={property.image || property.images[0].url}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="text-lg font-semibold">{property.title}</div>
                <div className="text-xs text-orange-100">
                  {property.propertyName} · {property.location?.town}
                </div>
              </div>
            </Link>
          ))}
          {propertiesQuery.isPending && (
            <p className="col-span-full text-sm text-stone-600">
              Finding stays for your next morning…
            </p>
          )}
          {propertiesQuery.error && (
            <p role="alert" className="col-span-full text-sm text-red-700">
              {propertiesQuery.error.message}
            </p>
          )}
          {!propertiesQuery.isPending &&
            !propertiesQuery.error &&
            featuredProperties.length === 0 && (
              <p className="col-span-full text-sm text-stone-600">
                No stays are available right now. Please check back soon.
              </p>
            )}
        </div>
      </div>

      <div className="mt-10 rounded-[2rem] bg-gradient-to-r from-orange-50 via-amber-50 to-orange-100 p-5 md:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
              Story-led discovery
            </p>
            <h1 className="mt-2 text-3xl font-bold text-stone-800 md:text-5xl">
              Your room, framed by the morning sky.
            </h1>
          </div>

          <Link
            to={
              featuredProperties[0]?.slug
                ? `/property-description/${featuredProperties[0].slug}`
                : "/properties"
            }
            className="w-max rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-orange-200 transition hover:bg-orange-600"
          >
            Reserve this view
          </Link>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold text-stone-800 md:text-3xl">
              Nepal’s most iconic sunrise stays
            </h1>
            <p className="text-sm font-semibold text-stone-600">
              Handpicked for misty ridges, golden-hour lakes, and extraordinary
              morning views.
            </p>
          </div>

          <div className="flex items-end">
            <Link
              to="/properties"
              className="h-max rounded-md border border-orange-300 bg-orange-50 px-3 py-2 text-sm text-orange-700 transition hover:bg-orange-500 hover:text-white md:text-base"
            >
              View all views
            </Link>
          </div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {featuredProperties.slice(0, 2).map((property) => (
            <Link
              key={property.id}
              to={`/property-description/${property.slug}`}
              className="relative h-64 overflow-hidden rounded-3xl bg-gradient-to-br from-amber-200 via-orange-300 to-yellow-500 md:h-80"
            >
              {(property.image || property.images?.[0]?.url) && (
                <img
                  src={property.image || property.images[0].url}
                  alt=""
                  className="h-full w-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-sm uppercase tracking-[0.25em] text-orange-100">
                  {property.location?.region}
                </div>
                <h2 className="mt-2 text-2xl font-semibold">
                  {property.propertyName}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Elevation-first stays",
              text: "Discover properties ranked by view quality, sunrise exposure, and mountain proximity.",
            },
            {
              title: "Authentic local hosting",
              text: "Stay with families and operators who bring culture, warmth, and place-based storytelling.",
            },
            {
              title: "Book the moment",
              text: "Move from dreaming to reservation in a seamless, visual-first booking journey.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm shadow-orange-100"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-lg text-orange-600">
                <i className="fa-solid fa-mountain-sun" />
              </div>
              <h2 className="text-xl font-semibold text-stone-800">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <Newsletter />
      </div>
    </Layout>
  );
};

export default Home;
