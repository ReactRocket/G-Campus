import React, { useState, useEffect } from "react";
import ImageZoomView from "./ImageZoomView";

const ImageGallery = ({ title, subTitle }) => {
  const [zoomToggle, setZoomToggle] = useState(false);
  const [zoomToggleImage, setZoomToggleImage] = useState("");

  useEffect(() => {
    const handleBodyOverflow = () => {
      document.querySelector("body").style.overflowY = "scroll";
      document.querySelector("body").style.overflowX = "hidden";
      document.querySelector("body").style.scrollBehavior = "smooth";
    };

    if (zoomToggle) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      handleBodyOverflow();
    }
  }, [zoomToggle, zoomToggleImage]);

  return (
    <div>
      {zoomToggle && (
        <ImageZoomView
          img={zoomToggleImage}
          zoomToggle={zoomToggle}
          setZoomToggle={setZoomToggle}
        />
      )}
      <section className="text-gray-600 body-font ">
        <div className=" px-5 py-10 mx-auto ">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-600 hover:underline underline-offset-2 cursor-pointer">
              {title || "Title"}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {subTitle || "Sub Title"}
            </p>
          </div>
          <div className="flex flex-wrap border-2 rounded-md">
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="lg:w-1/3 sm:w-1/2 p-4  ">
                  <div className="flex  ">
                    <img
                      onClick={(e) => {
                        setZoomToggle(!zoomToggle);
                        setZoomToggleImage(e.target.currentSrc);
                      }}
                      title="Click to zoom in"
                      alt="gallery"
                      className="scale-100  hover:scale-105 transition-all duration-1000 aspect-square  w-full h-full object-cover object-center rounded-md cursor-zoom-in ease-linear"
                      src={`https://source.unsplash.com/500x500/?indian,${title}-${index}`}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageGallery;
