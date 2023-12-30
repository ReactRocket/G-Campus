import React from "react";
import { Link } from "react-router-dom";
import Logo from "../resources/images/Logo.svg";
import Marquee from "./Marquee";

const notices = [
  {
    text:"BCA Admissions started.",
    to:"/bca"
  },
  {
    text:"BCOM Admissions started.",
    to:"/bcom"
  },
  {
    text:"BBA Admissions started.",
    to:"/bba"
  },
  {
    text:"MCA Admissions started.",
    to:"/mca"
  },
  {
    text:"MBA Admissions started.",
    to:"/mba"
  },
]

function Footer({ NavLink }) {
  return (
    <footer className="text-gray-500 bg-white body-font">
      <hr className=" px-4" />
      <div className="container px-5 py-24 mx-auto">
        <div className="flex justify-between flex-wrap md:text-left text-center order-first ">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 lg:block hidden">

            <h2 className="title-font font-bold text-blue-500 tracking-widest text-sm mb-2">
              Our Pages :
            </h2>
            <nav className="list-none mb-10">
              {NavLink.map((navlink) => {
                return (
                  <li key={navlink?.id}>
                    <Link
                      className="text-gray-700 hover:text-blue-500 font-semibold"
                      to={navlink?.link}>
                      {navlink?.name}
                    </Link>
                  </li>
                );
              })}
            </nav>
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full px-4 ">
            <Marquee data={notices} />
          </div>
          <div className="lg:w-1/4 md:w-1/2 mt-10 w-full px-4">
            <h2 className="title-font font-bold text-blue-500 tracking-widest text-sm mb-3">
              Contact us
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 mt-5 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  className="leading-7  text-sm text-gray-700 hidden md:bloack">
                  Email
                </label>
                <input
                  type="email"
                  id="footer-field"
                  name="footer-field"
                  placeholder="Email"
                  className="w-full bg-gray-200 rounded border bg-opacity-40 border-blue-700 focus:ring-2 focus:ring-blue-700 focus:border-gray-300 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded">
                Send
              </button>
            </div>
            <p className="text-gray-500 text-sm pt-5 md:text-left text-center">
              Contact us to give feedback
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 ">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <Link className="w-1/4 flex title-font font-medium items-center md:justify-start justify-center text-gray-500">

            <img className="scale-150 pt-2 w-16 " src={Logo} alt="logo" />

            {/* <span className="text-3xl text-gray-400 hover:text-blue-500 transition-all duration-500 hidden lg:block">G-Campus</span> */}
          </Link>
          <p className="w-1/2 text-lg text-center text-gray-400 sm:ml-6 sm:mt-0 mt-4">
            © {Date().slice(10, 15)} G-CAMPUS —
            <a
              href="https://twitter.com/ASK_DEVELOPERS"
              className="text-gray-400 ml-1 hover:text-blue-500 font-semibold transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer">
              @ASK_DEVELOPERS
            </a>
          </p>
          <span className="w-1/4 inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-end">
            <a
              className="text-gray-400"
              href="mailto:web.developers.2021.2024@gmail.com"
              target="_blank"
              rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-envelope-at-fill"
                viewBox="0 0 16 16">
                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
              </svg>
            </a>
            <a
              className="ml-3 text-gray-400"
              href="https://twitter.com/ASK_DEVELOPERS"
              target="_blank"
              rel="noopener noreferrer">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
