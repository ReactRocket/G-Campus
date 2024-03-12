import React from "react";
import ImageGallery from "../../components/ImageGallery";



const GalleryArrayData = [
  {
    title: "Garba Celebration",
    subTitle: "COLLEGE STAFF & STUDENTS",
  },
  {
    title: "A Session On 'Bhartiya Knowledge System",
    subTitle: "COLLEGE STAFF & FIRST YEAR STUDENTS",
  },
  {
    title: "VNSGU Inter College Power Lifting Tournament",
    subTitle: "CHAMPION: UDHNA COLLEGE",
  },
  {
    title: "Handicraft Competition",
    subTitle: "COLLEGE STAFF AND STUDENTS",
  },
  {
    title: "154th GANDHI JAYANTI",
    subTitle: "INTERNATIONAL DAY OF NON-VIOLENCE",
  },
  {
    title: "SWACHHTA HI SEVA",
    subTitle: "EK TAREEKH EK KALAK EK SAATH CAMPAIGN (01/10/2023)",
  },
];

const Gallery = () => {
  return (
    <>
      <section className="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
        <h1 className="text-5xl font-semibold text-center my-10">
          COLLEGE ACTIVITIES:2023-24
        </h1>

        <div className="flex justify-center items-center flex-col gap-10 ">
          {GalleryArrayData.map((item, key) => {
            return (
              <ImageGallery
                key={key}
                title={item.title}
                subTitle={item.subTitle}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
