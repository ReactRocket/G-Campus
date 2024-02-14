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
