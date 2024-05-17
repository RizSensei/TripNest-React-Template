import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="h-screen w-screen grid place-items-center">
        <div className="flex flex-col gap-5 max-w-sm">
            <h1 className="text-center text-5xl font-dynapuff">
                <span className="text-emerald">T</span>rip<span className="text-emerald"
                  >N</span
                >est
              </h1>
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                  <div className="mt-2">
                    <input id="email" name="email" type="email" autoComplete="email" required className="px-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald sm:text-sm sm:leading-6"/>
                  </div>
                </div>
          
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                  </div>
                  <div className="mt-2">
                    <input id="password" name="password" type="password" autoComplete="current-password" required className="px-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald sm:text-sm sm:leading-6"/>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="confirm_password" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                  </div>
                  <div className="mt-2">
                    <input id="confirm_password" name="confirm_password" type="password" autoComplete="confirm_password" required className="px-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald sm:text-sm sm:leading-6"/>
                  </div>
                </div>
          
                <div>
                  <button type="submit" className="flex w-full justify-center rounded-md bg-emerald px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald">Register</button>
                </div>
              </form>
              <p className="text-xs">By continuing, you have read and agree to our Terms and Conditions and  Privacy Statement.</p>
              <p className="mt-5 text-center text-sm text-gray-500">
                Already Registered?
                <Link to="/login" className="font-semibold leading-6 text-emerald">Login</Link>
              </p>
              <Link to="/" className="text-gray-400 hover:text-gray-600 duration-300 ease-in-out transform text-center mt-5 underline text-xs">
                Back to home
              </Link>
        </div>
    </div>
  )
}

export default Register