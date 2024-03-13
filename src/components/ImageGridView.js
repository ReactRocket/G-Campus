import React from "react";

const ImageGridView = ({ title, description, data }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            {title || "Title"}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {description || "Description"}
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {data?.map((item, key) => {
            return (
              <div key={key} className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer ">
                <div className="flex relative ">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                    src={`https://source.unsplash.com/500x500/?student,profile-${key}`}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 rounded-md">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                      {item.title || "Title"}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {item.subTitle || "Sub-Title"}
                    </h1>
                    <p className="leading-relaxed">
                      {item.description || "Description"}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImageGridView;
