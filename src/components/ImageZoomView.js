import React from "react";

const ImageZoomView = ({ img, zoomToggle, setZoomToggle }) => {
  return (
    <div className="z-50 fixed top-0 left-0 bg-white p-10 flex justify-center items-center h-screen w-screen overflow-hidden ">
      <img
        title="Click to zoom out"
        onClick={() => setZoomToggle(!zoomToggle)}
        src={img}
        alt={img}
        className="object-cover md:h-full h-auto  w-auto  cursor-zoom-out rounded-lg"
      />

      <a
        href={img}
        title="Click Here To Download"
        className="fixed bottom-5 right-7 "
        alt={img}
        download
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-download"
          viewBox="0 0 16 16"
        >
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
        </svg>
      </a>
    </div>
  );
};

export default ImageZoomView;
