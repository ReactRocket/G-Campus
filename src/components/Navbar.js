import React from "react";
import { Link } from "react-router-dom";

function Navbar({ NavLink }) {
  return (
    <header className="text-white bg-blue-500 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">G-Campus</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap font-medium font-sans items-center text-base justify-center">
          {NavLink.map((navlink) => {
            return (
              <Link
                className="mr-5 hover:text-white"
                to={navlink?.link}
                key={navlink?.id}>
                {navlink?.name}
              </Link>
            );
          })}
        </nav>
        <Link
          className="inline-flex items-center bg-blue-700 border-0 py-1.5 px-3 focus:outline-none hover:bg-blue-900 rounded text-base mt-4 md:mt-0"
          to="/login">
          <p className="mr-2">Login</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-box-arrow-in-left"
            viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z"
            />
            <path
              fillRule="evenodd"
              d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
            />
          </svg>
        </Link>
        <Link
          className="inline-flex items-center bg-blue-700 border-0 py-1.5 px-3 focus:outline-none hover:bg-blue-900 rounded text-base mt-4 md:mt-0 lg:ml-2"
          to="/login">
          <p className="mr-2">Sign Up</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-box-arrow-in-left"
            viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z"
            />
            <path
              fillRule="evenodd"
              d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
            />
          </svg>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
