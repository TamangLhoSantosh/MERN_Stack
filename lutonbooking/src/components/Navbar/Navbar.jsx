import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-1">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="absolute left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out">
              {/* Menu icon */}
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          {/* Logo */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <a href="/" className="text-white text-2xl font-bold">
                Your Logo
              </a>
            </div>
          </div>
          {/* Desktop menu */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex">
              <a
                href="/login"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </a>
              <a
                href="/signup"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Signup
              </a>
              <a
                href="/contact"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
