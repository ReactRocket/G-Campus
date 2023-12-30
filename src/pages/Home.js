import React from "react";
import Logo from "../resources/images/cap-1266204.svg";
import college_img1 from "../resources/images/College-img1.jpg"
import home_img1 from "../resources/illustrations/home/Coding workshop-amico.svg"
import home_img2 from "../resources/illustrations/home/college campus-amico.svg"
import home_img3 from "../resources/illustrations/home/Modern life-rafiki.svg"
import team_1 from '../resources/illustrations/home/team-1.jpg'
import team_2 from '../resources/illustrations/home/team-2.jpg'
import team_3 from '../resources/illustrations/home/team-3.jpg'
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
                    className="block  w-full rounded-xl border-2 border-layer-3 bg-muted-1 px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
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
        <section className="text-gray-600 body-font">
          <div className="container px-5 pt-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
            </div>
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                  <p className="leading-relaxed">Downloads</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2>
                  <p className="leading-relaxed">Users</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">74</h2>
                  <p className="leading-relaxed">Files</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">46</h2>
                  <p className="leading-relaxed">Places</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="px-2 pt-20 md:p-10">
          <div className="mx-auto max-w-6xl space-y-8 md:space-y-20">
            {/* 1/3 and 2/3 */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
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
            <div className="lg:grid  flex flex-col-reverse  gap-6 lg:grid-cols-3">
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
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
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
                  className=""
                  src={home_img3}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial section */}


        <div className="pb-20">
          <div className="xl:container mx-auto px-6 md:px-12">
            <div className="mb-16 sm:px-28 w-full text-center flex flex-col justify-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white md:text-5xl">
                Our Team
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Tailus prides itself not only on award-winning technology, but also on the talent of its
                people of some of the brightest minds and most experienced executives in business.
              </p>
            </div>
            <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 ">
              <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
                <img
                  className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  src={team_1}
                  alt="woman"
                  loading="lazy"
                  width="640"
                  height="805"
                />
                <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                  <div>
                    <h4 className="text-xl font-semibold dark:text-gray-700 text-white">Hentoni Doe</h4>
                    <span className="block text-sm text-gray-500">CEO-Founder</span>
                  </div>
                  <p className="mt-8 text-gray-300 dark:text-gray-600">Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?</p>
                </div>

              </div>
              <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
                <img
                  className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  src={team_2}
                  alt="woman"
                  loading="lazy"
                  width="640"
                  height="805"
                />
                <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                  <div>
                    <h4 className="text-xl font-semibold dark:text-gray-700 text-white">Hentoni Doe</h4>
                    <span className="block text-sm text-gray-500">CEO-Founder</span>
                  </div>
                  <p className="mt-8 text-gray-300 dark:text-gray-600">Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?</p>
                </div>

              </div>
              <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
                <img
                  className="mx-auto h-[26rem] w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  src={team_3}
                  alt="woman"
                  loading="lazy"
                  width="640"
                  height="805"
                />
                <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                  <div>
                    <h4 className="text-xl font-semibold dark:text-gray-700 text-white">Hentoni Doe</h4>
                    <span className="block text-sm text-gray-500">CEO-Founder</span>
                  </div>
                  <p className="mt-8 text-gray-300 dark:text-gray-600">Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?</p>
                </div>

              </div>

            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default Home;

