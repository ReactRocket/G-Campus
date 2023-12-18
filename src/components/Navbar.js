import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../resources/images/Logo.svg";

function Navbar({ NavLink }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  return (
    <div class="px-4 mx-auto  lg:px-6">
      <div class="relative sm:py-6 ">
        <nav
          class="relative flex items-center justify-between sm:h-12 sm:py-5 md:justify-center"
          aria-label="Global"
        >
          <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div class="flex items-center justify-between w-full md:w-auto">
              <Link to="/" className="w-28">
                <span class="sr-only">G-Campus</span>
                <img class="w-full" src={Logo} alt="logo" />
              </Link>
              <div class="flex items-center -mr-2 md:hidden">

                {/* <!-- side menu --> */}
                <div class="flex ">
                  <input type="checkbox" checked={isMenuOpen ? "true" : ""} id="drawer-toggle" class="relative sr-only peer" />
                  <div class="fixed top-0 left-0 z-20 w-64 h-full transition-all duration-500 transform -translate-x-full bg-white shadow-lg peer-checked:translate-x-0">
                    <div class="px-6 py-4">
                      <Link to="/" className="w-28">
                        <span class="sr-only">G-Campus</span>
                        <img class="w-3/2" src={Logo} alt="logo" />
                      </Link>
                      <hr />
                      <div className="list-none text-center mt-5">
                        {NavLink.map((navlink) => {
                          return (
                            <li className="">
                              <Link
                                key={navlink.id}
                                to={navlink.link}
                                className={
                                  path === navlink.link
                                    ? "mx-4 text-base font-bold  pb-2 list-none border-blue-500 hover:text-blue-600 text-blue-600"
                                    : " mx-4 text-center pb-2 leading-loose text-gray-500 hover: hover:border-blue-500 hover:transition-colors duration-300 ease-in-out"
                                }
                                target=""
                              >
                                {navlink.name}
                              </Link>
                            </li>
                          );
                        })}
                      </div>
                      <div className="text-center pt-5">
                        <div class=" flex justify-between items-center w-full rounded-full shadow">
                          <Link
                            to="/login"
                            class={`w-1/2 inline-flex items-center px-4 py-2 text-base ${path === "/login"
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
                            class={`w-1/2 inline-flex items-center px-4 py-2 text-base 
                ${path === "/signup"
                                ? "bg-blue-500 text-white font-bold"
                                : "bg-white text-blue-500 font-bold"
                              }
                border border-transparent transition-all duration-500 ease-linear rounded-full cursor-pointer font-base  `}
                          >
                            Sign up
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  for="drawer-toggle"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  class="bg-gray-100 rounded-sm p-2"
                  type="button"
                  aria-expanded="false"
                >
                  {
                    isMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" for="drawer-toggle" className="w-full" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg> : <svg for="drawer-toggle" xmlns="http://www.w3.org/2000/svg" className="w-full" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                  }
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
                class={`inline-flex items-center px-4 py-2 text-base ${path === "/login"
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
                ${path === "/signup"
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