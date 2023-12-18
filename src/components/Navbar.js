import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../resources/images/Logo.svg";

function Navbar({ NavLink }) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div class="px-4 mx-auto  lg:px-6">
      <div class="relative py-6 ">
        <nav
          class="relative flex items-center justify-between sm:h-12 py-5 md:justify-center"
          aria-label="Global"
        >
          <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div class="flex items-center justify-between w-full md:w-auto">
              <Link to="/" className="w-28">
                <span class="sr-only">G-Campus</span>
                <img class="w-full" src={Logo} alt="logo" />
              </Link>
              <div class="flex items-center -mr-2 md:hidden">
                <button
                  class="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-50 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50"
                  type="button"
                  aria-expanded="false"
                >
                  <span class="sr-only">Open main menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="hidden md:flex md:space-x-10 list-none">
            {NavLink.map((navlink) => {
              return (
                <li className="">
                  <Link
                    key={navlink.id}
                    to={navlink.link}
                    className={
                      path === navlink.link
                        ? "mx-4 text-base font-bold border-b-2 pb-2 list-none border-blue-500 hover:text-blue-600 text-blue-600"
                        : " mx-4 text-center pb-2 leading-loose text-gray-500 hover:border-b-2 hover:border-blue-500 hover:transition-colors duration-300 ease-in-out"
                    }
                    target=""
                  >
                    {navlink.name}
                  </Link>
                </li>
              );
            })}
          </div>
          <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <div class=" flex justify-center items-center rounded-full shadow">
              <Link
                to="/login"
                class={`inline-flex items-center px-4 py-2 text-base ${
                  path === "/login"
                    ? "bg-blue-500 text-white font-bold"
                    : "bg-white text-blue-500 font-bold"
                } border border-transparent rounded-full transition-all duration-500 ease-in-out  cursor-pointer font-base  `}
              >
                Sign In
              </Link>
              <span className="text-blue-500 font-bold">
                {path !== "/login" && path !== "/signup" ? "|" : ` `}
              </span>
              <Link
                to="/signup"
                class={`inline-flex items-center px-4 py-2 text-base 
                ${
                  path === "/signup"
                    ? "bg-blue-500 text-white font-bold"
                    : "bg-white text-blue-500 font-bold"
                }
                border border-transparent transition-all duration-500 ease-linear rounded-full cursor-pointer font-base  `}
              >
                Sign up
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
