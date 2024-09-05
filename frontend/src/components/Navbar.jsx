import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
      <div className="w-full px-8 mx-auto">
        <div className="flex justify-between h-16 xl:ml-16 items-center">
          <Link className="flex items-center" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-7 w-7"
            >
              <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
            </svg>
            <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">
              Dressify
            </span>
          </Link>
          <nav className="hidden md:flex gap-20">
            <Link
              className="font-medium flex items-center text-base transition-colors hover:underline"
              to="/"
            >
              Home
            </Link>
            <Link
              className="font-medium flex items-center text-base transition-colors hover:underline"
              to="/about"
            >
              About
            </Link>
            <Link
              className="font-medium flex items-center text-base transition-colors hover:underline"
              to="/services"
            >
              Services
            </Link>
            <Link
              className="font-medium flex items-center text-base transition-colors hover:underline"
              to="/contact"
            >
              Contact
            </Link>
            <Link
              className="font-medium flex items-center text-base transition-colors hover:underline"
              to="/developers"
            >
              Developers
            </Link>
          </nav>
          <div className="flex items-center gap-6">
            <button
              type="button"
              className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55"
            >
              <Link to="/">Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
