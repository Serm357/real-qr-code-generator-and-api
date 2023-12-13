"use client";

import Menubar from "@/public/icons/Menubar";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
      <nav
        className="mt-6 relative max-w-[85rem] w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link
            className="flex-none text-2xl font-extrabold  text-green-500 dark:text-white "
            href="/"
            aria-label="Brand"
          >
            Qrcoder
          </Link>
          <div className="md:hidden">
            <button
              className=" w-8 h-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? <p>X</p> : <Menubar />}
            </button>
          </div>
        </div>
        {/* Desktop Navigation */}
        <div className="  hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
            <Link
              className="font-medium text-blue-600 md:py-6 dark:text-blue-500"
              href="/"
            >
              Home
            </Link>
            <Link
              className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
              href="/about-api"
            >
              Api
            </Link>
            <Link
              className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
              href="#qrGenerator"
            >
              Qrcode Generator
            </Link>
            <Link
              className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
              href="#contact"
            >
              Contact
            </Link>
            <button>
              <Link
                className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 md:border-s md:border-gray-300 md:my-6 md:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
                href="/login"
              >
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Log in
              </Link>
            </button>
          </div>
        </div>
        {/* End Desktop Navigation */}
        {/* Mobile Navigation */}
        {toggle && (
          <div className="md:hidden rounded-md p-3 w-1/2 absolute top-12 right-0 z-10 bg-gray-100 text-stone-400">
            {" "}
            <div className="overflow-scroll transition-all duration-300 basis-full grow  ">
              <div className="flex flex-col gap-y-3 gap-x-0   ">
                <Link
                  href="/"
                  className="p-2 rounded-md hover:bg-white hover:text-green-300 font-bold"
                >
                  Home
                </Link>
                <Link
                  href="/about-api"
                  className="p-2 rounded-md hover:bg-white hover:text-green-300 font-bold"
                >
                  Api
                </Link>
                <Link
                  href="#qrGenerator"
                  className="p-2 rounded-md hover:bg-white hover:text-green-300 font-bold"
                >
                  Qrcode Generator
                </Link>
                <Link
                  href="#contact"
                  className="p-2 rounded-md hover:bg-white hover:text-green-300 font-bold"
                >
                  Contact
                </Link>

                <button disabled={true}>
                  <Link
                    href="/login"
                    className="p-2 rounded-md flex gap-1 hover:bg-white hover:text-green-300 font-bold"
                  >
                    <svg
                      className="flex-shrink-0 w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    Log in
                  </Link>
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Mobile Navigation */}
      </nav>
    </header>
  );
};
export default Navbar;
