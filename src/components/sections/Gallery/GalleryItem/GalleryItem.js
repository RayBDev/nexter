import React from "react";

const GalleryItem = props => (
  <figure className={`gallery__item gallery__item--${props.imgNum}`}>
    <img src={props.imgSrc} alt={props.imgAlt} className="gallery__img" />
  </figure>
);

export default GalleryItem;
