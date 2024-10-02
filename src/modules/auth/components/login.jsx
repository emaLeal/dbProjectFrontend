"use client";

import { FaKey, FaUser } from "react-icons/fa6";
import { login } from "../actions/actions";

export default function ComponentLogin({ setlogin }) {
  return (
    <>
      <form action={login} method="post" className="m-4">
        <div className="relative mb-4 w-full max-w-xs">
          <input
            type="text"
            name="code"
            placeholder="Enter Code"
            className="pl-10 pr-4 py-2 w-full border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-yellow-300"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaUser className="text-yellow-400" />
          </div>
        </div>

        <div className="relative mb-4 w-full max-w-xs">
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="pl-10 pr-4 py-2 w-full border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-yellow-300"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaKey className="text-yellow-400" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button
            type="submit"
            className="bg-orange-500 text-white text-lg font-bold py-1 px-10 rounded-full shadow-lg hover:bg-orange-600 transition duration-300"
          >
            Sign in
          </button>
          <p className="text-sm mt-4">
            Don`t have an account?
            <label
              onClick={() => setlogin("register")}
              className="cursor-pointer text-orange-500"
            >
              Create one now!
            </label>
          </p>
        </div>
      </form>
    </>
  );
}
