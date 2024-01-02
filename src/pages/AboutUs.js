import React from 'react'

function AboutUs() {
  return (
    <>
      <div className="overflow-hidden px-6">
        <div className="mx-auto mt-7 w-full max-w-6xl lg:mt-14">

          <main className="my-14 lg:mt-24">
            {/* Hero section */}
            <section className="relative">
              <div className="text-sm font-semibold uppercase tracking-tight text-[#ff7b60]">
                Team
              </div>

              <h1 className="font-display relative z-10 mt-4 text-4xl font-bold leading-tight tracking-tight text-heading lg:mt-8 lg:text-6xl">
                We are on a mission to build financial{" "}
                <span className="text-[#2aefe6]">products that help people</span>{" "}
                <span className="text-[#ff7b60]">
                  achieve financial independence
                </span>{" "}
                on autopilot.
              </h1>

              <div className="relative mt-12 lg:mt-24">
                <div className="absolute inset-x-0 inset-y-0 rounded-3xl bg-gradient-to-b from-[#2aefe6] to-[#ff7b60] blur-md lg:top-4 lg:-bottom-4 lg:blur-xl"></div>
                <img
                  src="https://res.cloudinary.com/dbbfbpsc2/image/upload/v1664091452/saasblocks-tdg1/assets/penta_about_hero.png"
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
                  We believe that everyone deserves the opportunity to be
                  financially secure, but many people don't know where to start.
                  That's why we built Fintrade, an easy-to-use platform that helps
                  you get started with your own financial plan and reach your
                  goals.
                </p>
                <p>
                  Our team consists of 6 people from all walks of life, who are
                  passionate about helping people reach financial independence.
                  We're completely bootstrapped and profitable—and we're always
                  looking for new ways to improve our product and customer
                  experience.
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
                  We believe that everyone deserves the opportunity to be
                  financially secure, but many people don't know where to start.
                  That's why we built Fintrade, an easy-to-use platform that helps
                  you get started with your own financial plan and reach your
                  goals.
                </p>
                <p className="mt-8">
                  Our team consists of 6 people from all walks of life, who are
                  passionate about helping people reach financial independence.
                  We're completely bootstrapped and profitable—and we're always
                  looking for new ways to improve our product and customer
                  experience.
                </p>
              </div>


            </section>

            {/* Team section */}
            <section className="mt-12 lg:mt-24">
              <h2 className="font-display relative text-3xl font-bold tracking-tight text-heading lg:text-5xl lg:tracking-tighter">
                Our team
                <span className="absolute -bottom-4 left-0 h-[3px] w-16 bg-[#2aefe6] lg:-bottom-5"></span>
              </h2>
              <div className="mt-12 grid gap-x-18 gap-y-8 lg:mt-14 lg:grid-cols-2 lg:gap-y-24">
                <div className="flex flex-col gap-2 lg:flex-row lg:gap-8">
                  <div className="shrink-0">
                    <img
                      src="/assets/avatars/pasquale-blanco.png"
                      alt="avatar"
                      className="inline-block h-18 w-18 rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-heading">
                      Awaits Pruitt, CEO
                    </h3>
                    <p className="mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Condimentum morbi in tristique suscipit purus. Turpis
                      phasellus vitae lectus nisl magna. Pharetra nam eget sed
                      cras tortor odio diam. Sit habitant lacus viverra ligula
                      consectetur nam commodo.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 lg:flex-row lg:gap-8">
                  <div className="shrink-0">
                    <img
                      src="/assets/avatars/cedric-green.png"
                      alt="avatar"
                      className="inline-block h-18 w-18 rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-heading">
                      Felix Hart, CTO
                    </h3>
                    <p className="mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Condimentum morbi in tristique suscipit purus. Turpis
                      phasellus vitae lectus nisl magna. Pharetra nam eget sed
                      cras tortor odio diam. Sit habitant lacus viverra ligula
                      consectetur nam commodo.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 lg:flex-row lg:gap-8">
                  <div className="shrink-0">
                    <img
                      src="/assets/avatars/irina-zaytesev.png"
                      alt="avatar"
                      className="inline-block h-18 w-18 rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-heading">
                      Dawn Mansell, Product Designer
                    </h3>
                    <p className="mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Condimentum morbi in tristique suscipit purus. Turpis
                      phasellus vitae lectus nisl magna. Pharetra nam eget sed
                      cras tortor odio diam. Sit habitant lacus viverra ligula
                      consectetur nam commodo.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 lg:flex-row lg:gap-8">
                  <div className="shrink-0">
                    <img
                      src="/assets/avatars/john-smith.png"
                      alt="avatar"
                      className="inline-block h-18 w-18 rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-heading">
                      Phillip Wade, UX Designer
                    </h3>
                    <p className="mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Condimentum morbi in tristique suscipit purus. Turpis
                      phasellus vitae lectus nisl magna. Pharetra nam eget sed
                      cras tortor odio diam. Sit habitant lacus viverra ligula
                      consectetur nam commodo.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 lg:flex-row lg:gap-8">
                  <div className="shrink-0">
                    <img
                      src="/assets/avatars/dianne-russell.png"
                      alt="avatar"
                      className="inline-block h-18 w-18 rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-heading">
                      Ayat Zamora, CFO
                    </h3>
                    <p className="mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Condimentum morbi in tristique suscipit purus. Turpis
                      phasellus vitae lectus nisl magna. Pharetra nam eget sed
                      cras tortor odio diam. Sit habitant lacus viverra ligula
                      consectetur nam commodo.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 lg:flex-row lg:gap-8">
                  <div className="shrink-0">
                    <img
                      src="/assets/avatars/nicholas-turner.png"
                      alt="avatar"
                      className="inline-block h-18 w-18 rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-heading">
                      Waseem Houghton, Recruiting
                    </h3>
                    <p className="mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Condimentum morbi in tristique suscipit purus. Turpis
                      phasellus vitae lectus nisl magna. Pharetra nam eget sed
                      cras tortor odio diam. Sit habitant lacus viverra ligula
                      consectetur nam commodo.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA section */}
            <section className="mt-12 lg:mt-36">
              <h2 className="font-display text-2xl font-bold text-heading lg:text-4xl">
                We are looking for{" "}
                <span className="text-[#2aefe6]">
                  passionate, inspired people
                </span>{" "}
                who seek to change the world of financing. Come join us for a{" "}
                <span className="text-[#ff7b60]">4-day workweek</span>,{" "}
                <span className="text-[#ff7b60]">async & remote</span>, worldwide,{" "}
                <span className="text-[#ff7b60]">competitive pay</span>, full
                benefits and{" "}
                <span className="text-[#2aefe6]">amazing people</span>!
              </h2>
            </section>

            {/* Jobs section */}
            <section className="relative mt-12 lg:mt-36">
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
                    infrastructure, including our next-level experience. You will
                    be responsible for collaborating with other senior-level
                    engineers and implementing best practices in your work.
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
                    We're looking for someone who has experience managing complex
                    systems at scale, and we want someone who can work
                    independently but also thrive in a collaborative environment.
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
            </section>
          </main>

        </div>
      </div>
    </>
  )
}

export default AboutUs
