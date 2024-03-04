import React from "react";

const ImageGridView = ({ title, description, data }) => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            {title || "Title"}
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            {description || "Description"}
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          {data?.map((item) => {
            return (
              <div class="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer ">
                <div class="flex relative ">
                  <img
                    alt="gallery"
                    class="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                    src={item.src || "https://dummyimage.com/600x360"}
                  />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 rounded-md">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                      {item.title || "Title"}
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      {item.subTitle || "Sub-Title"}
                    </h1>
                    <p class="leading-relaxed">
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
