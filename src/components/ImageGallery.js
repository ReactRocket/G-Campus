import React, { useState, useEffect } from "react";
import ImageZoomView from "./ImageZoomView";

const ImageGallery = ({ title, subTitle, images }) => {
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
      <section class="text-gray-600 body-font ">
        <div class=" px-5 py-10 mx-auto ">
          <div class="flex flex-col text-center w-full mb-10">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              {title || "Title"}
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              {subTitle || "Sub Title"}
            </p>
          </div>
          <div class="flex flex-wrap border-2 rounded-md">
            {images?.map((src) => {
              return (
                <div class="lg:w-1/3 sm:w-1/2 p-4  ">
                  <div class="flex  ">
                    <img
                      onClick={(e) => {
                        setZoomToggle(!zoomToggle);
                        setZoomToggleImage(e.target.currentSrc);
                      }}
                      title="Click to zoom in"
                      alt="gallery"
                      class="scale-100  hover:scale-105 transition-all duration-1000   w-full h-full object-cover object-center rounded-md cursor-zoom-in ease-linear"
                      src={src || "https://dummyimage.com/600x360"}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageGallery;
