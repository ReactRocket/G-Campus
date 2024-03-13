import React, { useRef } from "react";
import { Link } from "react-router-dom";
import pdf from "../resources/pdfs/sample-pdf-file.pdf";

const Marquee = ({ data }) => {
  const marqueeRef = useRef(null);

  const stopMarquee = () => {
    if (marqueeRef.current) {
      marqueeRef.current.stop();
    }
  };

  const startMarquee = () => {
    if (marqueeRef.current) {
      marqueeRef.current.start();
    }
  };

  return (
    <div>
      <marquee
        className="shadow-[inset_0px_14px_40px_-17px_#a0aec0] h-52 rounded-lg p-5 w-full text-gray-500 font-semibold"
        behavior="scroll"
        direction="up"
        scrollamount="5"
        scrolldelay="300"
        loop="infinite"
        onMouseOver={stopMarquee}
        onMouseOut={startMarquee}
        ref={marqueeRef}
      >
        {data
          ? data?.map((val, i) => {
              return (
                <Link
                target="_blank"
                  key={i}
                  to="https://ssacscjalgaon.ac.in/public/syllabus/bca.pdf"
                  className="cursor-pointer  my-2 underline hover:text-blue-600 flex justify-start gap-2 items-center"
                >
                  <span> {val.text}</span>{" "}
                  <span className="inline-flex cursor-pointer items-center justify-center rounded-xl border-none bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-2 animate-pulse text-sm font-semibold text-white transition duration-200 hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:text-white dark:focus:ring-white/80">
                    New
                  </span>
                </Link>
              );
            })
          : "No Data Available"}
      </marquee>
    </div>
  );
};

export default Marquee;
