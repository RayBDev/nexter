import React from "react";

import Icon from "../../../UI/Icon/Icon";

const Card = props => (
  <div className="home">
    <img src={props.houseImg} alt={props.houseImgAlt} className="home__img" />
    <Icon clName="home__like" icName="heart-full" />
    <h5 className="home__name">{props.houseName}</h5>
    <div className="home__location">
      <Icon icName="map-pin" />
      <p>{props.location}</p>
    </div>
    <div className="home__rooms">
      <Icon icName="profile-male" />
      <p>{props.rooms} rooms</p>
    </div>
    <div className="home__area">
      <Icon icName="expand" />
      <p>
        {props.area} m<sup>2</sup>
      </p>
    </div>
    <div className="home__price">
      <Icon icName="key" />
      <p>{props.price}</p>
    </div>
    <button className="btn home__btn">Contact Realtor</button>
  </div>
);

export default Card;
