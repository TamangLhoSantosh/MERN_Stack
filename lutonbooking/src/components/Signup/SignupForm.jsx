import React from "react";

const SignupForm = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-md w-full bg-white  p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
