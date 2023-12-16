import React from "react";
import { Link } from "react-router-dom";

function Footer({ NavLink }) {
  return (
    <footer className="text-white bg-blue-500 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex justify-between flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-indigo-900 tracking-widest text-sm mb-2">
              Our Pages :
            </h2>
            <nav className="list-none mb-10">
              {NavLink.map((navlink) => {
                return (
                  <li key={navlink?.id}>
                    <Link
                      className="text-white hover:text-stone-200"
                      to={navlink?.link}>
                      {navlink?.name}
                    </Link>
                  </li>
                );
              })}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Contact us
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-sm text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-blue-800 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded">
                Send
              </button>
            </div>
            <p className="text-white text-sm mt-2 md:text-left text-center">
              Contact us to {}
              <br className="lg:block hidden" />
              give feedback
            </p>
          </div>
        </div>
      </div>
      <div className="bg-indigo-800 bg-opacity-75">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <Link className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <svg
              className="scale-150 pt-2"
              xmlns="http://www.w3.org/2000/svg"
              // xmlns:xlink="http://www.w3.org/1999/xlink"
              width="50"
              zoomAndPan="magnify"
              viewBox="0 0 375 374.999991"
              height="50"
              preserveAspectRatio="xMidYMid meet"
              version="1.0">
              <path
                fill="#f8f9fa"
                d="M 161.511719 157.464844 C 161.511719 171.929688 173.28125 183.699219 187.746094 183.699219 C 196.632812 183.699219 204.496094 179.253906 209.242188 172.472656 L 187.742188 172.472656 L 187.742188 151.648438 L 227.203125 151.648438 C 228.933594 145.128906 229.871094 138.285156 229.902344 131.226562 L 187.742188 131.226562 C 173.277344 131.230469 161.511719 143 161.511719 157.464844 Z M 161.511719 157.464844 "
                fillOpacity="0.79"
                fillRule="nonzero"
              />
              <path
                fill="#f8f9fa"
                d="M 140.6875 157.464844 C 140.6875 131.515625 161.796875 110.40625 187.742188 110.40625 L 227.289062 110.40625 L 207.28125 90.402344 C 196.316406 79.433594 178.539062 79.433594 167.574219 90.402344 L 120.019531 137.957031 C 109.054688 148.921875 109.054688 166.699219 120.019531 177.664062 L 153.917969 211.558594 C 164.234375 210.949219 174.027344 208.402344 182.941406 204.277344 C 159.242188 201.867188 140.6875 181.792969 140.6875 157.464844 Z M 140.6875 157.464844 "
                fillOpacity="0.79"
                fillRule="nonzero"
              />
              <path
                fill="#e9ecef"
                d="M 169.007812 139.128906 C 174.179688 145.679688 180.535156 151.257812 187.742188 155.542969 L 187.742188 151.652344 L 234.800781 151.652344 L 234.800781 163.949219 C 245 162.085938 254.402344 157.953125 262.46875 152.097656 C 261.398438 146.914062 258.855469 141.976562 254.835938 137.957031 L 248.113281 131.234375 L 187.742188 131.234375 C 180.410156 131.230469 173.773438 134.257812 169.007812 139.128906 Z M 169.007812 139.128906 "
                fillOpacity="0.79"
                fillRule="nonzero"
              />
              <path
                fill="#e9ecef"
                d="M 187.742188 110.40625 L 227.289062 110.40625 L 207.285156 90.402344 C 196.320312 79.433594 178.542969 79.433594 167.574219 90.402344 L 154.664062 103.3125 C 155.222656 109.320312 156.5625 115.105469 158.578125 120.558594 C 166.601562 114.207031 176.738281 110.40625 187.742188 110.40625 Z M 187.742188 110.40625 "
                fillOpacity="0.79"
                fillRule="nonzero"
              />
              <path
                fill="#dee2e6"
                d="M 227.289062 110.40625 L 226.234375 109.351562 C 226.160156 109.351562 226.085938 109.347656 226.011719 109.347656 C 221.664062 109.347656 217.402344 109.714844 213.253906 110.40625 Z M 227.289062 110.40625 "
                fillOpacity="0.79"
                fillRule="nonzero"
              />
              <path
                fill="#dee2e6"
                d="M 187.742188 204.523438 C 171.714844 204.523438 157.539062 196.464844 149.035156 184.195312 C 149.015625 184.910156 149.003906 185.632812 149.003906 186.351562 C 149.003906 194.796875 150.367188 202.921875 152.878906 210.523438 L 167.574219 225.21875 C 178.542969 236.183594 196.320312 236.183594 207.285156 225.21875 L 212.855469 219.648438 L 212.855469 197.246094 C 205.582031 201.851562 196.972656 204.523438 187.742188 204.523438 Z M 187.742188 204.523438 "
                fillOpacity="0.79"
                fillRule="nonzero"
              />
              <path
                fill="#dee2e6"
                d="M 254.839844 137.957031 L 248.113281 131.230469 L 187.742188 131.230469 C 173.277344 131.230469 161.507812 143 161.507812 157.464844 C 161.507812 171.933594 173.277344 183.699219 187.742188 183.699219 C 196.628906 183.699219 204.492188 179.253906 209.242188 172.476562 L 187.742188 172.476562 L 187.742188 151.648438 L 234.800781 151.648438 L 234.800781 197.699219 L 254.835938 177.664062 C 265.804688 166.699219 265.804688 148.921875 254.839844 137.957031 Z M 254.839844 137.957031 "
                fillOpacity="0.79"
                fillRule="nonzero"
              />
              <path
                fill="#adb5bd"
                d="M 161.511719 157.464844 C 161.511719 161.535156 162.441406 165.390625 164.105469 168.832031 C 164.058594 168.195312 164.027344 167.550781 164.027344 166.898438 C 164.027344 152.433594 175.796875 140.664062 190.261719 140.664062 L 257.214844 140.664062 C 256.492188 139.726562 255.703125 138.816406 254.839844 137.957031 L 248.117188 131.230469 L 187.742188 131.230469 C 173.277344 131.230469 161.511719 143 161.511719 157.464844 Z M 161.511719 157.464844 "
                fillOpacity="0.24"
                fillRule="nonzero"
              />
            </svg>
            <span className="text-xl">G-Campus</span>
          </Link>
          <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">
            © 2021 G-CAMPUS —
            <a
              href="https://twitter.com/ASK_DEVELOPERS"
              className="text-gray-400 ml-1"
              target="_blank"
              rel="noopener noreferrer">
              @ASK_DEVELOPERS
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
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
