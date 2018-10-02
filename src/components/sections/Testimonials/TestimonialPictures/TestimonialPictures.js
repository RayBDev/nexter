import React from "react";

import testimonialCouple from "../../../../assets/img/story-1.jpeg";
import testimonialHouse from "../../../../assets/img/story-2.jpeg";

const TestimonialsPictures = () => (
  <div className="testimonials__pictures">
    <img
      src={testimonialCouple}
      alt="Couple with new house"
      className="testimonials__img--1"
    />
    <img
      src={testimonialHouse}
      alt="New house"
      className="testimonials__img--2"
    />
  </div>
);

export default TestimonialsPictures;
