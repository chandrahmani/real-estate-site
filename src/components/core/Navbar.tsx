import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-100 text-white p-4 fixed w-full top-0 z-50 shadow-md text-white p-4 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-blue-600">
                RealEstate
              </span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/buy">
              <span className="text-gray-800 hover:text-blue-600">Buy</span>
            </Link>
            <Link href="/rent">
              <span className="text-gray-800 hover:text-blue-600">Rent</span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-800 hover:text-blue-600">Contact</span>
            </Link>
            <Link href="/about">
              <span className="text-gray-800 hover:text-blue-600">About</span>
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/buy">
              <span className="block text-gray-800 hover:text-blue-600">
                Buy
              </span>
            </Link>
            <Link href="/rent">
              <span className="block text-gray-800 hover:text-blue-600">
                Rent
              </span>
            </Link>
            <Link href="/contact">
              <span className="block text-gray-800 hover:text-blue-600">
                Contact
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
