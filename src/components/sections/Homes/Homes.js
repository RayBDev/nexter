import React from "react";

import Card from "./Card/Card";

import house1 from "../../../assets/img/house-1.jpeg";
import house2 from "../../../assets/img/house-2.jpeg";
import house3 from "../../../assets/img/house-3.jpeg";
import house4 from "../../../assets/img/house-4.jpeg";
import house5 from "../../../assets/img/house-5.jpeg";
import house6 from "../../../assets/img/house-6.jpeg";

const cardData = {
  house1: {
    houseImg: house1,
    houseImgAlt: "House 1",
    houseName: "Beautiful Family House",
    location: "USA",
    rooms: "5",
    area: "325",
    price: "$1,200,000"
  },
  house2: {
    houseImg: house2,
    houseImgAlt: "House 2",
    houseName: "Modern Glass Villa",
    location: "Canada",
    rooms: "6",
    area: "350",
    price: "$2,750,000"
  },
  house3: {
    houseImg: house3,
    houseImgAlt: "House 3",
    houseName: "Cozy Country House",
    location: "UK",
    rooms: "4",
    area: "250",
    price: "$850,000"
  },
  house4: {
    houseImg: house4,
    houseImgAlt: "House 4",
    houseName: "Large Rustical Villa",
    location: "Portugal",
    rooms: "6",
    area: "480",
    price: "$1,950,000"
  },
  house5: {
    houseImg: house5,
    houseImgAlt: "House 5",
    houseName: "Majestic Palace House",
    location: "Germany",
    rooms: "18",
    area: "4230",
    price: "$9,500,000"
  },
  house6: {
    houseImg: house6,
    houseImgAlt: "House 6",
    houseName: "Modern Family Apartment",
    location: "Italy",
    rooms: "3",
    area: "180",
    price: "$600,000"
  }
};

let cards = [];
for (let key in cardData) {
  cards.push(
    <Card
      houseImg={cardData[key].houseImg}
      houseImgAlt={cardData[key].houseImgAlt}
      houseName={cardData[key].houseName}
      location={cardData[key].location}
      rooms={cardData[key].rooms}
      area={cardData[key].area}
      price={cardData[key].price}
    />
  );
}

const Homes = () => <section className="homes">{cards}</section>;

export default Homes;
