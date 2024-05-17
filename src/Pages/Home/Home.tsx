import React from "react";
import Layout from "../../component/Layout/Layout";
import FilterSearch from "../../component/FilterSearch/FilterSearch";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <div className="relative text-white mt-2 rounded-xl h-[60vh] flex flex-col items-center justify-center">
        <img
          src="./images/img1.jpg"
          alt=""
          className="h-full w-full object-cover rounded-xl"
        />
        <div className="absolute inset-0 h-full w-full bg-black bg-opacity-50 rounded-xl">
          <div className="h-full w-full flex flex-col items-center justify-center text-center">
            <h1 className="font-dynapuff text-4xl md:text-6xl">
              Find your next stay
            </h1>
            <p className="mt-2 text-sm md:text-base">
              Search deals on hotels, resort, and much more...
            </p>
          </div>
        </div>
        <div className="text-black absolute -bottom-16 w-[calc(100%-2rem)] md:w-[calc(100%-5rem)] lg:w-[calc(100%-10rem)] rounded-md bg-white shadow-md shadow-gray-300">
          <FilterSearch />
        </div>
      </div>

      <div className="h-28"></div>

      <div className="h-full w-full">
        <h1 className="text-2xl md:text-3xl text-emerald font-bold">
          Discover your new favourite stay
        </h1>
        <div className="mt-5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 2xl:gap-5">
            <Link to="/properties" className="h-[250px] 2xl:h-[375px] rounded-xl bg-gray-200"></Link>
            <Link to="/properties" className="h-[250px] 2xl:h-[375px] rounded-xl bg-gray-200"></Link>
            <Link to="/properties" className="h-[250px] 2xl:h-[375px] rounded-xl bg-gray-200"></Link>
            <Link to="/properties" className="h-[250px] 2xl:h-[375px] rounded-xl bg-gray-200"></Link>
            <Link to="/properties" className="h-[250px] 2xl:h-[375px] rounded-xl bg-gray-200"></Link>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="relative h-[60vh] w-full rounded-2xl overflow-hidden text-white">
          <img
            src="./images/img2.jpg"
            alt=""
            className="h-full w-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 h-full w-full bg-black bg-opacity-50 rounded-xl">
            <div className="h-full w-full flex flex-col gap-4 justify-center pl-10 md:pl-20">
              <h1 className="text-3xl md:text-5xl">
                Early Summer Sale:
                <br />
                Save 25% or more
              </h1>
              <p className="text-sm">
                Members save 25% or more on select hotels. Book by May 26.
              </p>
              <button className="w-max px-3 py-2 bg-emerald rounded-xl text-sm md:text-base">
                Unlock Deals
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl md:text-3xl text-emerald font-bold">
              Trending destinations
            </h1>
            <p className="text-sm text-gray-800 font-semibold">
              Most popular choices for travelers from Nepal
            </p>
          </div>

          <div className="flex items-end">
            <Link to="/properties" className="text-sm md:text-base h-max px-3 py-2 rounded-md border border-emerald text-emerald hover:text-white hover:bg-emerald transform duration-300 ease-in-out">
              View All
            </Link>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2 md:gap-5">
          <div className="grid grid-cols-2 gap-2 md:gap-5">
            <Link to="/properties" className="h-48 md:h-72 bg-gray-200 rounded-xl"></Link>
            <Link to="/properties" className="h-48 md:h-72 bg-gray-200 rounded-xl"></Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5">
            <Link to="/properties" className="h-48 md:h-72 bg-gray-200 rounded-xl"></Link>
            <Link to="/properties" className="h-48 md:h-72 bg-gray-200 rounded-xl"></Link>
            <Link to="/properties" className="h-48 md:h-72 bg-gray-200 rounded-xl"></Link>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl md:text-3xl text-emerald font-bold">
              Explore Nepal
            </h1>
            <p className="text-sm text-gray-800 font-semibold">
              These popular destinations have a lot to offer
            </p>
          </div>
          <div className="flex items-end">
            <Link to="/properties" className="text-sm md:text-base h-max px-3 py-2 rounded-md border border-emerald text-emerald hover:text-white hover:bg-emerald transform duration-300 ease-in-out">
              View All
            </Link>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-5">
          <div className="flex flex-col gap-2">
            <div className="h-48 md:h-56 bg-gray-200 rounded-lg"></div>
            <div>
              <h1 className="font-semibold text-sm md:text-base">Kathmandu</h1>
              <h1 className="text-xs md:text-sm font-medium">10 Properties</h1>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-48 md:h-56 bg-gray-200 rounded-lg"></div>
            <div>
              <h1 className="font-semibold text-sm md:text-base">Kathmandu</h1>
              <h1 className="text-xs md:text-sm font-medium">10 Properties</h1>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-48 md:h-56 bg-gray-200 rounded-lg"></div>
            <div>
              <h1 className="font-semibold text-sm md:text-base">Kathmandu</h1>
              <h1 className="text-xs md:text-sm font-medium">10 Properties</h1>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-48 md:h-56 bg-gray-200 rounded-lg"></div>
            <div>
              <h1 className="font-semibold text-sm md:text-base">Kathmandu</h1>
              <h1 className="text-xs md:text-sm font-medium">10 Properties</h1>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-48 md:h-56 bg-gray-200 rounded-lg"></div>
            <div>
              <h1 className="font-semibold text-sm md:text-base">Kathmandu</h1>
              <h1 className="text-xs md:text-sm font-medium">10 Properties</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="shadow-md shadow-gray-300 rounded-xl py-20">
          <div className="flex flex-col items-center justify-center gap-10 px-5">
            <h1 className="font-bold text-3xl text-emerald">
              Stay in the know
            </h1>
            <p className="text-center text-sm font-medium">
              Sign up to get marketing emails from TripNest.com, including
              promotions, rewards, travel experiences, and information about
              TripNest.com
            </p>
            <div className="flex flex-col md:flex-row gap-2">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow" placeholder="Email" />
              </label>
              <button className="px-8 py-2 rounded-md text-white bg-emerald">
                Subscribe
              </button>
            </div>
            <p className="text-xs font-medium">
              You can opt out anytime. See our 
              <a href="#" className="text-emerald">
                privacy statement
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
