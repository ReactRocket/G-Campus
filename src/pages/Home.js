import React from "react";
import Logo from "../resources/images/cap-1266204.svg";
import college_img1 from "../resources/images/College-img1.jpg"
import home_img1 from "../resources/illustrations/home/Coding workshop-amico.svg"
import home_img2 from "../resources/illustrations/home/college campus-amico.svg"
import home_img3 from "../resources/illustrations/home/Modern life-rafiki.svg"
function Home() {
  return (
    <div>

      <main>
        {/* Hero section */}
        <section className="px-8 pt-6 pb-2 text-center md:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center">
              {/* ProductHunt badge - Product of the month - 1st */}

              <img className="aspect-square w-1/6" src={Logo} alt="logo" />

              <h1 className="text-center text-3xl font-semibold text-heading md:max-w-4xl lg:text-5xl xl:text-6xl">
                Welcome to G-Campus, for aspiring business and IT leaders!
              </h1>
              <p className="mt-6 max-w-3xl text-xl">
                G-Campus fosters a vibrant and dynamic learning environment where students pursuing BCA, BCom, and BBA degrees.
              </p>
              <form className="mt-6 flex flex-col gap-2 sm:flex-row">
                <div>
                  <label
                    htmlFor="email"
                    className="sr-only block text-sm font-semibold text-heading"
                  >
                    Courses
                  </label>
                  <input
                    id="Courses"
                    name="courses"
                    type="text"
                    placeholder="Courses"
                    className="block w-72 w-full rounded-xl border-2 border-layer-3 bg-muted-1 px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center justify-center rounded-xl border-none bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:text-white dark:focus:ring-white/80"
                >
                  Search
                </button>
              </form>
            </div>
            <div className="mt-12 md:px-2">
              <img className="h-auto w-full rounded-lg" src={college_img1} alt="college" />
            </div>
          </div>
        </section>

        {/* Testimonial section */}
        <section className="p-6 text-center md:p-10">
          <div className="mx-auto w-full max-w-6xl">
            <div className="flex w-full flex-col md:flex-row">
              <div className="w-full p-5 text-center md:w-4/12 md:p-8">
                <ul className="flex justify-center pb-3">
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                </ul>
                <p className="pl-0 pr-0 pt-0 text-center text-base text-heading">
                  “Industry-Focused Curriculum: Our curriculum is meticulously designed to latest skills and knowledge demanded by leading companies in your chosen field.”
                </p>
                <p className="mt-3 text-xs text-text">Jeff Dean, COO</p>
              </div>
              <div className="w-full p-5 text-center md:w-4/12 md:p-8">
                <ul className="flex justify-center pb-3">
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                </ul>
                <p className="pl-0 pr-0 pt-0 text-center text-base text-heading">
                  “State-of-the-Art Facilities: Immerse yourself in a modern learning environment that fosters collaboration, innovation, and hands-on learning.”
                </p>
                <p className="mt-3 text-xs text-text">
                  Cody Fisher, Founder, App.co
                </p>
              </div>
              <div className="w-full p-5 text-center md:w-4/12 md:p-8">
                <ul className="flex justify-center pb-3">
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                </ul>
                <p className="pl-0 pr-0 pt-0 text-center text-base text-heading">
                  “Entrepreneurial Spirit: We encourage and support your entrepreneurial ambitions through incubators, workshops, and access to funding resources”
                </p>
                <p className="mt-3 text-xs text-text">
                  Cecilia Wilkerson, Product Manager, Stripe
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="p-8 md:p-10">
          <div className="mx-auto max-w-6xl space-y-8 md:space-y-20">
            {/* 1/3 and 2/3 */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="flex flex-col rounded-3xl bg-layer-2 p-8">
                <h2 className="bg-gradient-to-r  font-sans text-2xl font-semibold text-gradient gradient-peach md:text-3xl">
                  Dynamic Student Showcase


                </h2>
                <p className="mt-4 text-lg text-justify">
                  Implement a visually appealing and dynamic student showcase prominently on the home page of G-Campus. This feature should highlight the diverse talents and achievements of students through a rotating carousel or grid display. Include high-quality images, brief bios, and links to individual student profiles, allowing visitors to learn more about each student's academic journey, extracurricular activities, and notable accomplishments. This dynamic showcase can be updated regularly to reflect the evolving achievements of the student body, fostering a sense of pride and community engagement.
                </p>

              </div>
              <div className="rounded-3xl bg-layer-2  p-8 md:col-span-2">
                {/* <h2 className="bg-gradient-to-r bg-clip-text text-2xl font-semibold text-gradient gradient-cotton-candy md:text-3xl">
                  You're in control.
                </h2>
                <p className="mt-4 text-lg">
                  All of your stats are displayed in an easy to understand
                  dashboard. Make decisions with confidence.
                </p> */}
                <img
                  className="bg-cover"
                  src={home_img1}
                  alt=""
                />
              </div>
            </div>

            {/* 2/3 and 1/3 */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-3xl bg-layer-2 p-8 md:col-span-2">
                {/* <h2 className="bg-gradient-to-r text-2xl font-semibold text-gradient gradient-cotton-candy md:text-3xl">
                  You're in control.
                </h2>
                <p className="mt-4 text-lg">
                  All of your stats are displayed in an easy to understand
                  dashboard. Make decisions with confidence.
                </p> */}
                <img
                  className=""
                  src={home_img2}
                  alt=""
                />
              </div>
              <div className="flex flex-col rounded-3xl bg-layer-2 p-8">
                <h2 className="bg-gradient-to-r font-sans text-2xl font-semibold text-gradient gradient-peach md:text-3xl">
                  Interactive Campus Map with Student Spotlights
                </h2>
                <p className="mt-4 text-lg text-justify">
                Enhance the user experience by integrating an interactive campus map on the home page that not only provides a visual layout of the college grounds but also incorporates pop-ups or markers linked to specific student achievements or projects. When users hover over designated areas, they can access information about the outstanding contributions of students associated with that location. This interactive feature not only showcases individual accomplishments but also allows prospective students, parents, and other visitors to explore the campus and discover the vibrant student community at G-Campus.
                </p>
              
              </div>
            </div>

            {/* 1/3 and 2/3 */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="flex flex-col rounded-3xl bg-layer-2 p-8">
                <h2 className="bg-gradient-to-r font-sans text-2xl font-semibold text-gradient gradient-peach md:text-3xl">
                Live Social Feed Aggregator                </h2>
                <p className="mt-4 text-lg text-justify">
                Foster a sense of community and real-time engagement by incorporating a live social feed aggregator on the home page. This feature should aggregate posts, photos, and updates from various social media platforms using relevant hashtags or user mentions associated with G-Campus. By curating content directly from students' social media accounts, the website can provide an authentic and dynamic glimpse into campus life. This real-time feed not only showcases the students' daily experiences but also promotes a sense of connectivity and inclusivity among the college community. Ensure that the feed is moderated to maintain a positive and supportive online environment.
                </p>
         
              </div>
              <div className="rounded-3xl bg-layer-2 p-8 md:col-span-2">
                {/* <h2 className="bg-gradient-to-r text-2xl font-semibold text-gradient gradient-cotton-candy md:text-3xl">
                  You're in control.
                </h2>
                <p className="mt-4 text-lg">
                  All of your stats are displayed in an easy to understand
                  dashboard. Make decisions with confidence.
                </p> */}
                <img
                  className="mt-6 lg:mt-14"
                  src={home_img3}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial section */}
        <section className="p-6 text-center md:p-10">
          <div className="mx-auto w-full max-w-6xl">
            <div className="flex w-full flex-col md:flex-row">
              <div className="w-full p-5 text-center md:w-4/12 md:p-8">
                <ul className="flex justify-center pb-3">
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                </ul>
                <p className="pl-0 pr-0 pt-0 text-center text-base text-heading">
                  “NotesBliss has been the best return on our investment for our
                  team. We simply cannot live without it!”
                </p>
                <p className="mt-3 text-xs text-text">Jeff Dean, COO</p>
              </div>
              <div className="w-full p-5 text-center md:w-4/12 md:p-8">
                <ul className="flex justify-center pb-3">
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                </ul>
                <p className="pl-0 pr-0 pt-0 text-center text-base text-heading">
                  “Just tried NoteBliss and I’m obsessed{" "}
                  <span className="mr-1" role="img">
                    😍
                  </span>{" "}
                  Incredible what you can do. Highly recommend to everyone
                  10/10!”
                </p>
                <p className="mt-3 text-xs text-text">
                  Cody Fisher, Founder, App.co
                </p>
              </div>
              <div className="w-full p-5 text-center md:w-4/12 md:p-8">
                <ul className="flex justify-center pb-3">
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                        fill="#FB923C"
                      />
                    </svg>
                  </li>
                </ul>
                <p className="pl-0 pr-0 pt-0 text-center text-base text-heading">
                  “Fantastic piece of software. Everyone on our team uses it
                  daily. Now our entire organization is hooked.”
                </p>
                <p className="mt-3 text-xs text-text">
                  Cecilia Wilkerson, Product Manager, Stripe
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="p-8 md:py-20">
          <div className="rounded-4xl mx-auto flex max-w-6xl flex-col items-center text-center sm:bg-layer-2 sm:py-12 sm:px-6 md:py-18 lg:px-32 2xl:px-64">
            <h2 className="text-3xl font-semibold text-heading md:text-4xl">
              Try it today, no credit card required!
            </h2>

            <p className="mt-4 text-lg font-medium">
              Totally free for 14 days. Just sign up and start creating in
              seconds.
            </p>

            <form className="mt-8 flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
              <div>
                <label
                  htmlFor="email"
                  className="sr-only block text-sm font-semibold text-heading"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="block w-full rounded-xl border-2 border-layer-3 bg-muted-1 px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm md:w-64"
                />
              </div>
              <button
                type="submit"
                className="inline-flex cursor-pointer items-center justify-center rounded-xl border-none bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:opacity-30 disabled:hover:text-white dark:focus:ring-white/80"
              >
                Button
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;

