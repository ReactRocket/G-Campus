import React from "react";
import { Link } from "react-router-dom";
import team from '../resources/images/College-img.jpg'

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

            {/* Team section */}
            <section className="mt-12 lg:mt-24">
              <div className="mb-16">
                <dh-component>
                  <div className="container flex justify-center mx-auto pt-16">
                    <div>
                      <p className="text-gray-500 text-lg text-center font-normal pb-3">
                        BUILDING TEAM
                      </p>
                      <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                        The Talented People Behind the Scenes of the
                        Organization
                      </h1>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 px-10 pt-10">
                    <div className="container mx-auto">
                      <div
                        role="list"
                        aria-label="Behind the scenes People "
                        className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
                      >
                        <div
                          role="listitem"
                          className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                        >
                          <div className="rounded overflow-hidden shadow-md bg-white">
                            <div className="absolute -mt-20 w-full flex justify-center">
                              <div className="h-32 w-32">
                                <img
                                  src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                                  alt="Display of Andres Berlin"
                                  className="rounded-full object-cover h-full w-full shadow-md"
                                />
                              </div>
                            </div>
                            <div className="px-6 mt-16">
                              <h1 className="font-bold text-3xl text-center mb-1">
                                Ayush Verma
                              </h1>
                              <p className="text-gray-800 text-sm text-center">
                                Chief Executive Officer
                              </p>
                              <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                The CEO's role in raising a company's corporate
                                IQ is to establish an atmosphere that promotes
                                knowledge sharing and collaboration.
                              </p>
                              <div className="w-full flex justify-center pt-5 pb-5">
                                <a
                                  href="https://github.com/ReactRocket"
                                  className="mx-5"
                                >
                                  <div aria-label="Github" role="img">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="#718096"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-github"
                                    >
                                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="https://twitter.com/VarmaAyush1"
                                  className="mx-5"
                                >
                                  <div aria-label="Twitter" role="img">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="#718096"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-twitter"
                                    >
                                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="https://www.instagram.com/dev.varma_ji/"
                                  className="mx-5"
                                >
                                  <div aria-label="Instagram" role="img">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="#718096"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-instagram"
                                    >
                                      <rect
                                        x="2"
                                        y="2"
                                        width="20"
                                        height="20"
                                        rx="5"
                                        ry="5"
                                      ></rect>
                                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                      <line
                                        x1="17.5"
                                        y1="6.5"
                                        x2="17.51"
                                        y2="6.5"
                                      ></line>
                                    </svg>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          role="listitem"
                          className=" xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                        >
                          <div className="rounded overflow-hidden shadow-md bg-white">
                            <div className="absolute -mt-20 w-full flex justify-center">
                              <div className="h-32 w-32">
                                <img
                                  src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif"
                                  alt="Display of Silene Tokyo"
                                  className="rounded-full object-cover h-full w-full shadow-md"
                                />
                              </div>
                            </div>
                            <div className="px-6 mt-16">
                              <h1 className="font-bold text-3xl text-center mb-1">
                                Pandey Ramashankar
                              </h1>
                              <p className="text-gray-800 text-sm text-center">
                                Product Design Head
                              </p>
                              <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                The emphasis on innovation and technology in our
                                companies has resulted in a few of them
                                establishing global benchmarks in product design
                                and development.
                              </p>
                              <div className="w-full flex justify-center pt-5 pb-5">
                                <a
                                  href="https://github.com/sanju-react"
                                  className="mx-5"
                                >
                                  <div aria-label="Github" role="img">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="#718096"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-github"
                                    >
                                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href=" https://x.com/Rama1302Pandey?t=j29ERig7clDz95x4A2B9RQ&s=08 "
                                  className="mx-5"
                                >
                                  <div aria-label="Twitter" role="img">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="#718096"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-twitter"
                                    >
                                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="https://www.instagram.com/_sanju_pandey_09?igsh=ZGNjOWZkYTE3MQ=="
                                  className="mx-5"
                                >
                                  <div aria-label="Instagram" role="img">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="#718096"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-instagram"
                                    >
                                      <rect
                                        x="2"
                                        y="2"
                                        width="20"
                                        height="20"
                                        rx="5"
                                        ry="5"
                                      ></rect>
                                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                      <line
                                        x1="17.5"
                                        y1="6.5"
                                        x2="17.51"
                                        y2="6.5"
                                      ></line>
                                    </svg>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          role="listitem"
                          className=" mx-auto xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                        >
                          <div className=" rounded overflow-hidden shadow-md bg-white">
                            <div className="absolute -mt-20 w-full flex justify-center">
                              <div className="h-32 w-32">
                                <img
                                  src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif"
                                  alt="Display of Silene Tokyo"
                                  class="rounded-full object-cover h-full w-full shadow-md"
                                />
                              </div>
                            </div>
                            <div className="px-6 mt-16 items-start">
                              <h1 className="font-bold text-3xl text-center mb-1">
                                Kishore Sunchu
                              </h1>
                              <p className="text-gray-800 text-sm text-center">
                                Product Design Head
                              </p>
                              <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                The emphasis on innovation and technology in our
                                companies has resulted in a few of them
                                establishing global benchmarks in product design
                                and development.
                              </p>
                              <div className="w-full flex justify-center pt-5 pb-5">
                                <a
                                  href="https://github.com/kishore-sunchu"
                                  className="mx-5"
                                >
                                  <div aria-label="Github" role="img">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="#718096"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-github"
                                    >
                                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="https://twitter.com/P1101Sunchu"
                                  className="mx-5"
                                >
                                  <div aria-label="Twitter" role="img">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="#718096"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-twitter"
                                    >
                                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="https://www.instagram.com/_kishore_sunchu_0426/"
                                  className="mx-5"
                                >
                                  <div aria-label="Instagram" role="img">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="#718096"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-instagram"
                                    >
                                      <rect
                                        x="2"
                                        y="2"
                                        width="20"
                                        height="20"
                                        rx="5"
                                        ry="5"
                                      ></rect>
                                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                      <line
                                        x1="17.5"
                                        y1="6.5"
                                        x2="17.51"
                                        y2="6.5"
                                      ></line>
                                    </svg>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </dh-component>
              </div>
            </section>

            {/* CTA section */}
            {/* <section className="mt-12 lg:mt-36">
              <h2 className="font-display text-2xl font-bold text-heading lg:text-4xl">
                We are looking for{" "}
                <span className="">
                  passionate, inspired people
                </span>{" "}
                who seek to change the world of financing. Come join us for a{" "}
                <span className="">4-day workweek</span>,{" "}
                <span className="">async & remote</span>,
                worldwide,{" "}
                <span className="">competitive pay</span>, full
                benefits and{" "}
                <span className="">amazing people</span>!
              </h2>
            </section> */}
          
            <section className="mt-12 lg:mt-36 mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold text-heading lg:text-5xl text-blue-500">
                Welcome to{" "}
                <Link href="#" className="text-blue-700 font-bold">
                  {" "}
                  G-campus
                </Link>{" "}
                : Shaping Future Leaders and Minds
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Are you passionate about academic excellence and fostering a
                vibrant learning community? <Link href="#" className="text-blue-700 font-bold">
                    {" "}
                    G-campus
                  </Link>{" "} is seeking dedicated
                individuals who aspire to contribute to shaping the future. Join
                us for a fulfilling educational experience, enjoy a dynamic
                learning environment, collaborative projects, and engage with a
                diverse and talented faculty!
              </p>
            </section>

            {/* Jobs section */}
            {/* <section className="relative mt-12 lg:mt-36">
              <div className="relative z-10 text-sm font-semibold uppercase tracking-tight text-[#ff7b60]">
                Async, remote worldwide
              </div>
              <h2 className="font-display relative z-10 mt-4 text-3xl font-bold text-heading lg:text-5xl lg:tracking-tight">
                Open Positions
              </h2>

              <div className="relative z-10 mt-8 grid gap-x-32 gap-y-8 lg:mt-16 lg:grid-cols-2 lg:gap-y-20">
                <div className="max-w-md">
                  <h3 className="text-xl font-bold tracking-tight text-heading">
                    Full Stack Developer
                  </h3>
                  <div className="mt-3 text-sm font-medium text-heading">
                    $160-220k
                  </div>
                  <p className="mt-4">
                    We need a full stack developer to help us build out our
                    infrastructure, including our next-level experience. You
                    will be responsible for collaborating with other
                    senior-level engineers and implementing best practices in
                    your work.
                  </p>
                  <a
                    href="#"
                    className="mt-4 inline-block text-[#2aefe6] hover:brightness-125 focus:brightness-125"
                  >
                    View full position
                  </a>
                </div>
                <div className="max-w-md">
                  <h3 className="text-xl font-bold tracking-tight text-heading">
                    Product Designer
                  </h3>
                  <div className="mt-3 text-sm font-medium text-heading">
                    $160-220k
                  </div>
                  <p className="mt-4">
                    You'll be responsible for implementing best practices in
                    infrastructure, and collaborating with other senior-level
                    engineers to make sure that the product is always running
                    smoothly.
                  </p>
                  <a
                    href="#"
                    className="mt-4 inline-block text-[#2aefe6] hover:brightness-125 focus:brightness-125"
                  >
                    View full position
                  </a>
                </div>
                <div className="max-w-md">
                  <h3 className="text-xl font-bold tracking-tight text-heading">
                    Front End Engineer
                  </h3>
                  <div className="mt-3 text-sm font-medium text-heading">
                    $160-220k
                  </div>
                  <p className="mt-4">
                    We're looking for someone who has experience managing
                    complex systems at scale, and we want someone who can work
                    independently but also thrive in a collaborative
                    environment.
                  </p>
                  <a
                    href="#"
                    className="mt-4 inline-block text-[#2aefe6] hover:brightness-125 focus:brightness-125"
                  >
                    View full position
                  </a>
                </div>
                <div className="max-w-md">
                  <h3 className="text-xl font-bold tracking-tight text-heading">
                    Senior UX Designer
                  </h3>
                  <div className="mt-3 text-sm font-medium text-heading">
                    $160-220k
                  </div>
                  <p className="mt-4">
                    You'll be responsible for implementing best practices in
                    infrastructure, and collaborating with other senior-level
                    engineers to make sure that the product is always running
                    smoothly.
                  </p>
                  <a
                    href="#"
                    className="mt-4 inline-block text-[#2aefe6] hover:brightness-125 focus:brightness-125"
                  >
                    View full position
                  </a>
                </div>
              </div>
            </section> */}
          </main>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
