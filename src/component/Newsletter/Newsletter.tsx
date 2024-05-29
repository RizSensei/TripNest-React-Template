import React from 'react'

const Newsletter = () => {
  return (
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
  )
}

export default Newsletter