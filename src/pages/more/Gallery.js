import React from "react";
import ImageGallery from "../../components/ImageGallery";

// garba
import Garba1 from "../../resources/images/gallery/garba/Garba1.jpeg";
import Garba2 from "../../resources/images/gallery/garba/Garba2.jpeg";
import Garba3 from "../../resources/images/gallery/garba/Garba3.jpeg";
import Garba4 from "../../resources/images/gallery/garba/Garba4.jpeg";
import Garba5 from "../../resources/images/gallery/garba/Garba5.jpeg";
import Garba6 from "../../resources/images/gallery/garba/Garba6.jpeg";

//P
import bks1 from "../../resources/images/gallery/bks/bks1.jpeg";
import bks2 from "../../resources/images/gallery/bks/bks2.jpeg";
import bks3 from "../../resources/images/gallery/bks/bks3.jpeg";

//Lifting Tournament
import P1 from "../../resources/images/gallery/Lifting Tournament/P1.jpeg";
import P2 from "../../resources/images/gallery/Lifting Tournament/P2.jpeg";
import P3 from "../../resources/images/gallery/Lifting Tournament/P3.jpeg";

// Handicraft Competition
import H1 from "../../resources/images/gallery/Handicraft Competition/H1.jpeg";
import H2 from "../../resources/images/gallery/Handicraft Competition/H2.jpeg";
import H3 from "../../resources/images/gallery/Handicraft Competition/H3.jpeg";

//154th GANDHI JAYANTI
import A37 from "../../resources/images/gallery/GANDHI JAYANTI/A37.jpeg";
import A38 from "../../resources/images/gallery/GANDHI JAYANTI/A38.jpeg";
import A39 from "../../resources/images/gallery/GANDHI JAYANTI/A39.jpeg";

// SWACHHTA HI SEVA
import A32 from "../../resources/images/gallery/SWACHHTA HI SEVA/A32.jpeg";
import A33 from "../../resources/images/gallery/SWACHHTA HI SEVA/A33.jpeg";
import A34 from "../../resources/images/gallery/SWACHHTA HI SEVA/A34.jpeg";

const GalleryArrayData = [
  {
    title: "Garba Celebration",
    subTitle: "COLLEGE STAFF & STUDENTS",
    images: [Garba1, Garba2, Garba3, Garba4, Garba5, Garba6],
  },
  {
    title: "A Session On 'Bhartiya Knowledge System",
    subTitle: "COLLEGE STAFF & FIRST YEAR STUDENTS",
    images: [bks1, bks2, bks3],
  },
  {
    title: "VNSGU Inter College Power Lifting Tournament",
    subTitle: "CHAMPION: UDHNA COLLEGE",
    images: [P2, P1, P3],
  },
  {
    title: "Handicraft Competition",
    subTitle: "COLLEGE STAFF AND STUDENTS",
    images: [H1, H2, H3],
  },
  {
    title: "154th GANDHI JAYANTI",
    subTitle: "INTERNATIONAL DAY OF NON-VIOLENCE",
    images: [A37, A38, A39],
  },
  {
    title: "SWACHHTA HI SEVA",
    subTitle: "EK TAREEKH EK KALAK EK SAATH CAMPAIGN (01/10/2023)",
    images: [A32, A33, A34],
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
                images={item.images}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
