import React from "react";
import { Link } from "react-router-dom";
import team from "../resources/images/College-img.jpg";
// import team_1 from "../resources/illustrations/home/team-1.jpg";
// import team_2 from "../resources/illustrations/home/team-2.jpg";
// import team_3 from "../resources/illustrations/home/team-3.jpg";

function AboutUs() {
  return (
    <>
      <div className="overflow-hidden px-6">
        <div className="mx-auto mt-7 w-full max-w-6xl lg:mt-14">
          <main className="my-14 lg:mt-24">
            {/* Hero section */}
            <section className="relative">
              <div className="text-sm font-semibold uppercase tracking-tight text-blue-500">
                Team
              </div>

              <h1 className="font-display relative z-10 mt-4 text-xl font-bold leading-tight tracking-tight text-heading lg:mt-8 lg:text-4xl">
                Welcome to G-Campus, a revolutionary platform dedicated to
                reshaping the landscape of education.{" "}
                <span className="text-blue-400">
                  inspiring learners to excel and shaping the leaders of
                  tomorrow.
                </span>{" "}
              </h1>

              <div className="relative mt-12 lg:mt-24">
                <div className="absolute inset-x-0 inset-y-0 rounded-3xl bg-gradient-to-b  blur-md lg:top-4 lg:-bottom-4 lg:blur-xl"></div>
                <img
                  // src="https://res.cloudinary.com/dbbfbpsc2/image/upload/v1664091452/saasblocks-tdg1/assets/penta_about_hero.png"
                  src={team}
                  alt="people looking at laptop while smiling"
                  className="relative z-10 aspect-[2/1] w-full rounded-3xl"
                />
              </div>
            </section>

            {/* Mission section */}
            <section className="mt-12 flex flex-col justify-between gap-10 lg:mt-24 lg:flex-row lg:gap-4">
              <div>
                <h2 className="font-display relative text-3xl font-bold tracking-tight text-heading lg:text-5xl lg:tracking-tighter">
                  Our mission
                  <span className="absolute -bottom-4 left-0 h-[3px] w-16 bg-[#2aefe6] lg:-bottom-5"></span>
                </h2>
              </div>
              <div className="w-full space-y-8 lg:max-w-3xl lg:pl-4 lg:text-lg">
                <p>
                  At{" "}
                  <Link href="#" className="text-blue-700 font-bold">
                    {" "}
                    G-campus
                  </Link>{" "}
                  , our mission is to empower and inspire a diverse community of
                  learners by providing a cutting-edge platform that fosters
                  collaborative and immersive educational experiences. Rooted in
                  our commitment to accessibility, innovation, and inclusivity,
                  we strive to reshape the landscape of education, making
                  high-quality learning opportunities accessible.
                </p>
                <p>
                  Through state-of-the-art technology and a dedication to
                  lifelong learning,{" "}
                  <Link href="#" className="text-blue-700 font-bold">
                    {" "}
                    G-campus
                  </Link>{" "}
                  aims to be a catalyst for personal and societal growth,
                  creating a world where education knows no boundaries.
                </p>
              </div>
            </section>

            {/* Story section */}
            <section className="relative mt-12 flex flex-col justify-between gap-12 lg:mt-24 lg:flex-row lg:gap-4">
              <div>
                <h2 className="font-display relative text-3xl font-bold tracking-tight text-heading lg:text-5xl lg:tracking-tighter">
                  Our story
                  <span className="absolute -bottom-4 left-0 h-[3px] w-16 bg-[#ff7b60] lg:-bottom-5"></span>
                </h2>
              </div>
              <div className="z-10 w-full lg:max-w-3xl lg:pl-4 lg:text-lg">
                <img
                  src="https://res.cloudinary.com/dbbfbpsc2/image/upload/v1664092344/saasblocks-tdg1/assets/penta_about_story.png"
                  alt="people working in the office with a main person cross-armed on the right looking at the camera"
                  className="rounded-xl"
                />
                <p className="mt-8 lg:mt-12">
                  <Link href="#" className="text-blue-700 font-bold">
                    {" "}
                    G-campus
                  </Link>{" "}
                  was born out of a shared vision among a group of passionate
                  educators and technologists who believed in the transformative
                  power of education. Driven by a commitment to break down
                  barriers to learning, our founders set out to create a
                  platform that would redefine the educational experience.
                </p>
                <p className="mt-8">
                  In the early days, we faced challenges that tested our
                  resilience, but each obstacle became an opportunity for
                  innovation.The G-campus story is an ongoing narrative of
                  innovation, impact, and a relentless pursuit of a world where
                  knowledge knows no limits.
                </p>
              </div>
            </section>

            {/* Testimonial section */}

            <div className="py-20">
              {/* <div className="xl:container mx-auto px-6 md:px-12">
                <div className="mb-16 sm:px-28 w-full text-center flex flex-col justify-center">
                  <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white md:text-5xl">
                    Our Team
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Tailus prides itself not only on award-winning technology,
                    but also on the talent of its people of some of the
                    brightest minds and most experienced executives in business.
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
                        <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
                          Hentoni Doe
                        </h4>
                        <span className="block text-sm text-gray-500">
                          CEO-Founder
                        </span>
                      </div>
                      <p className="mt-8 text-gray-300 dark:text-gray-600">
                        Quae labore quia tempora dolor impedit. Possimus, sint
                        ducimus ipsam?
                      </p>
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
                        <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
                          Hentoni Doe
                        </h4>
                        <span className="block text-sm text-gray-500">
                          CEO-Founder
                        </span>
                      </div>
                      <p className="mt-8 text-gray-300 dark:text-gray-600">
                        Quae labore quia tempora dolor impedit. Possimus, sint
                        ducimus ipsam?
                      </p>
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
                        <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
                          Hentoni Doe
                        </h4>
                        <span className="block text-sm text-gray-500">
                          CEO-Founder
                        </span>
                      </div>
                      <p className="mt-8 text-gray-300 dark:text-gray-600">
                        Quae labore quia tempora dolor impedit. Possimus, sint
                        ducimus ipsam?
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
              <section className="py-14 lg:py-24 relative">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
                    <div className="img-box">
                      <img
                        src="https://pagedone.io/asset/uploads/1702034769.png"
                        alt="About Us tailwind page"
                        className="max-lg:mx-auto"
                      />
                    </div>
                    <div className="lg:pl-[100px] flex items-center">
                      <div className="data w-full">
                        <h2 className="font-manrope font-bold text-xl lg:text-4xl text-indigo-600 mb-9 max-lg:text-center relative">
                        Crafting the Future{" "}
                        </h2>
                        <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                          Welcome to G-Campus, where innovation meets
                          creativity, and passion fuels seamless user
                          experiences. At G-Campus, we've meticulously crafted
                          Pagedone to empower creators, designers, and
                          developers alike. Our mission? To provide you with a
                          comprehensive toolkit that enables you to build
                          intuitive, beautiful interfaces that resonate with
                          users on every interaction. Join us in our journey to
                          redefine the art of digital creation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
