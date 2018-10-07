import React from "react";

import GalleryItem from "./GalleryItem/GalleryItem";

import galImg1 from "../../../assets/img/gal-1.jpeg";
import galImg2 from "../../../assets/img/gal-2.jpeg";
import galImg3 from "../../../assets/img/gal-3.jpeg";
import galImg4 from "../../../assets/img/gal-4.jpeg";
import galImg5 from "../../../assets/img/gal-5.jpeg";
import galImg6 from "../../../assets/img/gal-6.jpeg";
import galImg7 from "../../../assets/img/gal-7.jpeg";
import galImg8 from "../../../assets/img/gal-8.jpeg";
import galImg9 from "../../../assets/img/gal-9.jpeg";
import galImg10 from "../../../assets/img/gal-10.jpeg";
import galImg11 from "../../../assets/img/gal-11.jpeg";
import galImg12 from "../../../assets/img/gal-12.jpeg";
import galImg13 from "../../../assets/img/gal-13.jpeg";
import galImg14 from "../../../assets/img/gal-14.jpeg";

let galleryData = {
  galleryImage1: {
    imgNum: "1",
    imgSrc: galImg1,
    imgAlt: "Gallery House 1"
  },
  galleryImage2: {
    imgNum: "2",
    imgSrc: galImg2,
    imgAlt: "Gallery House 2"
  },
  galleryImage3: {
    imgNum: "3",
    imgSrc: galImg3,
    imgAlt: "Gallery House 3"
  },
  galleryImage4: {
    imgNum: "4",
    imgSrc: galImg4,
    imgAlt: "Gallery House 4"
  },
  galleryImage5: {
    imgNum: "5",
    imgSrc: galImg5,
    imgAlt: "Gallery House 5"
  },
  galleryImage6: {
    imgNum: "6",
    imgSrc: galImg6,
    imgAlt: "Gallery House 6"
  },
  galleryImage7: {
    imgNum: "7",
    imgSrc: galImg7,
    imgAlt: "Gallery House 7"
  },
  galleryImage8: {
    imgNum: "8",
    imgSrc: galImg8,
    imgAlt: "Gallery House 8"
  },
  galleryImage9: {
    imgNum: "9",
    imgSrc: galImg9,
    imgAlt: "Gallery House 9"
  },
  galleryImage10: {
    imgNum: "10",
    imgSrc: galImg10,
    imgAlt: "Gallery House 10"
  },
  galleryImage11: {
    imgNum: "11",
    imgSrc: galImg11,
    imgAlt: "Gallery House 11"
  },
  galleryImage12: {
    imgNum: "12",
    imgSrc: galImg12,
    imgAlt: "Gallery House 12"
  },
  galleryImage13: {
    imgNum: "13",
    imgSrc: galImg13,
    imgAlt: "Gallery House 13"
  },
  galleryImage14: {
    imgNum: "14",
    imgSrc: galImg14,
    imgAlt: "Gallery House 14"
  }
};

let galleryImages = [];
for (let key in galleryData) {
  galleryImages.push(
    <GalleryItem
      key={key}
      imgSrc={galleryData[key].imgSrc}
      imgAlt={galleryData[key].imgAlt}
      imgNum={galleryData[key].imgNum}
    />
  );
}

const Gallery = () => <section className="gallery">{galleryImages}</section>;

export default Gallery;
